// 31. Поиск в глубину

//                      Все языки    Python 3.6
// Ограничение времени	2 секунды	   5 секунд
// Ограничение памяти 	256Mb	       256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан неориентированный граф, возможно, с петлями и кратными ребрами.
// Необходимо построить компоненту связности, содержащую первую вершину.

// Формат ввода
// В первой строке записаны два целых числа N (1 ≤ N ≤ 103) и M (0 ≤ M ≤ 5 * 105) —
// количество вершин и ребер в графе.
// В последующих M строках перечислены ребра — пары чисел, определяющие номера вершин,
// которые соединяют ребра.

// Формат вывода
// В первую строку выходного файла выведите число K — количество вершин в компоненте связности.
// Во вторую строку выведите K целых чисел —
// вершины компоненты связности, перечисленные в порядке возрастания номеров.

// Пример
// Ввод	     Вывод
// 4 5       4
// 2 2       1 2 3 4
// 3 4
// 2 3
// 1 3
// 2 4

const dfs = (graphArr, start, visited, componentArr) => {
  visited[start] = true;
  componentArr.push(start);

  for (const vertex of graphArr[start]) {
    if (!visited[vertex]) {
      dfs(graphArr, vertex, visited, componentArr);
    }
  }
};

const fillGraph = (graphArr, verticesArr) => {
  for (const [v1, v2] of verticesArr) {
    if (v1 != v2) {
      graphArr[v1].push(v2);
      graphArr[v2].push(v1);
    }
  }
};

const fs = require('fs');
const [[n, m], ...vertices] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);
const component = [];

fillGraph(graph, vertices);
dfs(graph, 1, visited, component);

console.log(component.length);
console.log(component.sort((a, b) => a - b).join(' '));