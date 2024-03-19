// G. Новый офис плюса

// Ограничение времени 5 секунд
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Сервис Тындекс.Плюс так быстро растет,
// что для сотрудников и серверов потребовалось потребовалось построить новый офис.

// Участок под застройку представляет из себя клетчатое поле n×m,
// часть клеток которого пригодна для строительства, а часть нет.

// Новый офис должен выглядеть как знак "плюс"какого-то целого положительного размера k.
// Знак "плюс"размера k  — это такая клетчатая фигура, состоящая из пяти квадратов k×k клеток,
// при этом есть один центральный квадрат, а остальные четыре являются его соседями по стороне.

// Новый офис должен быть как можно больше, поэтому необходимо найти максимальное k,
// такое что офис удастся разместить на участке под застройку.

// Определите максимальное k. Гарантируется, что он можно построить офис хотя бы с k=1.

// Формат ввода
// В первой строке задано два целых числа n и m (1≤n,m≤2000) — длина и ширина участка под застройку.

// В каждой из последующих n строк задана строка, состоящая из m символов, j-й символ в i-й строке равен #,
// если клетка с координатами (i,j) пригодна для строительства и . иначе.

// Формат вывода
// Выведите одно целое положительное число — максимально возможное k.

// Пример 1
// Ввод             Вывод
// 9 12             3
// ...##.###...
// ...##.###...
// .########...
// .###########
// ...#########
// ...#########
// ......###...
// ......###...
// ......###...

// Пример 2
// Ввод       Вывод
// 6 6        1
// .##...
// .##...
// ######
// ######
// .##...
// .##...

// Примечания
// В первом тесте из примера можно выбрать плюс с k=3. Этот плюс выглядит следующим образом:

// ...###...
// ...###...
// ...###...
// #########
// #########
// #########
// ...###...
// ...###...
// ...###... 

const getDp = (height, width, grid) => {
  const dp = Array.from({ length: height }, () => Array(width).fill(0));

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      dp[i][j] = grid[i][j] === '#' ? 1 : 0;
      if (i > 0) dp[i][j] += dp[i - 1][j];
      if (j > 0) dp[i][j] += dp[i][j - 1];
      if (i > 0 && j > 0) dp[i][j] -= dp[i - 1][j - 1];
    }
  }

  return dp;
};

const isSquareBuildable = (x, y, size, dpArr) => {
  const total = dpArr[x + size - 1][y + size - 1];
  const up = y > 0 ? dpArr[x + size - 1][y - 1] : 0;
  const left = x > 0 ? dpArr[x - 1][y + size - 1] : 0;
  const corner = x > 0 && y > 0 ? dpArr[x - 1][y - 1] : 0;

  return total - left - up + corner === size * size;
};

const isPlusBuildable = (x, y, size, dpArr) => {
  return [
    { dx: size, dy: 0 },
    { dx: 0, dy: 0 },
    { dx: 0, dy: -size },
    { dx: -size, dy: 0 },
    { dx: 0, dy: size },
  ].every(({ dx, dy }) => isSquareBuildable(x + dx, y + dy, size, dpArr));
};

const findMaxPlusSize = (height, width, grid) => {
  const dp = getDp(height, width, grid);
  let left = 0;
  let right = Math.min(height, width);

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    let found = false;

    for (let i = mid; !found && i <= height - 2 * mid; i += 1) {
      for (let j = mid; j <= width - 2 * mid; j += 1) {
        if (isPlusBuildable(i, j, mid, dp)) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return left;
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const [height, width] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(row => row.split(''));

console.log(findMaxPlusSize(height, width, grid));