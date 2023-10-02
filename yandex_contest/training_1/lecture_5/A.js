// A. Стильная одежда

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Глеб обожает шоппинг.
// Как-то раз он загорелся идеей подобрать себе майку и штаны так,
// чтобы выглядеть в них максимально стильно.
// В понимании Глеба стильность одежды тем больше, чем меньше разница в цвете элементов его одежды.

// В наличии имеется N (1 ≤ N ≤ 100 000) маек и M (1 ≤ M ≤ 100 000) штанов,
// про каждый элемент известен его цвет (целое число от 1 до 10 000 000).
// Помогите Глебу выбрать одну майку и одни штаны так, чтобы разница в их цвете была как можно меньше.

// Формат ввода
// Сначала вводится информация о майках:
// в первой строке целое число N (1 ≤ N ≤ 100 000) и во второй N целых чисел от 1 до 10 000 000 —
// цвета имеющихся в наличии маек.
// Гарантируется, что номера цветов идут в возрастающем порядке
// (в частности, цвета никаких двух маек не совпадают).

// Далее в том же формате идёт описание штанов:
// их количество M (1 ≤ M ≤ 100 000) и в следующей строке M целых чисел от 1 до 10 000 000
// в возрастающем порядке — цвета штанов.

// Формат вывода
// Выведите пару неотрицательных чисел — цвет майки и цвет штанов, которые следует выбрать Глебу.
// Если вариантов выбора несколько, выведите любой из них.

// Пример 1
// Ввод	         Вывод
// 2             3 3
// 3 4
// 3
// 1 2 3

// Пример 2
// Ввод	         Вывод
// 2             4 3
// 4 5
// 3
// 1 2 3

// Пример 3
// Ввод	         Вывод
// 5             1 1
// 1 2 3 4 5
// 5
// 1 2 3 4 5

const findMinDifference = (tShArr, trArr) => {
  let minDifference = Infinity;
  const res = [0, 0];
  const maxLength = Math.max(tShArr.length, trArr.length) - 1;
  let i = 0;
  let j = 0;

  while (i <= maxLength && j <= maxLength) {
    if (tShArr[i] === trArr[j]) return [tShArr[i], trArr[j]].join(' ');

    const diff = Math.abs(tShArr[i] - trArr[j]);

    if (minDifference > diff) {
      minDifference = diff;
      res[0] = tShArr[i];
      res[1] = trArr[j];
    }

    if (tShArr[i] < trArr[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return res.join(' ');
};

const fs = require('fs');
let [tShLength, tShColorsArr, trLength, trColorsArr] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

tShColorsArr = tShColorsArr.split(' ').map(Number);
trColorsArr = trColorsArr.split(' ').map(Number);

fs.writeFileSync('output.txt', findMinDifference(tShColorsArr, trColorsArr));