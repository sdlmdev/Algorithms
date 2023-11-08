// A. Возрастает ли список?

// Дан список. Определите, является ли он монотонно возрастающим(то есть верно ли, что каждый элемент этого списка больше предыдущего).

// Выведите YES, если массив монотонно возрастает и NO в противном случае.

// Пример 1

// Ввод	    Вывод
// 1 7 9    YES

// Пример 2

// Ввод	    Вывод
// 1 9 7    NO
// 

// Пример 3

// Ввод	    Вывод
// 2 2 2    NO

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const input = line.split(' ').map(Number);

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] >= input[i]) {
      rl.close();

      return console.log('NO');
    }
  }

  rl.close();

  console.log('YES');
});