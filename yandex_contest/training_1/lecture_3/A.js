// A. Количество различных чисел

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан список чисел, который может содержать до 100000 чисел.
// Определите, сколько в нем встречается различных чисел.

// Формат ввода
// Вводится список целых чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	                   Вывод
// 1 2 3 2 1               3

// Пример 2
// Ввод	                   Вывод
// 1 2 3 4 5 6 7 8 9 10    10

// Пример 3
// Ввод	                   Вывод
// 1 2 3 4 5 1 2 1 2 7 3   6

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const input = line.split(' ');
  const list = new Set();

  for (let i of input) {
    if (!list.has(i)) {
      list.add(i);
    }
  }

  rl.close();
  console.log(list.size);
});

// --------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  rl.close();
  console.log(new Set(line.split(' ')).size);
});
