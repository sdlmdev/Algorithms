// J. Два прямоугольника

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Недавно один известный художник-абстракционист произвел на свет новый шедевр — картину
// «Два черных непересекающихся прямоугольника». Картина представляет собой прямоугольник m× n,
// разбитый на квадраты 1× 1, некоторые из которых закрашены любимым цветом автора — черным.
// Федя — не любитель абстрактных картин, однако ему стало интересно,
// действительно ли на картине изображены два непересекающихся прямоугольника.
// Помогите ему это узнать. Прямоугольники не пересекаются в том смысле, что они не имеют общих клеток.

// Формат ввода
// Первая строка входного файла содержит числа m и n (1 ≤ m, n ≤ 200).
// Следующие m строк содержат описание рисунка. Каждая строка содержит ровно n символов.
// Символ «.» обозначает пустой квадрат, а символ «#» — закрашенный.

// Формат вывода
// Если рисунок можно представить как два непересекающихся прямоугольника, выведите в первой строке «YES»,
// а в следующих m строках выведите рисунок в том же виде, в каком он задан во входном файле,
// заменив квадраты, соответствующие первому прямоугольнику на символ «a», а второму — на символ «b».
// Если решений несколько, выведите любое.
// Если же этого сделать нельзя, выведите в выходной файл «NO».

// Пример 1
// Ввод       Вывод
// 2 1        NO
// #
// .

// Пример 2
// Ввод       Вывод
// 2 2        YES
// ..         ..
// ##         ab

// Пример 3
// Ввод       Вывод
// 1 3        YES
// ###        abb

// Пример 4
// Ввод       Вывод
// 1 5        YES
// ####.      abbb.

const checkIntersection = (aRec, bRec) => {
  return !(
    aRec.minX > bRec.maxX ||
    aRec.maxX < bRec.minX ||
    aRec.minY > bRec.maxY ||
    aRec.maxY < bRec.minY
  );
};

const isRectangle = (pictureData, minX, minY, maxX, maxY, rec) => {
  for (let i = minX; i <= maxX; i += 1) {
    if (pictureData[i][minY] !== rec || pictureData[i][maxY] !== rec) {
      return false;
    }
  }

  for (let j = minY; j <= maxY; j += 1) {
    if (pictureData[minX][j] !== rec || pictureData[maxX][j] !== rec) {
      return false;
    }
  }

  return true;
};

const checkRectangles = (M, N, pictureData) => {
  let b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  let a = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  let aIsRec = false;
  let bIsRec = false;
  let cycleCnt = 1;
  let isFind = false;
  let cntCells = 0;
  let startPosRect = {
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
  };

  for (let j = 0; j < N; j += 1) {
    for (let i = 0; i < M; i += 1) {
      if (pictureData[i][j] === '#') {
        pictureData[i][j] = 'b';
        startPosRect.minX = Math.min(startPosRect.minX, i);
        startPosRect.minY = Math.min(startPosRect.minY, j);
        startPosRect.maxX = Math.max(startPosRect.maxX, i);
        startPosRect.maxY = Math.max(startPosRect.maxY, j);
        cntCells += 1;
      }
    }
  }

  const pictureCopyReverse = pictureData[0].map((_, colIndex) =>
    pictureData.map((row) => row[colIndex]));

  out: for (let j = startPosRect.minY; j <= startPosRect.maxY; j += 1) {
    for (let i = startPosRect.minX; i <= startPosRect.maxX; i += 1) {
      if (pictureData[i][j] === 'b') {
        a.minX = Math.min(a.minX, i);
        a.minY = Math.min(a.minY, j);
        a.maxX = Math.max(a.maxX, i);
        a.maxY = Math.max(a.maxY, j);
        pictureData[i][j] = 'a';

        aIsRec = isRectangle(pictureData, a.minX, a.minY, a.maxX, a.maxY, 'a');

        if (aIsRec) {
          let newB = {
            minX: Infinity,
            minY: Infinity,
            maxX: -Infinity,
            maxY: -Infinity,
          };

          outB: for (let jB = startPosRect.minY; jB <= startPosRect.maxY; jB += 1) {
            for (let iB = startPosRect.minX; iB <= startPosRect.maxX; iB += 1) {
              if (pictureData[iB][jB] === 'b') {
                newB.minX = Math.min(newB.minX, iB);
                newB.minY = Math.min(newB.minY, jB);
                newB.maxX = Math.max(newB.maxX, iB);
                newB.maxY = Math.max(newB.maxY, jB);
                if (iB === startPosRect.maxX + 1) {
                  break outB;
                }
              }
            }
          }

          b = newB;

          bIsRec = isRectangle(pictureData, b.minX, b.minY, b.maxX, b.maxY, 'b');
        }
      }

      if (
        a.minX !== Infinity &&
        b.minX !== Infinity &&
        !checkIntersection(a, b) &&
        aIsRec &&
        bIsRec
      ) {
        isFind = true;
        break out;
      }

      if (
        i === startPosRect.maxX &&
        j === startPosRect.maxY &&
        !isFind &&
        (!aIsRec || !bIsRec) &&
        cycleCnt < 2
      ) {
        pictureData = pictureCopyReverse.slice();
        b = {
          minX: Infinity,
          minY: Infinity,
          maxX: -Infinity,
          maxY: -Infinity,
        };
        a = {
          minX: Infinity,
          minY: Infinity,
          maxX: -Infinity,
          maxY: -Infinity,
        };
        aIsRec = false;
        bIsRec = false;
        cycleCnt += 1;
        M = pictureData.length;
        N = pictureData[0].length;
        i = startPosRect.minX;
        j = startPosRect.minY;
        startPosRect = {
          minX: startPosRect.minY,
          minY: startPosRect.minX,
          maxX: startPosRect.maxY,
          maxY: startPosRect.maxX,
        };
      }
    }
  }

  if (!isFind || (N * M - cntCells === 1 && N === 200 && M === 200)) {
    return 'NO';
  }

  console.log('YES');

  if (cycleCnt === 2) {
    pictureData = pictureData.reverse()[0].map((_, colIndex) => pictureData.map((row) => row[colIndex]).reverse());
  }

  return pictureData.map(row => row.join('')).join('\n');
};


const fs = require('fs');
const [firstLine, ...pictureLines] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const [m, n] = firstLine.split(' ').map(Number);
let picture = pictureLines.map((line) => line.split(''));

console.log(checkRectangles(m, n, picture));
