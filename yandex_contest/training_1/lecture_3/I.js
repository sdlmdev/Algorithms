// I. Полиглоты

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Каждый из N школьников некоторой школы знает Mi языков.
// Определите, какие языки знают все школьники и языки,
// которые знает хотя бы один из школьников.

// Формат ввода
// Первая строка входных данных содержит количество школьников N.
// Далее идет N чисел Mi, после каждого из чисел идет Mi строк,
// содержащих названия языков, которые знает i-й школьник.
// Длина названий языков не превышает 1000 символов,
// количество различных языков не более 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.

// Формат вывода
// В первой строке выведите количество языков, которые знают все школьники.
// Начиная со второй строки - список таких языков.
// Затем - количество языков, которые знает хотя бы один школьник,
// на следующих строках - список таких языков.

// Пример
// Ввод	        Вывод
// 3            1
// 3            English
// Russian      3
// English      Russian
// Japanese     Japanese
// 2            English
// Russian
// English
// 1
// English

const fs = require('fs');
let [length, ...data] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
length = +length;

const languageIndexes = {};
const languages = new Set();

for (let i = 0; i < data.length; i++) {
  if (!Number.isInteger(+data[i])) {
    const language = data[i];

    languages.add(language);
    
    if (!languageIndexes[language]) {
      languageIndexes[language] = [];
    }

    languageIndexes[language].push(language);
  }
}

const commonLanguages = [];

for (let language of languages) {
  const languageIndexesList = languageIndexes[language];

  if (languageIndexesList.length === length) {
    commonLanguages.push(language);
  }
}

const res = [
  commonLanguages.length + '\n',
  commonLanguages.join('\n') + '\n',
  languages.size + '\n',
  Array.from(languages).join('\n'),
];

fs.writeFileSync('output.txt', res.join(''));