// G. Построить квадрат

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Задано множество, состоящее из N различных точек на плоскости. Координаты всех точек — целые числа.
// Определите, какое минимальное количество точек нужно добавить во множество,
// чтобы нашлось четыре точки, лежащие в вершинах квадрата.

// Формат ввода
// В первой строке вводится число N (1 ≤ N ≤ 2000) — количество точек.

// В следующих N строках вводится по два числа xi, yi (-10**8 ≤ xi, yi ≤ 10**8) — координаты точек.

// Формат вывода
// В первой строке выведите число K — минимальное количество точек, которые нужно добавить во множество.

// В следующих K строках выведите координаты добавленных точек xi, yi через пробел.
// Координаты должны быть целыми и не превышать 109 по модулю.

// Если решений несколько — выведите любое из них.

// Пример 1
// Ввод       Вывод
// 2          2
// 0 1        0 0
// 1 0        1 1

// Пример 2
// Ввод       Вывод
// 3          1
// 0 2        0 0
// 2 0
// 2 2

// Пример 3
// Ввод       Вывод
// 4          0
// -1 1
// 1 1
// -1 -1
// 1 -1

const fs = require('fs');
const [[n], ...coords] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

const points = new Map();

for (const [x, y] of coords) {
  if (!points.has(x)) {
    points.set(x, new Set());
  }
  points.get(x).add(y);
}

let minPoints = null;

for (let i = 0; i < n; i += 1) {
  for (let j = i + 1; j < n; j += 1) {
    const [x1, y1] = coords[i];
    const [x2, y2] = coords[j];

    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);

    const p3a = [(x1 < x2 ? x1 - dy : x1 + dy), (y1 < y2 ? y1 + dx : y1 - dx)];
    const p4a = [(x1 < x2 ? x2 - dy : x2 + dy), (y1 < y2 ? y2 + dx : y2 - dx)];

    const p3b = [(x1 < x2 ? x1 + dy : x1 - dy), (y1 < y2 ? y1 - dx : y1 + dx)];
    const p4b = [(x1 < x2 ? x2 + dy : x2 - dy), (y1 < y2 ? y2 - dx : y2 + dx)];

    const missingPointsA = [];
    const missingPointsB = [];

    if (!points.get(p3a[0])?.has(p3a[1])) {
      missingPointsA.push(p3a);
    }

    if (!points.get(p4a[0])?.has(p4a[1])) {
      missingPointsA.push(p4a);
    }

    if (!points.get(p3b[0])?.has(p3b[1])) {
      missingPointsB.push(p3b);
    }

    if (!points.get(p4b[0])?.has(p4b[1])) {
      missingPointsB.push(p4b);
    }

    const missingPoints = missingPointsA.length < missingPointsB.length ? missingPointsA : missingPointsB;

    if (missingPoints.length === 0) {
      console.log(0);
      return;
    }

    if (!minPoints || missingPoints.length < minPoints.length) {
      minPoints = missingPoints;
    }
  }
}

console.log([minPoints.length, ...minPoints.map(el => el.join(' '))].join('\n'));