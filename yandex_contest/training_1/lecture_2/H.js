// H. Наибольшее произведение трех чисел

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В данном списке из n ≤ 10 ** 5 целых чисел найдите три числа, произведение которых максимально.

// Решение должно иметь сложность O(n), где n - размер списка.

// Выведите три искомых числа в любом порядке.

// Пример 1
// Ввод	                   Вывод
// 3 5 1 7 9 0 9 -3 10     10 9 9

// Пример 2
// Ввод	                   Вывод
// -5 -30000 -12           -5 -12 -30000

// Пример 3
// Ввод	                   Вывод
// 1 2 3                   3 2 1

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const dataArr = line.trim().split(' ').map(Number);

  if (dataArr.length === 3) {
    rl.close();

    return console.log(line);
  }

  let max1 = Math.min(dataArr[0], dataArr[1], dataArr[2]);
  let max3 = Math.max(dataArr[0], dataArr[1], dataArr[2]);
  let max2 = dataArr[0] + dataArr[1] + dataArr[2] - max1 - max3;

  const max = [max1, max2, max3];
  const min = [max1, max2];

  for (let i = 3; i <= dataArr.length; i++) {
    if (dataArr[i] >= max[2]) {
      max[0] = max[1];
      max[1] = max[2];
      max[2] = dataArr[i];
    } else if (dataArr[i] > max[1]) {
      max[0] = max[1];
      max[1] = dataArr[i];
    } else if (dataArr[i] > max[0]) {
      max[0] = dataArr[i];
    }

    if (dataArr[i] < min[0]) {
      min[1] = min[0];
      min[0] = dataArr[i];
    } else if (dataArr[i] < min[1]) {
      min[1] = dataArr[i];
    }
  }

  rl.close();

  if (max[2] * max[1] * max[0] >= min[0] * min[1] * max[2]) {
    console.log(max.join(' '));
  } else {
    console.log(max[2], min[0], min[1]);
  }
});