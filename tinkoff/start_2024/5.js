// 5 задание
// Ограничение времени
// 1 секунда
// Ограничение памяти
// 256 МБ

// Пошел как-то лесник в лес по грибы, да не в абы какой лес! В клетке либо W трава зеленая, либо грибочки белые, либо кусты кусачие. Кусачие кусты, разумеется, непроходимые. Трава зеленая скучная, а грибочки белые, разумеется, по-настоящему интересные.

// Лес можно представить в виде клетчатой таблицы размера n×3. Свою дорогу лесник начинает в любой из трех клеток первой строки. После чего каждый раз он может переместиться на следующую строку в соседнюю по углу или стороне клетку, если такая существуют и там не кусты кусачие. Более формально, находясь в клетке (i,j) он может переместиться в одну из трех доступных для прохода клеток (i+1,j−1), (i+1,j) и (i+1,j+1), если они существуют и там нет кустов.

// Леснику, конечно же, интересны грибочки белые, поэтому он хочет знать, какое максимальное их количество он может посетить за прогулку. Если лесник упирается в клетку, из которой никуда не может пойти, он заканчивает свою прогулку.

// Формат входных данных
// В первой строке задано число n — количество строк в лесу (1≤n≤10**4). В следующих n строках дано по три символа, характеризующих данную строку. Каждый символ равен «.», если в клетке только трава зеленая, «C», если в этой клетке растут грибочки белые, и «W», если кусты кусачие. Если в первой строке во всех клетках находятся кусты, прогулка лесника заканчивается, не успев начаться.

// Формат выходных данных
// Выведите одно число — наибольшее количество грибов, которые лесник сможет собрать за одну такую прогулку.

// Примеры данных
// Пример 1
// Ввод
// 5
// W.W
// C.C
// WW.
// CC.
// CWW
// Вывод
// 3

// Пример 2
// Ввод
// 4
// W.W
// CWC
// W.W
// CWW
// Вывод
// 2

// Пример 3
// Ввод
// 4
// W.W
// ..C
// WW.
// C..
// Вывод
// 1

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let n, matrix = [];

readline.on('line', line => {
  if (lineCnt === 0) {
    n = Number(line);
  } else {
    matrix.push(line.trim().split(''));
  }

  if (lineCnt === n) {
    readline.close();
    const dp = Array.from({ length: n }, () => Array(3).fill(-Infinity));

    for (let j = 0; j < 3; j += 1) {
      if (matrix[0][j] !== 'W') {
        dp[0][j] = matrix[0][j] === 'C' ? 1 : 0;
      }
    }

    let res = Math.max(...dp[0]);

    if (n === 1) {
      res = Math.max(...dp[0]);
      console.log(res !== -Infinity ? res : 0);
      return;
    }

    out: for (let i = 1; i < n; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (j === 0 && matrix[i - 1][j] === 'W'
          && matrix[i - 1][j + 1] === 'W'
          && matrix[i - 1][j + 2] === 'W') {
          break out;
        }

        if (matrix[i][j] !== 'W') {
          const maxPrev = Math.max(j > 0 ? dp[i - 1][j - 1] : -Infinity, dp[i - 1][j], j < 2 ? dp[i - 1][j + 1] : -Infinity);
          dp[i][j] = maxPrev === -Infinity ? -Infinity : (matrix[i][j] === 'C' ? 1 : 0) + maxPrev;

          res = Math.max(res, dp[i][j]);
        }
      }
    }
    console.log(dp);
    console.log(res !== -Infinity ? res : 0);
  }

  lineCnt += 1;
});