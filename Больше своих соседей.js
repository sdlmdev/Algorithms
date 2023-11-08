// Дан список чисел. Определите, сколько в этом списке элементов, которые больше двух своих соседей и выведите количество таких элементов.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const input = line.split(' ').map(Number);
  let res = 0;

  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] > input[i - 1] && input[i] > input[i + 1]) {
      res += 1;
    }
  }

  rl.close();

  console.log(res);
});
