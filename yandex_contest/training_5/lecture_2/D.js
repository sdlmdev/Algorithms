// D. Шахматная доска

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Из шахматной доски по границам клеток выпилили связную (не распадающуюся на части) фигуру без дыр.
// Требуется определить ее периметр.

// Формат ввода
// Сначала вводится число N (1 ≤ N ≤ 64) – количество выпиленных клеток.
// В следующих N строках вводятся координаты выпиленных клеток,
// разделенные пробелом (номер строки и столбца – числа от 1 до 8).
// Каждая выпиленная клетка указывается один раз.

// Формат вывода
// Выведите одно число – периметр выпиленной фигуры (сторона клетки равна единице).

// Пример 1
// Ввод       Вывод
// 3          8
// 1 1
// 1 2
// 2 1

// Пример 2
// Ввод       Вывод
// 1          4
// 8 8

// Примечания
// 1) Вырезан уголок из трех клеток. Сумма длин его сторон равна 8.
// 2) Вырезана одна клетка. Ее периметр равен 4.

const findPerimeter = (N, coordsArr) => {
  const board = Array.from({ length: 8 }, () => Array(8).fill(0));
  let perimeter = 0;

  for (let i = 0; i < N; i += 1) {
    const [x, y] = coordsArr[i];
    board[x - 1][y - 1] = 1;
  }

  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      if (board[i][j] === 1) {
        if (i === 0 || board[i - 1][j] === 0) perimeter += 1;
        if (i === 7 || board[i + 1][j] === 0) perimeter += 1;
        if (j === 0 || board[i][j - 1] === 0) perimeter += 1;
        if (j === 7 || board[i][j + 1] === 0) perimeter += 1;
      }
    }
  }

  return perimeter;
};

const fs = require('fs');
const [[n], ...coords] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.trim().split(' ').map(Number)
);

fs.writeFileSync('output.txt', findPerimeter(n, coords).toString());
