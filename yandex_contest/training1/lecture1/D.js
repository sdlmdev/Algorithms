// D. Уравнение с корнем

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Решите в целых числах уравнение: sqrt(ax + b) = c

// a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

// Формат ввода
// Вводятся три числа a, b и c по одному в строке.

// Формат вывода
// Программа должна вывести все решения уравнения в порядке возрастания,
// либо NO SOLUTION (заглавными буквами), если решений нет.
// Если решений бесконечно много, вывести MANY SOLUTIONS.

// Пример 1
// Ввод  	 Вывод
// 1       0
// 0
// 0

// Пример 2
// Ввод    Вывод
// 1       7
// 2
// 3

// Пример 3
// Ввод  	 Вывод
// 1       NO SOLUTION
// 2
// -3

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const numbers = [];

rl.on('line', line => {
  numbers.push(+line);

  if (numbers.length === 3) {
    const [a, b, c] = numbers;

    rl.close();

    if (c < 0) {
      return console.log("NO SOLUTION");
    }

    const x = c * c - b;

    if (a === 0) {
      console.log(x === 0 ? 'MANY SOLUTIONS' : 'NO SOLUTION');
    } else {
      console.log(x % a === 0 ? x / a : 'NO SOLUTION');
    }
  }
});