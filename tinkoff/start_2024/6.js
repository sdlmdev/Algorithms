// 6 задание
// Ограничение времени
// 1 секунда
// Ограничение памяти
// 256 МБ

// Ну и конечно же задача на блуждания коня по шахматной доске размера n×n. Чтобы блуждать не было скучно, на доске разбросаны специальные фишки.

// Есть два типа фишек — "K" и "G". При ходе в клетку, в которой лежит фишка "K", фигура превращается в коня. При ходе в клетку, в которой лежит фишка "G", фигура превращается в короля. Разумеется, после превращения фигура начинает ходить соответственно своему новому типу. Попадание короля в клетку с фишкой "G" или коня в клетку с фишкой "K" ничего не меняет. При этом трансформация является обязательной и фигура не может пройти такую клетку с фишкой без превращения в указанный тип.

// Ваша задача определить, за какое минимальное количество ходов фигура (возможно в образе коня/короля) доберется до заданной клетки. Заметьте, что количество трансформаций считать не нужно.

// Формат входных данных 
// В первой строке задано одно натуральное число n — размер доски (2≤n≤100). В следующих n клетках задано описание шахматной доски — по n символов. Фишки обозначаются "K" и "G", а пустые клетки за ".". Начальная клетка обозначается "S", а конечная — "F".

// Гарантируется, что на начальной и конечной клетках нет фишки.

// Формат выходных данных 
// Выведите единственное число — необходимое количество ходов. Если такого пути не существует, то выведите −1.

// Замечание
// Как и всегда, конь ходит буквой Г, т.е. на одну клетку в одну сторону и две клетки в другую, всего до 8 возможных ходов. Король может перейти из текущей клетки в соседнюю по стороне или углу, всего до 8 возможных ходов.

// Примеры данных
// Пример 1
// Ввод
// 3
// S..
// F..
// ...
// Вывод
// 3

// Пример 2
// Ввод
// 2
// SF
// ..
// Вывод
// -1

// Пример 3
// Ввод
// 4
// S..K
// ..G.
// .GK.
// .K.F
// Вывод
// 3

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let n, matrix = [];

const minMoves = (n, matrix) => {
  const dxKnight = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dyKnight = [1, 2, 2, 1, -1, -2, -2, -1];
  const dxKing = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dyKing = [-1, -1, -1, 0, 0, 1, 1, 1];
  let start, end;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 'S') start = [i, j, 0];
      if (matrix[i][j] === 'F') end = [i, j];
    }
  }

  const visited = Array(n).fill().map(() => Array(n).fill().map(() => Array(2).fill(false)));
  visited[start[0]][start[1]][start[2]] = true;

  const queue = [start];
  let moves = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const [x, y, k] = queue.shift();

      if (x === end[0] && y === end[1]) return moves;

      const dx = k === 0 ? dxKnight : dxKing;
      const dy = k === 0 ? dyKnight : dyKing;

      for (let j = 0; j < 8; j += 1) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        let nk = k;

        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (matrix[nx][ny] === 'K') nk = 0;
          else if (matrix[nx][ny] === 'G') nk = 1;

          if (!visited[nx][ny][nk]) {
            visited[nx][ny][nk] = true;
            queue.push([nx, ny, nk]);
          }
        }
      }
    }
    moves += 1;
  }

  return -1;
};

readline.on('line', line => {
  if (lineCnt === 0) {
    n = Number(line);
  } else {
    matrix.push(line.trim().split(''));
  }

  lineCnt += 1;

  if (lineCnt === n + 1) {
    console.log(minMoves(n, matrix));
    readline.close();
  }
});