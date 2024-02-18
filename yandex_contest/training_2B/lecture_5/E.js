// E. Сумма трёх

// Ограничение времени 	15 секунд
// Ограничение памяти 	256Mb
// Ввод стандартный ввод или threesum.in
// Вывод стандартный вывод или threesum.out

// Даны три массива целых чисел A,B,C и целое число S.
// Найдите такие i,j,k, что Ai+Bj+Ck=S.

// Формат ввода
// На первой строке число S (1≤S≤109). Следующие три строки содержат описание массивов A,B,C
// в одинаковом формате: первое число задает длину n соответствующего массива (1≤n≤15000),
// затем заданы n целых чисел от 1 до 109 — сам массив.

// Формат вывода
// Если таких i,j,k не существует, выведите единственное число −1.
// Иначе выведите на одной строке три числа — i,j,k. Элементы массивов нумеруются с нуля.
// Если ответов несколько, выведите лексикографически минимальный.

// Пример 1
// Ввод          Вывод
// 3             0 1 1
// 2 1 2
// 2 3 1
// 2 3 1

// Пример 2
// Ввод          Вывод
// 10            -1
// 1 5
// 1 4
// 1 3

// Пример 3
// Ввод          Вывод
// 5             0 1 2
// 4 1 2 3 4
// 3 5 2 1
// 4 5 3 2 2

const compareArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  return 0;
};

const findNums = (S, A, B, C) => {
  let res = null;

  for (let [aVal, aInd] of A) {
    let cInd = C.length - 1;

    for (let [bVal, bInd] of B) {
      while (cInd > 0 && aVal + bVal + C[cInd][0] > S) cInd -= 1;

      if (aVal + bVal + C[cInd][0] === S) {
        if (res == null || compareArrays([aInd, bInd, C[cInd][1]], res) < 0) {
          res = [aInd, bInd, C[cInd][1]];
        }
      }
    }
  }

  return res === null ? '-1' : res.join(' ');
};

const fs = require('fs');
let [[s], [lenA, ...a], [lenB, ...b], [lenC, ...c]] = fs.readFileSync(
  'threesum.in', 'utf-8').trim().split('\n').map(line => line.trim().split(' ').map(Number)
);

a = a.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0]);
b = b.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0]);
c = c.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0] || b[1] - a[1]);

fs.writeFileSync('threesum.out', findNums(s, a, b, c));