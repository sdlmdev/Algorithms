// A. Быстрый поиск в массиве

// Ограничение времени 3 секунды
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан массив из N целых чисел. Все числа от −10**9 до 10**9.

// Нужно уметь отвечать на запросы вида “Cколько чисел имеют значения отL доR?”.

// Формат ввода
// Число N (1≤N≤10**5). Далее N целых чисел.
// Затем число запросов K (1≤K≤105).
// Далее K пар чисел L,R (−10**9≤L≤R≤10**9) — собственно запросы.

// Формат вывода
// Выведите K чисел — ответы на запросы.

// Пример
// Ввод             Вывод
// 5                5 2 2 0 
// 10 1 10 3 4
// 4
// 1 10
// 2 9
// 3 4
// 2 2

const lBs = (l, r, numsArr, x) => {
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (numsArr[m] < x) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

const rBs = (l, r, numsArr, x) => {
  while (l < r) {
    const m = Math.floor((l + r + 1) / 2);

    if (numsArr[m] > x) {
      r = m - 1;
    } else {
      l = m;
    }
  }

  return l;
};

const findNums = (N, numsArr, queriesArr) => {
  const res = [];

  for (const [min, max] of queriesArr) {
    const l = lBs(0, N - 1, numsArr, min);
    const r = rBs(0, N - 1, numsArr, max);

    if (numsArr[l] < min || numsArr[r] > max) {
      res.push(0);
    } else {
      res.push(r - l + 1);
    }
  }

  return res;
};

const fs = require('fs');
const [[n], [...nums], [k], ...queries] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  e => e.split(' ').map(Number)
);
nums.sort((a, b) => a - b);

console.log(findNums(n, nums, queries).join(' '));