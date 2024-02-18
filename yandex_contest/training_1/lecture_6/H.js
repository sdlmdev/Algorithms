// H. Провода

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дано N отрезков провода длиной L1, L2, ..., LN сантиметров.
// Требуется с помощью разрезания получить из них K равных отрезков как можно большей длины,
// выражающейся целым числом сантиметров. Если нельзя получить K отрезков длиной даже 1 см, вывести 0.

// Формат ввода
// В первой строке находятся числа N и К. В следующих N строках - L1, L2, ..., LN, по одному числу в строке.

// Ограничения: 1 ≤ N, K ≤ 10 000, 100 ≤ Li ≤ 10 000 000, все числа целые.

// Формат вывода
// Вывести одно число - полученную длину отрезков.

// Пример
// Ввод	    Вывод
// 4 11     200
// 802
// 743
// 457
// 539

const fs = require('fs');
const [nk, ...wires] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  i => i.trim().split(' ').map(Number)
);
const [n, k] = nk;

const checkCuts = (cuts, params) => {
  const [n, k, wires] = params;

  return wires.map(i => Math.floor(i / cuts)).reduce((acc, curr) => acc + curr, 0) >= k;
}

const binarySearch = (l, r, check, params) => {
  while (l < r) {
    const m = Math.floor((l + r + 1) / 2);

    if (check(m, params)) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  return l;
};

fs.writeFileSync('output.txt', binarySearch(0, Math.max(...wires), checkCuts, [n, k, wires]).toString());