// B. Починить ответ
// Ограничение времени	2 секунды
// Ограничение памяти	64.0 Мб
// Ввод	стандартный ввод или input.js
// Вывод	стандартный вывод или output.txt
// Необходимо написать функцию, которая вернет целую (корректную) строку с сервера. Однако сервер может вернуть фрагмент строки с дефектами.

// Для запроса к серверу следует использовать fetch, URL сервера доступен из константы API_URL. Сервер отвечает в формате JSON, имеющем следующую структуру:

// {
//     "data": "some_string"
// }
// Необходимо использовать fetch, чтобы с минимальным количеством запросов получить полную строку.

// Ваша функция должна вернуть строку, состоящую только из допустимых символов: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

// Пример:

// function solution() {
//     fetch(API_URL).json(); // "a**",
//     fetch(API_URL).json(); // "*b*",
//     fetch(API_URL).json(); // "**c",

//     return "abc";
// }

// module.exports = solution;

const MAX_REQUESTS = 100000;
const VALID_CHARACTERS_REGEX = /^[A-Za-z0-9]*$/;

const fetchData = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
};

const isValidData = (data) => {
  return VALID_CHARACTERS_REGEX.test(data);
};

const attemptDataFetch = async () => {
  for (let attempt = 0; attempt < MAX_REQUESTS; attempt += 1) {
    try {
      const data = await fetchData();
      if (isValidData(data) || data) {
        return data.split('');
      }
    } catch (error) {
      continue;
    }
  }

  return [];
};

const attemptDataCorrection = async (textArr) => {
  for (let attempt = 0; attempt < MAX_REQUESTS; attempt += 1) {
    try {
      const newData = await fetchData();

      if (!newData) continue;

      const dataArr = newData.split('');

      for (let i = 0; i < dataArr.length; i += 1) {
        if (isValidData(dataArr[i]) && textArr[i] !== dataArr[i]) {
          textArr[i] = dataArr[i];
        }
      }

      if (isValidData(textArr.join(''))) {
        break;
      }
    } catch (error) {
      if (isValidData(textArr.join(''))) {
        break;
      }

      continue;
    }
  }

  return textArr.join('');
};

const solution = async () => {
  let textArr = await attemptDataFetch();
  const strData = textArr.join('');

  if (isValidData(strData)) {
    return strData;
  }

  return await attemptDataCorrection(textArr);
};

module.exports = solution;