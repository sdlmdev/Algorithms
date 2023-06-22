// 38. Блохи

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На клеточном поле, размером NxM (2 ≤ N, M ≤ 250) сидит Q (0 ≤ Q ≤ 10000) блох в различных клетках.
// "Прием пищи" блохами возможен только в кормушке - одна из клеток поля, заранее известная.
// Блохи перемещаются по полю странным образом, а именно, прыжками,
// совпадающими с ходом обыкновенного шахматного коня.
// Длина пути каждой блохи до кормушки определяется как количество прыжков.
// Определить минимальное значение суммы длин путей блох до кормушки или,
// если собраться блохам у кормушки невозможно, то сообщить об этом.
// Сбор невозможен, если хотя бы одна из блох не может попасть к кормушке.

// Формат ввода
// В первой строке входного файла находится 5 чисел, разделенных пробелом:
// N, M, S, T, Q. N, M - размеры доски (отсчет начинается с 1);
// S, T - координаты клетки - кормушки (номер строки и столбца соответственно),
// Q - количество блох на доске.
// И далее Q строк по два числа - координаты каждой блохи.

// Формат вывода
// Содержит одно число - минимальное значение суммы длин путей или -1, если сбор невозможен.

// Пример 1
// Ввод              Вывод
// 2 2 1 1 1         -1
// 2 2

	


// Пример 2
// Ввод              Вывод
// 4 4 1 1 16        42
// 1 1
// 1 2
// 1 3
// 1 4
// 2 1
// 2 2
// 2 3
// 2 4
// 3 1
// 3 2
// 3 3
// 3 4
// 4 1
// 4 2
// 4 3
// 4 4

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

const bfs = (N, M, S, T, fieldArr) => {
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];
  const queue = new Deque();

  queue.pushBack([S - 1, T - 1]);

  while (queue.size > 0) {
    const [x, y] = queue.popFront();

    for (let i = 0; i < 8; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && fieldArr[nx][ny] === Infinity) {
        fieldArr[nx][ny] = fieldArr[x][y] + 1;
        queue.pushBack([nx, ny]);
      }
    }
  }
};

const cntSteps = (fieldArr, fleas) => {
  let steps = 0;

  for (let [x, y] of fleas) {
    if (fieldArr[x - 1][y - 1] === Infinity) return -1;
    steps += fieldArr[x - 1][y - 1];
  }

  return steps;
};

const fs = require('fs');
const [[n, m, s, t, q], ...coords] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const field = Array.from({ length: n }, () => Array(m).fill(Infinity));
field[s - 1][t - 1] = 0;

bfs(n, m, s, t, q, coords, field);
console.log(cntSteps(field, coords));