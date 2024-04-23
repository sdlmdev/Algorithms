// B. Асинхронный обход дерева
// Условие
// Напишите чистую функцию deepResolve, которая будет обходить древовидную структуру и возвращать объект, ключами которого являются строки с путями до листьев дерева, а значениями - соответствущие значения листьев. Листом дерева считаем поле объекта, значением которого является значение примитивного типа или промис, возвращающий значение примитивного типа.

// На вход функции подается значение одного из типов:

// Значение примитивного типа
// Объект специального типа { __type: 'url', url: '<URL ресурса>' }, который должен разрешаться в значение, возвращаемое по URL ресурса
// Объект специального типа { __type: 'url-list', urls: ['<URL ресурса 1>', '<URL ресурса 2>', ...] }, который должен разрешаться в значение, возвращаемое по URL ресурса
// Стандартный объект, значениями полей которого может быть любое допустимое значение из этого списка
// Массив, элементами которого могут быть любые допустимые значения из этого списка
// Промис, возвращающий любое допустимое значение из этого списка
// Пример работы со ссылками
// // https://api.ru/get_a вернет
// { a: { __type: 'url', 'https://api.ru/get_b' } }

// // https://api.ru/get_b
// { __type: 'url', 'https://api.ru/get_c' }

// // https://api.ru/get_c
// 'value'

// // В результате будет
// { a: 'value' }
// Обратите внимание, что ссылки могут вести на другие ссылки, а те в свою очередь на другие. В случае, когда ссылка ведет на саму себя либо на ранее посещенную ссылку, нужно выбросить ошибку с сообщением "recursive".

// Возвращаемое значение
// Объект вида { <полный путь до значения>: <значение> }

// Представление путей в виде строк проиллюстрируем примером. Для объекта

// {
//   a: {
//     b: 'string'
//   },
//   c: [1, 2]
// }
// соответствующий объект с путями до значений будет иметь вид:

// {
//   'a.b': 'string',
//   'c.0': 1,
//   'c.1': 2
// }
// Обратите внимание, что для массивов индекс элемента становится частью пути до элемента.

// ВАЖНО! Чтобы получить данные, используйте

// fetch(url).then(e => e.json())
// Другие способы получения данных по URL работать не будут.

// Примеры
// Стандартный случай
// deepResolve({
//     // Вернет { b: { __type: 'url', url: 'https://api.ru/get_b' }, a: 'Строка А' }
//     a: { __type: 'url', url: 'https://api.ru/get_a' },
//     // { вернет "Строка B" }
//     b: { __type: 'url', url: 'https://api.ru/get_b' },
//     c: [Promise.resolve('d'), [1, Promise.resolve(['d', 2, []])]],
//     // Вернет d1 и d2 соответственно
//     d: { __type: 'url-list', urls: ['https://api.ru/get_d1', 'https://api.ru/get_d2'] }
// })

// // Вернет
// {
//     'a.a': 'Строка A',
//     'a.b': 'Строка B',
//     'b': 'Строка B',
//     'c.0': 'd',
//     'c.1.0': 1,
//     'c.1.1.0': 'd',
//     'c.1.1.1': 2,
//     'd.0': 'd1',
//     'd.1': 'd2',
// }
// Без значимых значений
// deepResolve([[[[]]]])
// // Вернет
// {}
// Примитив на вход
// deepResolve(Promise.resolve(5))
// // Вернет пустой объект, т.к. примитивное значение не определяет итерируемых ключей
// {}
// Обработка рекурсии
// // Ссылка, которая будет возвращать себя, т.е. вернет объект { __type: 'url', value: 'https://recursive.com' }
// deepResolve({ __type: 'url', value: 'https://recursive.com' }); // throw new Error('recursive');
// Формат ввода
// {
//   currentUser: fetch('https://my-site.com/web-api/current_user'),
//   users: { __type: 'url', url: 'https://my-site.com/web-api/get_users' },
//   allArticles: {
//     __type: 'url-list',
//     urls: ['https://my-site.com/web-api/get_articles', 'https://my-site.com/web-api/get_archive_articles']
//   }
// }
// Формат вывода
// {
//   'currentUser.id': '1',
//   'currentUser.firstName': 'Ivan',
//   'currentUser.lastName': 'Ivanov',
//   'users.0.id': '1'
//   'users.0.firstName': 'Ivan',
//   'users.0.lastName': 'Ivanov',
//   'users.1.id': '2',
//   'users.1.firstName': 'Arcadiy',
//   'users.1.firstName': 'Volozh',
//   'allArticles.0.0.id': '2',
//   'allArticles.0.0.name': 'My article',
//   'allArticles.0.1.id: '1'
//   'allArticles.0.1.name: 'My archived article',
//   'allArticles.0.1.archived: true,
// }
// Примечания
// Шаблон решения

// function solution(data) {
//     // Ваш код
// }

// module.exports = solution;

const MAX_REQUESTS = 40;

const fetchUrl = async (url, visited, path) => {
    const urlWithPath = `${url}_${path}`;

    if (visited.has(urlWithPath)) {
        throw new Error('recursive');
    }

    visited.add(urlWithPath);

    const req = await fetch(url);
    const curData = await req.json();

    return curData;
};

const fetchUrlList = async (urls, visited, path) => {
    const promises = [];

    for (let i = 0; i < urls.length; i += 1) {
        const url = urls[i];
        const curUrl = `${path}_${i}`;
        const curPath = `${url}_${curUrl}`;

        if (visited.has(curPath)) {
            throw new Error('recursive');
        }

        visited.add(curPath);

        const curData = await fetchUrl(url, visited, path);
        promises.push(curData);
    }

    return await Promise.all(promises);
};

const processPromise = async (data) => {
    const req = await data;
    let curData;

    if (req && typeof req.json === 'function') {
        curData = await req.json();
    } else {
        curData = req;
    }

    return curData;
};

const processObject = async (data, visited, path, cntReq, solution) => {
    const isArray = Array.isArray(data);
    const entries = isArray ? data.entries() : Object.entries(data);
    const entriesArray = [...entries];

    const results = await Promise.all(entriesArray.map(async ([key, value], i) => {
        const indexOrKey = isArray ? i : key;
        const newPath = path ? `${path}.${indexOrKey}` : `${indexOrKey}`;

        return solution(value, visited, newPath, cntReq);
    }));

    let res = {};

    for (const el of results) {
        res = { ...res, ...el };
    }

    return res;
};

const solution = async (data, visited = new Set(), path = '', cntReq = 0) => {
    if (cntReq >= MAX_REQUESTS) {
        throw new Error('recursive');
    }

    if (path.length === 0 && (data === null
        || (typeof data !== 'object' && typeof data !== 'function'))) {
        return {};
    }

    cntReq += 1;

    if (data && typeof data === 'object') {
        if (data.__type === 'url') {
            const curData = await fetchUrl(data.url, visited, path);
            return solution(curData, visited, path, cntReq);
        } else if (data.__type === 'url-list') {
            data = await fetchUrlList(data.urls, visited, path);
            return solution(data, visited, path, cntReq);
        } else if (typeof data.then === 'function') {
            const curData = await processPromise(data);
            return solution(curData, visited, path, cntReq);
        }

        return processObject(data, visited, path, cntReq, solution);
    }

    return { [path]: data };
};

module.exports = solution;