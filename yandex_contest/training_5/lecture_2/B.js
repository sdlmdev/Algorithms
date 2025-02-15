// B. Продавец рыбы

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вася решил заняться торговлей рыбой.
// С помощью методов машинного обучения он предсказал цены на рыбу на N дней вперёд.
// Он решил, что в один день он купит рыбу, а в один из следующих дней —
// продаст (то есть совершит или ровно одну покупку и продажу или вообще не совершит покупок и продаж,
// если это не принесёт ему прибыли). К сожалению, рыба — товар скоропортящийся
// и разница между номером дня продажи и номером дня покупки не должна превышать K.

// Определите, какую максимальную прибыль получит Вася.

// Формат ввода
// В первой строке входных данных задаются числа N и K (1 ≤ N ≤ 10000, 1 ≤ K ≤ 100).
// Во второй строке задаются цены на рыбу в каждый из N дней.
// Цена — целое число, которое может находится в пределах от 1 до 10**9.

// Формат вывода
// Выведите одно число — максимальную прибыль, которую получит Вася.

// Пример 1
// Ввод            Вывод
// 5 2             2
// 1 2 3 4 5

// Пример 2
// Ввод            Вывод
// 5 2             0
// 5 4 3 2 1

const findMaxProfit = (N, K, daysArr) => {
  let maxProfit = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j <= i + K; j++) {
      if (daysArr[j] - daysArr[i] > maxProfit) {
        maxProfit = daysArr[j] - daysArr[i];
      }
    }
  }

  return maxProfit;
};


const fs = require('fs');
const [[n, k], [...days]] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.trim().split(' ').map(Number)
);

fs.writeFileSync('output.txt', findMaxProfit(n, k, days).toString());
