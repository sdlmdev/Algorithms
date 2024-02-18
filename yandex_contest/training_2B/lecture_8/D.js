// D. Бусинки

// Ограничение времени 2 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Маленький мальчик делает бусы. У него есть много пронумерованных бусинок.
// Каждая бусинка имеет уникальный номер – целое число в диапазоне от 1 до N.
// Он выкладывает все бусинки на полу и соединяет бусинки между собой произвольным образом так,
// что замкнутых фигур не образуется.
// Каждая из бусинок при этом оказывается соединенной с какой-либо другой бусинкой.

// Требуется определить,
// какое максимальное количество последовательно соединенных бусинок присутствует в полученной фигуре.

// Формат ввода
// В первой строке – количество бусинок 1 ≤ N ≤ 2500.
// В последующих N-1 строках по два целых числа – номера, соединенных бусинок.

// Формат вывода
// Вывести одно число – искомое количество бусинок.

// Пример 1
// Ввод	         Вывод
// 2             2
// 1 2

// Пример 2
// Ввод	         Вывод
//               3
// 2 1
// 2 3
// 2 4
// 2 5

// Пример 3
// Ввод	         Вывод
// 10            10
// 1 2
// 2 3
// 3 4 
// 4 5
// 1 6
// 6 10
// 10 9
// 9 8
// 8 7

const dfs = (curHeight, pairsArr, depthsArr, visitedArr) => {
  let best = 0;
  let max1 = 0;
  let max2 = 0;

  visitedArr[curHeight] = true;

  for (let point of pairsArr[curHeight]) {
    if (!visitedArr[point]) {
      let curBest = dfs(point, pairsArr, depthsArr, visitedArr);
      if (depthsArr[point] > max1) {
        max2 = max1;
        max1 = depthsArr[point];
      } else if (depthsArr[point] > max2) {
        max2 = depthsArr[point];
      }
      best = Math.max(curBest, best);
    }
  }

  best = Math.max(best, max1 + max2 + 1);
  depthsArr[curHeight] = max1 + 1;

  return best;
};

const getPairs = (pointsArr, pairsArr) => {
  for (let point of pointsArr) {
    const [first, second] = point;

    pairsArr[first].push(second);
    pairsArr[second].push(first);
  }
};

const fs = require('fs');
const [[n], ...points] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const pairs = Array.from({ length: n + 1}, () => []);
const depths = Array(n + 1).fill(0);
const visited = Array(n + 1).fill(false);

getPairs(points, pairs);
fs.writeFileSync('output.txt', dfs(1, pairs, depths, visited).toString());