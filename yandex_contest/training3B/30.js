// 30. НОП с восстановлением ответа

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Даны две последовательности, требуется найти и вывести их наибольшую общую подпоследовательность.

// Формат ввода
// В первой строке входных данных содержится число N – длина первой последовательности (1 ≤ N ≤ 1000).
// Во второй строке заданы члены первой последовательности
// (через пробел) – целые числа, не превосходящие 10000 по модулю.

// В третьей строке записано число M – длина второй последовательности (1 ≤ M ≤ 1000).
// В четвертой строке задаются члены второй последовательности (через пробел) – целые числа,
// не превосходящие 10000 по модулю.

// Формат вывода
// Требуется вывести наибольшую общую подпоследовательность данных последовательностей, через пробел.

// Пример 1
// Ввод       Вывод
// 3          2 3
// 1 2 3
// 3 
// 2 3 1

// Пример 2
// Ввод       Вывод
// 3          1
// 1 2 3
// 3 
// 3 2 1

const findMaxSubsequence = (N, nData, M, mData) => {
  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= M; j += 1) {
      if (nData[i - 1] === mData[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const res = [];
  let i = N;
  let j = M;

  while (i > 0 && j > 0) {
    if (nData[i - 1] === mData[j - 1]) {
      res.push(nData[i - 1]);
      i -= 1;
      j -= 1;
    } else if (dp[i][j] === dp[i - 1][j]) {
      i -= 1;
    } else {
      j -= 1;
    }
  }

  return res.reverse().join(' ');
};

const fs = require('fs');
const [[n], nArr, [m], mArr] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);

console.log(findMaxSubsequence(n, nArr, m, mArr));