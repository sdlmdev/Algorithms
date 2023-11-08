// C. Ближайшее число

// Напишите программу, которая находит в массиве элемент, самый близкий по величине к  данному числу.

// Формат ввода

// В первой строке задается одно натуральное число N, не превосходящее 1000 – размер массива.
// Во второй строке содержатся N чисел – элементы массива (целые числа, не превосходящие по модулю 1000).
// В третьей строке вводится одно целое число x, не превосходящее по модулю 1000.

// Формат вывода

// Вывести значение элемента массива, ближайшее к x. Если таких чисел несколько, выведите любое из них.

// Пример 1

// Ввод	       Вывод
// 5           5
// 1 2 3 4 5
// 6

// Пример 2

// Ввод	       Вывод
// 5           3
// 5 4 3 2 1
// 3

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
const [arrLength, arr, x] = input.split('\n');
const dataArr = arr.split(' ').map(Number);

let index = 0;
let minDifference = Math.abs(x - dataArr[0]);

for (let i = 1; i < arrLength; i++) {
  const difference = Math.abs(x - dataArr[i])

  if (difference < minDifference) {
    minDifference = difference;
    index = i;
  }
}

fs.writeFileSync('output.txt', dataArr[index].toString());