// E. Покрытие K отрезками

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt
// Даны n точек на прямой, нужно покрыть их k отрезками одинаковой длины ℓ.
// Найдите минимальное ℓ.

// Формат ввода
// На первой строке n(1 ≤ n ≤ 10**5) и k (1 ≤ k ≤ n). На второй n чисел xi (|xi| ≤ 10**9).

// Формат вывода
// Минимальное такое ℓ, что точки можно покрыть k отрезками длины ℓ.

// Пример
// Ввод	          Вывод
// 6 2            2
// 1 2 3 9 8 7

const getSegments = (points, M) => {
  let cntSegments = 0;
  let segmentEnd = points[0] - 1;

  for (let point of points) {
    if (point > segmentEnd) {
      cntSegments += 1;
      segmentEnd = point + M;
    }
  }

  return cntSegments;
}

const findMinSegment = (pointsArr, N, K) => {
  pointsArr.sort((a, b) => a - b);
  let l = 0;
  let r = pointsArr[N - 1] - pointsArr[0];

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    
    if (getSegments(pointsArr, m) <= K) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};

const fs = require('fs');
const [[n, k], points] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

fs.writeFileSync('output.txt', findMinSegment(points, n, k).toString());