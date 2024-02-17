// 40. Метро

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Метрополитен состоит из нескольких линий метро.
// Все станции метро в городе пронумерованы натуральными числами от 1 до N.
// На каждой линии расположено несколько станций.
// Если одна и та же станция расположена сразу на нескольких линиях,
// то она является станцией пересадки и на этой станции можно пересесть с любой линии,
// которая через нее проходит, на любую другую (опять же проходящую через нее).

// Напишите программу, которая по данному вам описанию метрополитена определит,
// с каким минимальным числом пересадок можно добраться со станции A на станцию B.
// Если данный метрополитен не соединяет все линии в одну систему, то может так получиться,
// что со станции A на станцию B добраться невозможно, в этом случае ваша программа должна это определить.

// Формат ввода
// Сначала вводится число N — количество станций метро в городе (2≤N≤100).
// Далее следует число M — количество линий метро (1≤M≤20). Далее идет описание M линий.
// Описание каждой линии состоит из числа Pi — количество станций на этой линии (2≤Pi≤50) и Pi чисел,
// задающих номера станций, через которые проходит линия (ни через какую станцию линия не проходит дважды).

// Затем вводятся два различных числа: A — номер начальной станции, и B — номер станции,
// на которую нам нужно попасть. При этом если через станцию A проходит несколько линий,
// то мы можем спуститься на любую из них. Так же если через станцию B проходит несколько линий,
// то нам не важно, по какой линии мы приедем.

// Формат вывода
// Выведите минимальное количество пересадок, которое нам понадобится.
// Если добраться со станции A на станцию B невозможно,
// программа должна вывести одно число –1 (минус один).

// Пример
// Ввод	         Вывод
// 5             0
// 2
// 4 1 2 3 4
// 2 5 3
// 3 1

const fillGraph = (lines, graphArr, M) => {
  for (let i = 0; i < M; i++) {
    const [P, ...stations] = lines[i];
    for (let j = 0; j < P; j++) {
      for (let k = j + 1; k < P; k++) {
        graphArr[stations[j]].push({ station: stations[k], line: i });
        graphArr[stations[k]].push({ station: stations[j], line: i });
      }
    }
  }
};

const bfs = (graphArr, N, M, A, B) => {
  const visited = Array.from({ length: N + 1 }, () => Array(M).fill(false));
  const queue = [{ station: A, line: -1, transfers: 0 }];
  visited[A][M] = true;

  while (queue.length > 0) {
    const { station, line, transfers } = queue.shift();

    if (station === B) {
      return transfers - 1;
    }

    for (const { station: nextStation, line: nextLine } of graphArr[station]) {
      if (!visited[nextStation][nextLine]) {
        visited[nextStation][nextLine] = true;
        queue.push({
          station: nextStation,
          line: nextLine,
          transfers: line === nextLine ? transfers : transfers + 1,
        });
      }
    }
  }

  return -1;
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);
const n = input[0][0];
const m = input[1][0];
const lines = input.slice(2, 2 + m);
const [a, b] = input[input.length - 1];
const graph = Array.from({ length: n + 1 }, () => []);

fillGraph(lines, graph, m);
console.log(bfs(graph, n, m, a, b));
