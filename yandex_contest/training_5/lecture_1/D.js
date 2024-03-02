// D. Слоны и ладьи

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На шахматной доске стоят слоны и ладьи, необходимо посчитать, сколько клеток не бьется ни одной из фигур.

// Шахматная доска имеет размеры 8 на 8. Ладья бьет все клетки горизонтали и вертикали,
// проходящих через клетку, где она стоит, до первой встретившейся фигуры.
// Слон бьет все клетки обеих диагоналей, проходящих через клетку, где он стоит,
// до первой встретившейся фигуры.

// Формат ввода
// В первых восьми строках ввода описывается шахматная доска.
// Первые восемь символов каждой из этих строк описывают состояние соответствующей горизонтали:
// символ B (заглавная латинская буква) означает, что в клетке стоит слон, символ R — ладья,
// символ * — что клетка пуста. После описания горизонтали в строке могут идти пробелы,
// однако длина каждой строки не превышает 250 символов.
// После описания доски в файле могут быть пустые строки.

// Формат вывода
// Выведите количество пустых клеток, которые не бьются ни одной из фигур.

// Пример 1
// Ввод            Вывод
// ********        49
// ********
// *R******
// ********
// ********
// ********
// ********
// ********

// Пример 2
// Ввод            Вывод
// ********        54
// ********
// ******B*
// ********
// ********
// ********
// ********
// ********

// Пример 3
// Ввод            Вывод
// ********        40
// *R******
// ********
// *****B**
// ********
// ********
// ********
// ********

const findFigures = (board) => {
  const figures = {
    bishops: [],
    rooks: []
  };

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'B') {
        figures.bishops.push([i, j]);
      } else if (board[i][j] === 'R') {
        figures.rooks.push([i, j]);
      }
    }
  }

  return figures;
};

const markDiagonal = (board, bishops, marked) => {
  for (let i = 0; i < bishops.length; i++) {
    const [x, y] = bishops[i];
    marked[x][y] = true;
    let x1 = x + 1;
    let y1 = y + 1;

    while (x1 < 8 && y1 < 8) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1++;
      y1++;
    }

    x1 = x - 1;
    y1 = y - 1;

    while (x1 >= 0 && y1 >= 0) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1--;
      y1--;
    }

    x1 = x - 1;
    y1 = y + 1;

    while (x1 >= 0 && y1 < 8) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1--;
      y1++;
    }

    x1 = x + 1;
    y1 = y - 1;

    while (x1 < 8 && y1 >= 0) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1++;
      y1--;
    }
  }
};

const markHorAndVert = (board, rooks, marked) => {
  for (let i = 0; i < rooks.length; i++) {
    const [x, y] = rooks[i];
    marked[x][y] = true;
    let x1 = x + 1;
    let y1 = y;

    while (x1 < 8) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1++;
    }

    x1 = x - 1;
    y1 = y;

    while (x1 >= 0) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      x1--;
    }

    x1 = x;
    y1 = y + 1;

    while (y1 < 8) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      y1++;
    }

    x1 = x;
    y1 = y - 1;

    while (y1 >= 0) {
      if (board[x1][y1] === '*') {
        marked[x1][y1] = true;
      } else {
        break;
      }
      y1--;
    }
  }
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  str => str.split('').filter(el => el !== ' ' &&  el !== '')
);
const figures = findFigures(input);
const markedCells = Array(8).fill().map(() => Array(8).fill(false));
markDiagonal(input, figures.bishops, markedCells);
markHorAndVert(input, figures.rooks, markedCells);
const unmarkedCnt = markedCells.reduce((acc, row) => acc + row.filter(x => !x).length, 0);

fs.writeFileSync('output.txt', unmarkedCnt.toString());