// В школе решили на один прямоугольный стол поставить два прямоугольных ноутбука.
// Ноутбуки нужно поставить так, чтобы их стороны были параллельны сторонам стола.
// Определите, какие размеры должен иметь стол, чтобы оба ноутбука на него поместились, и площадь стола была минимальна.

// Формат ввода
// Вводится четыре натуральных числа, первые два задают размеры одного ноутбука, а следующие два — размеры второго. Числа не превышают 1000.

// Формат вывода
// Выведите два числа — размеры стола. Если возможно несколько ответов, выведите любой из них (но только один).

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const [a, b, c, d] = line.split(' ').map(Number);

  const arr = [];

  arr.push(Math.max(a, c) * (b + d));
  arr.push(Math.max(a, d) * (b + c))
  arr.push(Math.max(b, c) * (a + d));
  arr.push(Math.max(b, d) * (a + c));

  if (Math.min(...arr) === arr[0]) {
    rl.close();

    return console.log(Math.max(a, c), b + d);
  }

  if (Math.min(...arr) === arr[1]) {
    rl.close();

    return console.log(Math.max(a, d), b + c);
  }

  if (Math.min(...arr) === arr[2]) {
    rl.close();

    return console.log(Math.max(b, c), a + d);
  }

  rl.close();

  console.log(Math.max(b, d), a + c);
});
