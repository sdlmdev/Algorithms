// F. Очень легкая задача

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Сегодня утром жюри решило добавить в вариант олимпиады еще одну, Очень Легкую Задачу.
// Ответственный секретарь Оргкомитета напечатал ее условие в одном экземпляре,
// и теперь ему нужно до начала олимпиады успеть сделать еще N копий.
// В его распоряжении имеются два ксерокса, один из которых копирует лист за х секунд, а другой – за y.
// (Разрешается использовать как один ксерокс, так и оба одновременно.
// Можно копировать не только с оригинала, но и с копии.)
// Помогите ему выяснить, какое минимальное время для этого потребуется.

// Формат ввода
// На вход программы поступают три натуральных числа N, x и y,
// разделенные пробелом (1 ≤ N ≤ 2 × 108, 1 ≤ x, y ≤ 10).

// Формат вывода
// Выведите одно число – минимальное время в секундах, необходимое для получения N копий.

// Пример 1
// Ввод	     Вывод
// 4 1 1     3
// 

// Пример 2
// Ввод	     Вывод
// 5 1 2     4

const checkCopies = (time, params) => {
  const [n, x, y] = params;
  const fastest = Math.min(x, y);
  const slowest = Math.max(x, y);

  return Math.floor((time - fastest) / fastest) + Math.floor((time - fastest) / slowest) >= n - 1;
};

const binarySearch = (l, r, check, params) => {
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (check(m, params)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};

const fs = require('fs');
const [n, x, y] = fs.readFileSync('input.txt', 'utf-8').trim().split(' ').map(Number);

fs.writeFileSync('output.txt', binarySearch(0, n * Math.min(x, y), checkCopies, [n, x, y]).toString());