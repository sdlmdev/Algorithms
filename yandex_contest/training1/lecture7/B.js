// B. Точки и отрезки

// Ограничение времени	3 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Дано n отрезков на числовой прямой и m точек на этой же прямой.
// Для каждой из данных точек определите, скольким отрезкам они принадлежат.
// Точка x считается принадлежащей отрезку с концами a и b,
// если выполняется двойное неравенство min(a, b) ≤ x ≤ max(a, b).

// Формат ввода
// Первая строка содержит два целых числа n (1 ≤ n ≤ 105) – число отрезков и m (1 ≤ m ≤ 105) – число точек.
// В следующих n строках по два целых числи ai и bi – координаты концов соответствующего отрезка.
// В последней строке m целых чисел – координаты точек. Все числа по модулю не превосходят 109

// Формат вывода
// В выходной файл выведите m чисел – для каждой точки количество отрезков, в которых она содержится.

// Пример
// Ввод	     Вывод
// 3 2       2 0
// 0 5
// -3 2
// 7 10
// 1 6

const fs = require('fs');
const segments = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(el => el.trim().split(' ').map(Number));
const [n, m] = segments.shift();
const points = segments.pop();

const findOccurrences = (segmentsArr, pointsArr, N, M) => {
  const events = Array(N * 2);

  for (let i = 0, j = events.length - 1; i < N; i++, j--) {
    if (segmentsArr[i][0] < segmentsArr[i][1]) {
      events[i] = [segmentsArr[i][0], -1];
      events[j] = [segmentsArr[i][1], 1];
    } else {
      events[i] = [segmentsArr[i][1], -1];
      events[j] = [segmentsArr[i][0], 1];
    }
  }

  for (let point in pointsArr) {
    events.push([pointsArr[point], 0, +point]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let cnt = 0;
  const res = Array(M);

  for (let point of events) {
    if (point[1] === -1) {
      cnt += 1;
    } else if (point[1] === 1) {
      cnt -= 1;
    } else {
      res[point[2]] = cnt;
    }
  }

  return res.join(' ');
};

fs.writeFileSync('output.txt', findOccurrences(segments, points, n, m));