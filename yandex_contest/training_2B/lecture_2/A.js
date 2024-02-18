// A. Количество равных максимальному

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Последовательность состоит из натуральных чисел и завершается числом 0.
// Всего вводится не более 10000 чисел (не считая завершающего числа 0).
// Определите, сколько элементов этой последовательности равны ее наибольшему элементу.

// Числа, следующие за числом 0, считывать не нужно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся числом 0
// (само число 0 в последовательность не входит).

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	     Вывод
// 1         1
// 7
// 9
// 0

// Пример 2
// Ввод	     Вывод
// 1         2
// 3
// 3
// 1
// 0

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

let max = 0;
let cnt = 0;

rl.on('line', line => {
  const num = Number(line);

  if (num === 0) {
    rl.close();
    return console.log(cnt);
  }

  if (num > max) {
    cnt = 1;
    max = num;
  } else if (num === max) {
    cnt += 1;
  }
});