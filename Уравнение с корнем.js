// Решите в целых числах уравнение: sqrt(ax + b) = c

// a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

// Формат ввода
// Вводятся три числа a, b и c по одному в строке.

// Формат вывода
// Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION (заглавными буквами), если решений нет. Если решений бесконечно много, вывести MANY SOLUTIONS.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const numbers = [];

rl.on('line', line => {
  numbers.push(+line);

  if (numbers.length === 3) {
    const [a, b, c] = numbers;

    if (c < 0) {
      rl.close();

      return console.log("NO SOLUTION");
    }

    const x = c * c - b;

    if (a === 0) {
      rl.close();

      console.log(x === 0 ? 'MANY SOLUTIONS' : 'NO SOLUTION');
    } else {
      rl.close();

      console.log(x % a === 0 ? x / a : 'NO SOLUTION');
    }
  }
});
