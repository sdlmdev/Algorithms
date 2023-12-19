// B. Определить вид последовательности

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// По последовательности чисел во входных данных определите ее вид:

// CONSTANT – последовательность состоит из одинаковых значений
// ASCENDING – последовательность является строго возрастающей
// WEAKLY ASCENDING – последовательность является нестрого возрастающей
// DESCENDING – последовательность является строго убывающей
// WEAKLY DESCENDING – последовательность является нестрого убывающей
// RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов

// Формат ввода
// По одному на строке поступают числа последовательности.

// Признаком окончания последовательности является число -2 × 10 ** 9. Оно в последовательность не входит.

// Формат вывода
// В единственной строке выведите тип последовательности.

// Пример
// Ввод	          Вывод
// -530           CONSTANT
// -530
// -530
// -530
// -530
// -530
// -2000000000

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const data = input.split(/\r?\n/).map(Number);

let constant = true;
let ascending = true;
let descending = true;
let weaklyAscending = true;
let weaklyDescending = true;

let res = '';

for (let i = 1; data[i] !== -2000000000; i++) {
  if (data[i - 1] !== data[i]) {
    constant = false;
  } 
  if (data[i - 1] >= data[i]) {
    ascending = false;
  } 
  if (data[i - 1] <= data[i]) {
    descending = false;
  } 
  if (data[i - 1] > data[i]) {
    weaklyAscending = false;
  } 
  if (data[i - 1] < data[i]) {
    weaklyDescending = false;
  }
}

switch (true) {
  case constant:
    res = 'CONSTANT';
    break;
  case ascending:
    res = 'ASCENDING';
    break;
  case descending:
    res = 'DESCENDING';
    break;
  case weaklyAscending:
    res = 'WEAKLY ASCENDING';
    break;
  case weaklyDescending:
    res = 'WEAKLY DESCENDING';
    break;
  default:
    res = 'RANDOM';
}

fs.writeFileSync('output.txt', res);