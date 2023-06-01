// 54. Полиглоты
// легкая line handling set standard library

// Каждый из NN школьников некоторой школы знает MiMi​ языков.
// Определите, какие языки знают все школьники и языки, которые знает хотя бы один из школьников.

// Формат ввода
// Первая строка входных данных содержит количество школьников NN.
// Далее идет NN чисел MiMi​, после каждого из чисел идет MiMi​ строк, содержащих названия языков,
// которые знает ii-й школьник. Длина названий языков не превышает 1000 символов,
// количество различных языков не более 1000. 1≤N≤10001≤N≤1000, 1≤Mi≤5001≤Mi​≤500.

// Формат вывода
// В первой строке выведите количество языков, которые знают все школьники.
// Начиная со второй строки - список таких языков. Затем - количество языков,
// которые знает хотя бы один школьник, на следующих строках - список таких языков.

// Пример 1
// Ввод
// 3
// 3
// Russian
// English
// Japanese
// 2
// Russian
// English
// 1
// English

// Вывод
// 1
// English
// 3
// Russian
// Japanese
// English

const checkLangs = (dataArr, N) => {
  const langs = {};

  for (const lang of dataArr) {
    if (!Number.isInteger(+lang)) {
      if (langs[lang] !== undefined) {
        langs[lang] += 1;
      } else {
        langs[lang] = 1;
      }
    }
  }

  const commonLang = [];
  const langArr = Object.keys(langs);

  for (const lang of langArr) {
    if (langs[lang] === N) commonLang.push(lang);
  }

  return [
    commonLang.length,
    commonLang.join('\n'),
    langArr.length,
    ...langArr,
  ].join('\n');
};

const fs = require('fs');
const [n, ...input] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

console.log(checkLangs(input, +n));
