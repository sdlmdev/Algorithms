// B. Максимальная сумма

// Ограничение времени	3 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В этой задаче вам требуется найти непустой отрезок массива с максимальной суммой.

// Формат ввода
// В первой строке входных данных записано единственное число n (1 ≤ n ≤ 3 * 10**5) -  размер массива.
// Во второй строке записано n целых чисел  ai (−10**9 ≤ ai ≤ 10**9) - сам массив.

// Формат вывода
// Выведите одно число - максимальную сумму на отрезке в данном массиве.

// Пример 1
// Ввод	           Вывод
// 4               10
// 1 2 3 4

// Пример 2
// Ввод	           Вывод
// 4               9
// 5 4 -10 4

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cntLine = 0;

rl.on('line', line => {
  if (cntLine === 0) {
    cntLine++;
  } else {
    line = line.trim().split(' ').map(Number);
    let sum = 0;
    let max = line[0];

    for (let num of line) {
      sum += num;
      max = Math.max(sum, max);

      if (sum < 0) {
        sum = 0;
      }
    }

    console.log(max);
    rl.close();
  }
});