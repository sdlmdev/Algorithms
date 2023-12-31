// A. Наблюдение за студентами

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// На первом курсе одной Школы, учится 1 ≤ N ≤ 109 студентов.
// При проведении экзаменов студентов рассаживают в ряд, каждого за своей партой.
// Парты пронумерованы числами от 0 до N - 1.

// Известно, что студент, оставшись без наблюдения,
// открывает телефон и начинает искать ответы на экзамен в поисковике Яндекса.

// Поэтому было решено позвать M преподавателей наблюдать за студентами.
// Когда за студентом наблюдает хотя бы один преподаватель, он стесняется и не идет искать ответы к экзамену.
// Преподаватель с номером i видит студентов сидящих за партами от bi до ei включительно.

// Необходимо посчитать количество студентов, которые все таки будут искать ответы к экзамену в Яндексе

// Формат ввода
// В первой строке находятся два целых числа 1 ≤ N ≤ 109, 1 ≤ M ≤ 104 — число студентов
// и число преподавателей соответственно.
// В следующих M строках содержится по два целых числа 0 ≤ bi ≤ ei ≤ N - 1 — парты,
// за которыми наблюдает i-й преподаватель.

// Формат вывода
// Выведите одно число — количество студентов оставшихся без наблюдения.

// Пример 1
// Ввод	      Вывод
// 10 3       5
// 1 3
// 2 4
// 9 9

// Пример 2
// Ввод	      Вывод
// 10 2       8
// 1 1
// 1 2

const countCheaters = (n, tables) => {
  const events = [];

  for (let table of tables) {
    events.push([table[0], -1]);
    events.push([table[1] + 1, 1]);
  }

  events.push([0, 0]);
  events.push([n, 0]);

  events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let cheaters = 0;
  let observers = 0;

  for (let i = 0; i < events.length - 1; i++) {
    observers += events[i][1];
    if (observers === 0) {
      cheaters += events[i + 1][0] - events[i][0];
    }
  }

  return cheaters;
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(el => el.split(' ').map(Number));
const [n, m] = input.shift();

fs.writeFileSync('output.txt', countCheaters(n, input).toString());