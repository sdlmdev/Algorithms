// 36. Длина кратчайшего пути

//                      Все языки	    Python 3.6
// Ограничение времени	1 секунда	    5 секунд
// Ограничение памяти	  64Mb	        256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В неориентированном графе требуется найти длину минимального пути между двумя вершинами.

// Формат ввода
// Первым на вход поступает число N – количество вершин в графе (1 ≤ N ≤ 100).
// Затем записана матрица смежности (0 обозначает отсутствие ребра, 1 – наличие ребра).
// Далее задаются номера двух вершин – начальной и конечной.

// Формат вывода
// Выведите L – длину кратчайшего пути (количество ребер, которые нужно пройти).

// Если пути нет, нужно вывести -1.

// Пример 1
// Ввод	                         Вывод
// 10                            2     
// 0 1 0 0 0 0 0 0 0 0
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

// Пример 2
// Ввод	               Вывод
// 5                   3
// 0 1 0 0 1
// 1 0 1 0 0
// 0 1 0 0 0
// 0 0 0 0 0
// 1 0 0 0 0
// 3 5

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

  queue.pushBack([startV, 0]);

  while (queue.size > 0) {
    const [vertex, length] = queue.popFront();

    if (vertex === endV) return length;

    for (let i = 0; i < N; i += 1) {
      if (matrixArr[vertex][i] === 1 && !visited.has(i)) {
        queue.pushBack([i, length + 1]);
        visited.add(i);
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

console.log(bfs(matrix, start - 1, end - 1, n));