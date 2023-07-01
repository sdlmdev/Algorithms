// A. Закраска прямой

// Ограничение времени 	3 секунды
// Ограничение памяти 	64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На числовой прямой окрасили N отрезков.
// Известны координаты левого и правого концов каждого отрезка (Li и Ri).
// Найти длину окрашенной части числовой прямой.

// Формат ввода
// В первой строке находится число N, в следующих N строках - пары Li и Ri.
// Li и Ri - целые, -109 ≤ Li ≤ Ri ≤ 109, 1 ≤ N ≤ 15 000

// Формат вывода
// Вывести одно число - длину окрашенной части прямой.

// Пример 1
// Ввод        Вывод
// 1           10
// 10 20

// Пример 2
// Ввод        Вывод
// 1           0
// 10 10

// Пример 3
// Ввод        Вывод
// 2           30
// 10 20
// 20 40

const getLength = (pointsArr) => {
  const events = [];

  for (let point of pointsArr) {
    events.push([point[0], 1]);
    events.push([point[1], -1]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let res = 0;

  for (let i = 0, l = 0; i < events.length; i++) {
    if (l > 0) {
      res += events[i][0] - events[i - 1][0];
    }

    if (events[i][1] === 1) {
      l += 1;
    } else {
      l -= 1;
    }
  }

  return res;
};

const fs = require('fs');
const [n, ...points] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

fs.writeFileSync('output.txt', getLength(points).toString());