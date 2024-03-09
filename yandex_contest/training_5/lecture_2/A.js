// A. Минимальный прямоугольник

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На клетчатой плоскости закрашено K клеток.
// Требуется найти минимальный по площади прямоугольник, со сторонами, параллельными линиям сетки,
// покрывающий все закрашенные клетки.

// Формат ввода
// Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100).
// На следующих K строках находятся пары чисел Xi и Yi — координаты закрашенных клеток (|Xi|, |Yi| ≤ 10**9).

// Формат вывода
// Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.

// Пример
// Ввод        Вывод
// 4           1 1 6 5
// 1 3
// 3 1
// 3 5
// 6 3

const findMinRectangle = (coordsArr) => {
  const xCoords = coordsArr.map(el => el[0]);
  const yCoords = coordsArr.map(el => el[1]);
  const xMin = Math.min(...xCoords);
  const xMax = Math.max(...xCoords);
  const yMin = Math.min(...yCoords);
  const yMax = Math.max(...yCoords);

  return [xMin, yMin, xMax, yMax];
};

const fs = require('fs');
const [[k], ...coords] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.trim().split(' ').map(Number)
);

fs.writeFileSync('output.txt', findMinRectangle(coords).join(' '));