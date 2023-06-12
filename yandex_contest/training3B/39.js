// 39. Путь спелеолога

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Пещера представлена кубом, разбитым на N частей по каждому измерению (то есть на N3 кубических клеток).
// Каждая клетка может быть или пустой, или полностью заполненной камнем.
// Исходя из положения спелеолога в пещере, требуется найти,
// какое минимальное количество перемещений по клеткам ему требуется, чтобы выбраться на поверхность.
// Переходить из клетки в клетку можно, только если они обе свободны и имеют общую грань.

// Формат ввода
// В первой строке содержится число N (1 ≤ N ≤ 30). Далее следует N блоков.
// Блок состоит из пустой строки и N строк по N символов: # - обозначает клетку, заполненную камнями,
// точка - свободную клетку. Начальное положение спелеолога обозначено заглавной буквой S.
// Первый блок представляет верхний уровень пещеры,
// достижение любой свободной его клетки означает выход на поверхность.
// Выход на поверхность всегда возможен.

// Формат вывода
// Вывести одно число - длину пути до поверхности.

// Пример
// Ввод       Вывод
// 3          6

// ###
// ###
// .##

// .#.
// .#S
// .#.

// ###
// ...
// ###

// Примечания

// Нужно спуститься на уровень вниз, сделать два движения на запад, подняться на уровень вверх,
// сделать движение на юг, подняться на уровень вверх. 

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

const bfs = (N, caveArr, distArr) => {
  const queue = new Deque();
  const dx = [0, 0, 0, 0, -1, 1];
  const dy = [0, 0, -1, 1, 0, 0];
  const dz = [-1, 1, 0, 0, 0, 0];
  let start = null;

  for (let x = 0; x < N; x += 1) {
    for (let y = 0; y < N; y += 1) {
      for (let z = 0; z < N; z += 1) {
        if (cave[x][y][z] === 'S') {
          start = { x, y, z };
          distArr[x][y][z] = 0;
        }
      }
    }
  }

  queue.pushBack(start);

  while (queue.size > 0) {
    const { x, y, z } = queue.popFront();

    for (let i = 0; i < 6; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || nz < 0 || nz >= N) continue;

      if (cave[nx][ny][nz] === '.' && distArr[nx][ny][nz] === Infinity) {
        distArr[nx][ny][nz] = distArr[x][y][z] + 1;
        queue.pushBack({ x: nx, y: ny, z: nz });
      }
    }
  }
};

const findPath = (N, distArr) => {
  let minDist = Infinity;

  for (let y = 0; y < N; y += 1) {
    for (let z = 0; z < N; z += 1) {
      if (distArr[0][y][z] < minDist) {
        minDist = distArr[0][y][z];
      }
    }
  }

  return minDist;
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').filter(el => el !== '');
const n = Number(input[0]);
const cave = [];
const dist = new Array(n).fill(0).map(
  () => new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
);

for (let i = 1; i < input.length; i += n) {
  const level = input.slice(i, i + n).map(line => line.split(''));

  cave.push(level);
}

bfs(n, cave, dist);

console.log(findPath(n, dist));