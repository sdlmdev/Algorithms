// 32. Компоненты связности

//                      Все языки    Python 3.6
// Ограничение времени	2 секунды	   5 секунд
// Ограничение памяти 	256Mb	       256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан неориентированный невзвешенный граф, состоящий из N вершин и M ребер.
// Необходимо посчитать количество его компонент связности и вывести их.

// Формат ввода
// Во входном файле записано два числа N и M (0 < N ≤ 100000, 0 ≤ M ≤ 100000).
// В следующих M строках записаны по два числа i и j (1 ≤ i, j ≤ N), которые означают,
// что вершины i и j соединены ребром.

// Формат вывода
// В первой строчке выходного файла выведите количество компонент связности.
// Далее выведите сами компоненты связности в следующем формате:
// в первой строке количество вершин в компоненте, во второй - сами вершины в произвольном порядке.

// Пример 1
// Ввод	       Вывод
// 6 4         3
// 3 1         3
// 1 2         1 2 3 
// 5 4         2
// 2 3         4 5
//             1
//             6

// Пример 2
// Ввод	       Вывод
// 6 4         2
// 4 2         5
// 1 4         1 2 3 4 6
// 6 4         1
// 3 6         5

const fiilGraph = (graphArr, verticesArr) => {
  for (const [v1, v2] of verticesArr) {
    graphArr[v1].push(v2);
    graphArr[v2].push(v1);
  }
};

const dfs = (graphArr, start, visited, componentArr, stack = []) => {
  visited[start] = true;
  componentArr.push(start);
  stack.push(start);

  while (stack.length) {
    const now = stack.pop();

    for (const vertex of graphArr[now]) {
      if (!visited[vertex]) {
        visited[vertex] = true;
        componentArr.push(vertex);
        stack.push(vertex);
      }
    }
  }
};

const getComponents = (graphArr, visitedArr) => {
  const components = [];

  for (let i = 1; i < graphArr.length; i += 1) {
    if (!visitedArr[i]) {
      const component = [];

      dfs(graphArr, i, visitedArr, component);
      components.push(component);
    }
  }

  return components;
};

const getRes = (graphArr, visitedArr) => {
  const components = getComponents(graphArr, visitedArr);
  const res = [];

  console.log(components.length);

  for (const component of components) {
    res.push(component.length);
    res.push(component.join(' '));
  }

  return res.join('\n');
};

const fs = require('fs');
const [[n, m], ...vertices] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);

fiilGraph(graph, vertices);
console.log(getRes(graph, visited));