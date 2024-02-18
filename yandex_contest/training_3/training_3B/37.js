// 37. Путь в графе

//                      Все языки	    Python 3.6
// Ограничение времени	1 секунда	    5 секунд
// Ограничение памяти	  64Mb	        256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В неориентированном графе требуется найти минимальный путь между двумя вершинами.

// Формат ввода
// Первым на вход поступает число N – количество вершин в графе (1 ≤ N ≤ 100).
// Затем записана матрица смежности (0 обозначает отсутствие ребра, 1 – наличие ребра).
// Далее задаются номера двух вершин – начальной и конечной.

// Формат вывода
// Выведите сначала L – длину кратчайшего пути (количество ребер, которые нужно пройти),
// а потом сам путь. Если путь имеет длину 0, то его выводить не нужно, достаточно вывести длину.

// Необходимо вывести путь (номера всех вершин в правильном порядке). Если пути нет, нужно вывести -1.

// Пример
// Ввод	                        Вывод
// 10                           2
// 0 1 0 0 0 0 0 0 0 0          5 2 4
// 1 0 0 1 1 0 1 0 0 0
// 0 0 0 0 1 0 0 0 1 0
// 0 1 0 0 0 0 1 0 0 0
// 0 1 1 0 0 0 0 0 0 1
// 0 0 0 0 0 0 1 0 0 1
// 0 1 0 1 0 1 0 0 0 0
// 0 0 0 0 0 0 0 0 1 0
// 0 0 1 0 0 0 0 1 0 0
// 0 0 0 0 1 1 0 0 0 0
// 5 4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  popFront() {
    if (this.size === 0) return null;

    const data = this.head.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size -= 1;

    return data;
  }

  pushBack(data) {
    const node = new Node(data);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
  }
}

const bfs = (matrixArr, startV, endV, N) => {
  const queue = new Deque();
  const visited = new Set();
  const prev = Array(N).fill(-1);

  queue.pushBack(startV);
  visited.add(startV);

  while (queue.size > 0) {
    const vertex = queue.popFront();

    if (vertex === endV) {
      const path = [];

      for (let v = endV; v !== -1; v = prev[v]) {
        path.push(v);
      }

      return path.reverse();
    }

    for (let i = 0; i < N; i += 1) {
      if (matrixArr[vertex][i] === 1 && !visited.has(i)) {
        queue.pushBack(i);
        visited.add(i);
        prev[i] = vertex;
      }
    }
  }

  return -1;
};

const fs = require('fs');
const [[n], ...matrix] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const [start, end] = matrix.pop();
const path = bfs(matrix, start - 1, end - 1, n);

if (path === -1) {
  console.log(-1);
} else {
  console.log(path.length - 1);

  if (path.length > 1) {
    console.log(path.map(v => v + 1).join(' '));
  }
}