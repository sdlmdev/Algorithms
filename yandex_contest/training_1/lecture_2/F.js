// F. Симметричная последовательность

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Последовательность чисел назовем симметричной, если она одинаково читается как слева направо,
// так и справа налево. Например, следующие последовательности являются симметричными:
// 1 2 3 4 5 4 3 2 1
// 1 2 1 2 2 1 2 1

// Вашей программе будет дана последовательность чисел. Требуется определить,
// какое минимальное количество и каких чисел надо приписать в конец этой последовательности,
// чтобы она стала симметричной.

// Формат ввода
// Сначала вводится число N — количество элементов исходной последовательности (1 ≤ N ≤ 100).
// Далее идут N чисел — элементы этой последовательности, натуральные числа от 1 до 9.

// Формат вывода
// Выведите сначала число M — минимальное количество элементов, которое надо дописать к последовательности,
// а потом M чисел (каждое — от 1 до 9) — числа, которые надо дописать к последовательности.

// Пример 1
// Ввод	                 Вывод
// 9                     0
// 1 2 3 4 5 4 3 2 1

// Пример 2
// Ввод	                 Вывод
// 5                     3
// 1 2 1 2 2             1 2 1

// Пример 3
// Ввод	                 Вывод
// 5                     4
// 1 2 3 4 5             4 3 2 1

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const input = [];

rl.on('line', line => {
  input.push(line);

  if (input.length === 2) {
    let [arrLength, arr] = input;
    const dataArr = arr.trim().split(' ');
    const reversedArr = [...dataArr].reverse();
    arrLength = +arrLength;
    let elem = 0;

    const isSymmetric = (dataArr, reversedArr) => {
      for (let i = 0; i <= arrLength; i++) {
        if (dataArr[i] !== reversedArr[i]) {
          return false;
        }
      }

      return true;
    }

    while (elem < arrLength) {
      const currentArr = dataArr.slice(elem);
      const currentArrReversed = reversedArr.slice(0, arrLength - elem);

      if (isSymmetric(currentArr, currentArrReversed)) {
        break;
      }

      elem += 1;
    }

    rl.close();

    if (elem) {
      const res = reversedArr.slice(arrLength - elem);

      console.log(res.length);
      console.log(res.join(' '));
    } else {
      console.log(elem);
    }
  }
});
