// 35. Поиск цикла

//                      Все языки    Python 3.6
// Ограничение времени	2 секунды	   5 секунд
// Ограничение памяти 	256Mb	       256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан неориентированный граф. Требуется определить, есть ли в нем цикл, и, если есть, вывести его.

// Формат ввода
// В первой строке дано одно число n — количество вершин в графе ( 1 ≤ n ≤ 500 ).
// Далее в n строках задан сам граф матрицей смежности.

// Формат вывода
// Если в иcходном графе нет цикла, то выведите «NO». Иначе, в первой строке выведите «YES»,
// во второй строке выведите число k — количество вершин в цикле,
// а в третьей строке выведите k различных чисел — номера вершин,
// которые принадлежат циклу в порядке обхода (обход можно начинать с любой вершины цикла).
// Если циклов несколько, то выведите любой.

// Пример 1
// Ввод             Вывод
// 3                YES
// 0 1 1            3
// 1 0 1            3 2 1
// 1 1 0

// Пример 2
// Ввод             Вывод
// 4                NO
// 0 0 1 0
// 0 0 0 1
// 1 0 0 0
// 0 1 0 0

// Пример 3
// Ввод             Вывод
// 5                YES
// 0 1 0 0 0        3
// 1 0 0 0 0        5 4 3
// 0 0 0 1 1
// 0 0 1 0 1
// 0 0 1 1 0

const dfs = (matrixArr, visitedArr, parentArr, vertex, cycle) => {
  visitedArr[vertex] = true;

  for (let i = 0; i < matrixArr[vertex].length; i += 1) {
    if (matrixArr[vertex][i] === 1) {
      if (!visitedArr[i]) {
        parentArr[i] = vertex;
  
        if (dfs(matrixArr, visitedArr, parentArr, i, cycle)) {
          return true;
        }
      } else if (i !== parentArr[vertex]) {
        cycle.start = i;
        cycle.end = vertex;

        return true;
      }
    }
  }

  return false;
};

const findCycle = (matrixArr) => {
  const visited = Array(matrixArr.length).fill(false);
  const parent = Array(matrixArr.length).fill(-1);
  const cycle = { start: -1, end: -1 };

  for (let i = 0; i < matrixArr.length; i += 1) {
    if (!visited[i] && dfs(matrixArr, visited, parent, i, cycle)) {
      break;
    }
  }

  if (cycle.start === -1) {
    return 'NO';
  } else {
    const cycleVertices = [];

    for (let v = cycle.end; v !== cycle.start; v = parent[v]) {
      cycleVertices.push(v + 1);
    }

    cycleVertices.push(cycle.start + 1);

    return `YES\n${cycleVertices.length}\n${cycleVertices.join(' ')}`;
  }
};

const fs = require('fs');
const [[n], ...matrix] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

console.log(findCycle(matrix));