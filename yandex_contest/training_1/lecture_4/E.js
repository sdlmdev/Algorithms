// E. Пирамида

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Для строительства двумерной пирамиды используются прямоугольные блоки,
// каждый из которых характеризуется шириной и высотой.
// Можно поставить один блок на другой,
// только если ширина верхнего блока строго меньше ширины нижнего (блоки нельзя поворачивать).
// Самым нижним в пирамиде может быть блок любой ширины.
// По заданному набору блоков определите, пирамиду какой наибольшей высоты можно построить из них.

// Формат ввода
// В первой строке входных данных задается число N — количество блоков (1 ≤ N ≤ 100000).
// В следующих N строках задаются пары натуральных чисел wi и hi (1 ≤ wi, hi ≤ 10**9) —
// ширина и высота блока соответственно.

// Формат вывода
// Выведите одно целое число — максимальную высоту пирамиды.

// Пример
// Ввод	   Вывод
// 3       5
// 3 1
// 2 2
// 3 3

// Примечания
// В примере пирамида будет состоять из двух блоков: нижним блоком будет блок номер 3,
// а верхним — блок номер 2. Блок номер 1 нельзя использовать вместе с блоком номер 3.

const fs = require('fs');
const [length, ...blocks] = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
const sizeDict = {};

const distributeWidth = (dict, blocksArr) => {
  for (let block of blocksArr) {
    const [width, height] = block.split(' ').map(Number);

    if (dict[width] === undefined || height > dict[width]) {
      dict[width] = height;
    }
  }
};

distributeWidth(sizeDict, blocks);

const findMaxHeight = (dictionary) => {
  let maxHeight = 0;

  for (let key in dictionary) {
    maxHeight += dictionary[key];
  }

  return maxHeight;
};

fs.writeFileSync('output.txt', findMaxHeight(sizeDict).toString());