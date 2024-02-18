// I. Сапер

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вам необходимо построить поле для игры "Сапер" по его конфигурации –
// размерам и координатам расставленных на нем мин.

// Вкратце напомним правила построения поля для игры "Сапер":

// Поле состоит из клеток с минами и пустых клеток
// Клетки с миной обозначаются символом *
// Пустые клетки содержат число ki,j, 0≤ ki, j ≤ 8 – количество мин на соседних клетках.
// Соседними клетками являются восемь клеток, имеющих смежный угол или сторону.

// Формат ввода
// В первой строке содержатся три числа: N, 1 ≤ N ≤ 100 - количество строк на поле
// M, 1 ≤ M ≤ 100 - количество столбцов на поле, K, 0 ≤ K ≤ N ⋅ M - количество мин на поле.

// В следующих K строках содержатся по два числа с координатами мин:
// p, 1 ≤ p ≤ N - номер строки мины, q, 1 ≤ 1 ≤ M - номер столбца мины.

// Формат вывода
// Выведите построенное поле, разделяя строки поля переводом строки, а столбцы - пробелом.

// Пример 1
// Ввод	       Вывод
// 3 2 2       * 2
// 1 1         2 *
// 2 2         1 1

// Пример 2
// Ввод	       Вывод
// 2 2 0       0 0
//             0 0

// Пример 3
// Ввод	       Вывод
// 4 4 4       1 2 * 1 
// 1 3         * 2 1 1 
// 2 1         2 2 2 1 
// 4 2         1 * 2 * 
// 4 4

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
let [arr, ...minCoordinates] = input.trim().split('\n');
let [rows, columns] = arr.split(' ').map(Number);

const makeField = (rows, columns, mines) => {
  const x = [1, 1, 1, 0, 0, -1, -1, -1];
  const y = [-1, 0, 1, -1, 1, -1, 0, 1];
  let field = Array.from({length: rows + 2}, () => Array(columns + 2).fill(0));

  for (let [minei, minej] of mines) {
    for (let k = 0; k < x.length; k++) {
      field[minei + x[k]][minej + y[k]] += 1;
    }
  }

  for (let [minei, minej] of mines) {
    field[minei][minej] = '*';
  }

  return field;
}

let mines = minCoordinates;
mines = mines.map(str => str.split(' ').map(Number));
let field = makeField(rows, columns, mines);

const res = [];

for (let i = 1; i <= rows; i++) {
  let row = '';

  for (let j = 1; j <= columns; j++) {
    row += field[i][j] + ' ';
  }
  
  res.push(row);
}

fs.writeFileSync('output.txt', res.join('\n'));

// ----------------------------------------------------------------------------------

// const fs = require('fs');
// const input = fs.readFileSync('input.txt', 'utf-8');
// let [arr, ...minCoordinates] = input.trim().split('\n');
// const [rows, columns] = arr.split(' ').map(Number);
// let elements = rows * columns;
// const res = [];
// const mineCoordinatesArr = [];

// for (let i = 0; i < minCoordinates.length; i++) {
//   const arr = minCoordinates[i].split(' ');
//   mineCoordinatesArr.push(arr);
// }

// for (let i = 0; i < elements; i++) {
//   if (i % columns === 0) {
//     res.push([]);
//   }

//   res[res.length - 1].push(0);
// }

// for (let i = 0; i < mineCoordinatesArr.length; i++) {
//   res[mineCoordinatesArr[i][0] - 1][mineCoordinatesArr[i][1] - 1] = '*';
// }

// for (let i = 0; i < res.length; i++) {
//   for (let j = 0; j < res[i].length; j++) {
//     if (res[i][j] !== '*') {
//       if (res[i][j + 1] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i][j - 1] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i + 1] && res[i + 1][j] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i - 1] && res[i - 1][j] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i + 1] && res[i + 1][j + 1] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i + 1] && res[i + 1][j - 1] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i - 1] && res[i - 1][j - 1] === '*') {
//         res[i][j] += 1;
//       }
  
//       if (res[i - 1] && res[i - 1][j + 1] === '*') {
//         res[i][j] += 1;
//       }
//     }
//   }
// }

// fs.writeFileSync('output.txt', res.map(row => row.join(' ')).join('\n'));
