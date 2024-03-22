// C. Удаление чисел

// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан массив a из n чисел.Найдите минимальное количество чисел,
// после удаления которых попарная разность оставшихся чисел по модулю не будет превышать 1,
// то есть после удаления ни одно число не должно отличаться от какого-либо другого более чем на 1.

// Формат ввода
// Первая строка содержит одно целое число n (1≤n≤2⋅10**5) — количество элементов массива a.

// Вторая строка содержит n целых чисел a1,a2,…,an (0≤ai≤10**5) — элементы массива a.

// Формат вывода
// Выведите одно число — ответ на задачу.

// Пример 1
// Ввод           Вывод
// 5              3
// 1 2 3 4 5

// Пример 2
// Ввод                    Вывод
// 10
// 1 1 2 3 5 5 2 2 1 5     4


const findMinNumsToDelete = (N, numsArr) => {
  if (N < 2) return 0;

  const cntMap = new Map();
  let max = 0;
  
  for (let i = 0; i < N; i += 1) {
    cntMap.set(numsArr[i], (cntMap.get(numsArr[i]) || 0) + 1);
  }

  for (let [num, count] of cntMap) {
    max = Math.max(max, count + (cntMap.get(num + 1) || 0));
  }

  return N - max;
};

const fs = require('fs');
const [[n], nums] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
nums.sort((a, b) => a - b);

console.log(findMinNumsToDelete(n, nums));