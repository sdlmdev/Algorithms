// A. Двоичный поиск

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Реализуйте двоичный поиск в массиве

// Формат ввода
// В первой строке входных данных содержатся натуральные числа N и K (0 < N, K <= 100000).
// Во второй строке задаются N элементов первого массива, а в третьей строке – K элементов второго массива.
// Элементы обоих массивов - целые числа, каждое из которых по модулю не превосходит 109

// Формат вывода
// Требуется для каждого из K чисел вывести в отдельную строку "YES",
// если это число встречается в первом массиве, и "NO" в противном случае.

// Пример 1

// Ввод	
// 10 10
// 1 61 126 217 2876 6127 39162 98126 712687 1000000000 
// 100 6127 1 61 200 -10000 1 217 10000 1000000000

// Вывод
// NO
// YES
// YES
// YES
// NO
// NO
// YES
// YES
// NO
// YES

// Пример 2
// Ввод	                           Вывод
// 10 10                           NO
// -8 -6 -4 -4 -2 -1 0 2 3 3       YES
// 8 3 -3 -2 2 -1 2 9 -8 0         NO
//                                 YES
//                                 YES
//                                 YES
//                                 YES
//                                 NO
//                                 YES
//                                 YES

// Пример 3
// Ввод	                           Вывод
// 10 5                            NO
// 1 2 3 4 5 6 7 8 9 10            NO
// -2 0 4 9 12                     YES
//                                 YES
//                                 NO

const binarySearch = (l, r, dataArr, x) => {
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (dataArr[m] === x) {
      return 'YES';
    } else if (dataArr[m] < x) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return 'NO';
};

const fs = require('fs');
const [nk, arr, nums] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  i => i.trim().split(' ').map(Number)
);
const res = nums.map(num => binarySearch(0, arr.length, arr, num));

fs.writeFileSync('output.txt', res.join('\n'));
