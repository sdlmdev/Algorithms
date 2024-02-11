// 20. Пирамидальная сортировка

// Ограничение времени 2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Отсортируйте данный массив. Используйте пирамидальную сортировку.

// Формат ввода
// Первая строка входных данных содержит количество элементов в массиве N, N ≤ 10**5.
// Далее задаются N целых чисел, не превосходящих по абсолютной величине 10**9.

// Формат вывода
// Выведите эти числа в порядке неубывания.

// Пример 1
// Ввод	     Вывод
// 1         1
// 1

// Пример 2
// Ввод	     Вывод
// 2         1 3 
// 3 1

const heapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

const heapSort = (arr) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
};

const fs = require('fs');
const [[n], arr] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);

console.log(heapSort(arr).join(' '));