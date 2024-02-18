// 23. Калькулятор

// Ограничение времени 2 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Имеется калькулятор, который выполняет следующие операции:
// умножить число X на 2;
// умножить число X на 3;
// прибавить к числу X единицу.

// Определите, какое наименьшее количество операций требуется, чтобы получить из числа 1 число N.

// Формат ввода
// Во входном файле написано натуральное число N, не превосходящее 10**6.

// Формат вывода
// В первой строке выходного файла выведите минимальное количество операций.
// Во второй строке выведите числа, последовательно получающиеся при выполнении операций.
// Первое из них должно быть равно 1, а последнее N. Если решений несколько, выведите любое.

// Пример 1
// Ввод	      Вывод
// 1          0
//            1

// Пример 2
// Ввод	      Вывод
// 5          3
//            1 3 4 5

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
}).on('line', N => {
  N = +N;
  const minOperations = new Array(N + 1).fill(0);
  const prevNum = new Array(N + 1).fill(0);
  minOperations[1] = 0;

  for (let i = 2; i < N + 1; i += 1) {
    minOperations[i] = minOperations[i - 1] + 1;
    prevNum[i] = i - 1;

    if (i % 2 === 0 && minOperations[i] > minOperations[i / 2] + 1) {
      minOperations[i] = minOperations[i / 2] + 1;
      prevNum[i] = i / 2;
    }

    if (i % 3 === 0 && minOperations[i] > minOperations[i / 3] + 1) {
      minOperations[i] = minOperations[i / 3] + 1;
      prevNum[i] = i / 3;
    }
  }

  const result = [];
  let i = N;

  while (i > 0) {
    result.push(i);
    i = prevNum[i];
  }

  console.log(minOperations[N]);
  console.log(result.reverse().join(' '));
  readline.close();
});