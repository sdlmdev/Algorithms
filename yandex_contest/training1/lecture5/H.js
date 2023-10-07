// H. Подстрока

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// В этой задаче Вам требуется найти максимальную по длине подстроку данной строки,
// такую что каждый символ встречается в ней не более k раз.

// Формат ввода
// В первой строке даны два целых числа n и k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n ),
// где n – количество символов в строке. Во второй строке n символов – данная строка,
// состоящая только из строчных латинских букв.

// Формат вывода
// В выходной файл выведите два числа – длину искомой подстроки и номер её первого символа.
// Если решений несколько, выведите любое.

// Пример 1
// Ввод	       Вывод
// 3 1         2 1
// abb
// 

// Пример 2
// Ввод	       Вывод
// 5 2         4 1
// ababa

const getSubstr = (dict, str, n, k) => {
  let maxLength = 0;
  let start = 1;
  let l = 0;

  for (let r = 0; r < n; r++) {
    dict[str[r]] = dict[str[r]] + 1 || 1;

    while (dict[str[r]] > k) {
      dict[str[l]] -= 1;
      l++;
    }

    if (r - l + 1> maxLength) {
      maxLength = r - l + 1;
      start = l + 1;
    }
  }

  return [maxLength, start].join(' ');
}

const fs = require('fs');
const [nk, str] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const [N, K] = nk.split(' ').map(Number);
const letters = {};

fs.writeFileSync('output.txt', getSubstr(letters, str, N, K));