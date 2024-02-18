// 34. Топологическая сортировка

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан ориентированный граф. Необходимо построить топологическую сортировку.

// Формат ввода
// В первой строке входного файла два натуральных числа N и M (1 ≤ N, M ≤ 100 000) —
// количество вершин и рёбер в графе соответственно. Далее в M строках перечислены рёбра графа.
// Каждое ребро задаётся парой чисел — номерами начальной и конечной вершин соответственно.

// Формат вывода
// Выведите любую топологическую сортировку графа в виде последовательности номеров вершин
// (перестановка чисел от 1 до N). Если топологическую сортировку графа построить невозможно, выведите -1.

// Пример
// Ввод      Вывод
// 6 6       4 6 3 1 2 5
// 1 2
// 3 2
// 4 2
// 2 5
// 6 5
// 4 6

const dfs = (graphArr, vertex, visitedArr, orderArr) => {
  const stack = [vertex];

  while (stack.length) {
    const now = stack[stack.length - 1];
  
    if (visitedArr[now] === 2) {
      stack.pop();
      continue;
    }

    if (visitedArr[now] === 1) {
      if (graphArr[now].some(neighbor => visitedArr[neighbor] === 1)) {
        return false;
      }
  
      visitedArr[now] = 2;
      orderArr.push(now);
      stack.pop();
      continue;
    }
  
    visitedArr[now] = 1;
  
    for (const neighbor of graphArr[now]) {
      if (visitedArr[neighbor] === 0) {
        stack.push(neighbor);
      }
    }
  }
  
  return true;
};

const fillGraph = (graphArr, verticesArr) => {
  for (const [v1, v2] of verticesArr) {
    graphArr[v1].push(v2);
  }
};

const getRes = (graphArr, visitedArr, orderArr) => {
  for (let i = 1; i < graphArr.length; i++) {
    if (visitedArr[i] === 0 && !dfs(graphArr, i, visitedArr, orderArr)) return -1;
  }

  return orderArr.reverse().join(' ');
}

const fs = require('fs');
const [[n, m], ...vertices] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(0);
const order = [];

fillGraph(graph, vertices);
console.log(getRes(graph, visited, order));