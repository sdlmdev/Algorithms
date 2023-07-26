// A. Префиксные суммы

// Ограничение времени 	1 секунда
// Ограничение памяти 	256Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// В этой задаче вам нужно будет много раз отвечать на запрос «Найдите сумму чисел на отрезке в массиве».

// Формат ввода
// В первой строке записано два целых числа n и q (1≤n,q≤3⋅105) - размер массива и количество запросов.

// Во второй строке записаны n целых чисел ai (1≤ai≤109) - сам массив.
// Далее в q строках описаны запросы к массиву. Каждый запрос описывается двумя числами l, r (1≤l≤r≤n) -
// левой и правой границей отрезка, на котором нужно найти сумму.

// Формат вывода
// Для каждого запроса в отдельной строке выведите единственное число - сумму на соответствующем отрезке.

// Пример
// Ввод              Вывод
// 4 10              1
// 1 2 3 4           3
// 1 1               6
// 1 2               10
// 1 3               2
// 1 4               5
// 2 2               9
// 2 3               3
// 2 4               7
// 3 3               4
// 3 4
// 4 4

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let prefixSum = [];
let cntLine = 0;
const res = [];
let n, q;

rl.on('line', line => {
  if (cntLine === 0) {
    const [N, Q] = line.trim().split(' ').map(Number);
    prefixSum = Array(N + 1).fill(0)
    n = N;
    q = Q;
    cntLine++;
  } else if (cntLine === 1) {
    line = line.trim().split(' ').map(Number);
    cntLine++;

    for (let i = 1; i < n + 1; i++) {
      prefixSum[i] = prefixSum[i - 1] + line[i - 1];
    }
  } else {
    const [l, r] = line.trim().split(' ').map(Number);

    res.push(prefixSum[r] - prefixSum[l - 1]);

    if (res.length === q) {
      console.log(res.join('\n'));
      rl.close();
    }
  }
});