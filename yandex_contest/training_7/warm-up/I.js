// I. Размер поддеревьев

// Ограничение времени 2 секунды
// Ограничение памяти	1024 Мб
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дано неориентированное дерево, подвешенное за вершину 1.
// Для каждой вершины подсчитайте, сколько вершин содержится в поддереве, подвешенном за данную вершину.

// Формат ввода
// В первой строке вводится число V — количество вершин (3 ≤ V ≤ 100000).

// В следующих V−1 строках записано по два числа: номера соединенных ребром вершин.

// Формат вывода
// Выведите
// V чисел — размеры поддеревьев для каждой из вершин

// Пример 1
// Ввод	      Вывод
// 4          4 1 1 1
// 1 2
// 1 3
// 1 4

// Пример 2
// Ввод	      Вывод
// 7          7 1 1 1 3 1 1
// 1 2
// 1 3
// 1 4
// 5 1
// 5 6
// 5 7

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let V;
const edges = [];
const tree = [];
const subtreeSizes = [];
const visited = [];

rl.on('line', (line) => {
  if (!V) {
    V = Number(line);

    for (let i = 0; i <= V; i += 1) {
      tree.push([]);
      subtreeSizes.push(0);
      visited.push(false);
    }
  } else {
    const [u, v] = line.split(' ').map(Number);

    edges.push([u, v]);
    tree[u].push(v);
    tree[v].push(u);
  }
});

rl.on('close', () => {
  const dfs = (node) => {
    visited[node] = true;
    subtreeSizes[node] = 1;

    for (const neighbor of tree[node]) {
      if (!visited[neighbor]) {
        subtreeSizes[node] += dfs(neighbor);
      }
    }

    return subtreeSizes[node];
  }

  dfs(1);

  console.log(subtreeSizes.slice(1).join(' '));
});
