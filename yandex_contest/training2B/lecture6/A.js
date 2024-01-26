// A. Быстрый поиск в массиве

// Ограничение времени	3 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Дан массив из N целых чисел. Все числа от -10**9 до 10**9.
// Нужно уметь отвечать на запросы вида “Cколько чисел имеют значения от L до R?”.

// Формат ввода
// Число N (1 ≤ N ≤ 10**5). Далее N целых чисел. Затем число запросов K (1 ≤ K ≤ 10**5).
// Далее K пар чисел L, R (−10**9 ≤ L ≤ R ≤ 10**9) — собственно запросы.

// Формат вывода
// Выведите K чисел — ответы на запросы.

// Пример
// Ввод	             Вывод
// 5                 5 2 2 0 
// 10 1 10 3 4
// 4
// 1 10
// 2 9
// 3 4
// 2 2

const binSearch = (l, r, dataArr, x, isLeft) => {
  while (l + 1 < r) {
    const mid = Math.floor((l + r) / 2);

    if (isLeft) {
      if (dataArr[mid] < x) {
        l = mid;
      } else {
        r = mid;
      }
    } else {
      if (dataArr[mid] > x) {
        r = mid;
      } else {
        l = mid;
      }
    }
  }

  return isLeft ? r : l;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let arr = [];
const res = [];
let k, n;

readline.on('line', line => {
  if (lineCnt === 0) {
    n = +line;
  } else if (lineCnt === 1) {
    arr = line.split(' ').map(Number).sort((a, b) => a - b);
  } else if (lineCnt === 2) {
    k = +line;
  } else {
    if (res.length === k) readline.close();

    const [l, r] = line.split(' ').map(Number);
    const lIdx = binSearch(-1, n, arr, l, true);
    const rIdx = binSearch(-1, n, arr, r, false);

    res.push(rIdx - lIdx + 1);
  }

  lineCnt++;
}).on('close', () => console.log(res.join(' ')));
