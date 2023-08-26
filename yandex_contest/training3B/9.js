// 9. Сумма в прямоугольнике

// Ограничение времени 3 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вам необходимо ответить на запросы узнать сумму всех элементов числовой матрицы N×M
// в прямоугольнике с левым верхним углом (x1, y1) и правым нижним (x2, y2)

// Формат ввода
// В первой строке находится числа N, M размеры матрицы (1 ≤ N, M ≤ 1000) и K — количество запросов (1 ≤ K ≤ 100000).
// Каждая из следующих N строк содержит по M чисел`— элементы соответствующей строки матрицы
// (по модулю не превосходят 1000).
// Последующие K строк содержат по 4 целых числа, разделенных пробелом x1 y1 x2 y2 —
// запрос на сумму элементов матрице в прямоугольнике (1 ≤ x1 ≤ x2 ≤ N, 1 ≤ y1 ≤ y2 ≤ M)

// Формат вывода
// Для каждого запроса на отдельной строке выведите его результат —
// сумму всех чисел в элементов матрице в прямоугольнике (x1, y1), (x2, y2)

// Пример
// Ввод	         Вывод
// 3 3 2         28
// 1 2 3         21
// 4 5 6
// 7 8 9
// 2 2 3 3
// 1 1 2 3

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

readline.on('line', line => input.push(line));
readline.on('close', () => {
  const [n, m, k] = input[0].split(' ').map(Number);
  const matrix = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
  const queries = input.slice(n + 1).map(line => line.split(' ').map(Number));
  const prefixSum = Array.from({length: n + 1}, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
    }
  }

  for (let [x1, y1, x2, y2] of queries) {
    const sum = prefixSum[x2][y2] - prefixSum[x1 - 1][y2] - prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1];

    console.log(sum);
  }
});
