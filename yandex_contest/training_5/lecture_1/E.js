// E. Прибыльный стартап

// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// k друзей организовали стартап по производству укулеле для кошек.
// На сегодняшний день прибыль составила n рублей. Вы, как главный бухгалтер компании,
// хотите в каждый из ближайших d дней приписывать по одной цифре в конец числа, выражающего прибыль.
// При этом в каждый из дней прибыль должна делиться на k.

// Формат ввода
// В единственной строке входных данных через пробел записаны три числа: n,k,d — изначальная прибыль,
// количество учредителей компании и количество дней,
// которое вы собираетесь следить за прибылью (1≤n,k≤10**9,1≤d≤10**5).
// НЕ гарантируется, что n делится на k.

// Формат вывода
// Выведите одно целое число x — прибыль компании через d дней.
// Первые цифры числа x должны совпадать с числом n. Все префиксы числа x,
// которые длиннее числа n на 1,2,…,d цифр, должны делиться на k.
// Если возможных ответов несколько, выведите любой из них. Если ответа не существует, выведите −1.

// Пример 1
// Ввод         Вывод
// 21 108 1     216

// Пример 2
// Ввод         Вывод
// 5 12 4       -1

// Примечания
// В первом тестовом примере всего один день нужно следить за прибылью.
// Можно дописать цифру 6 в конец числа 21 и получить прибыль, делящуюся на 108.

// Во втором тестовом примере мы в первый же день не можем получить прибыль, делящуюся на k,
// какая бы цифра не была дописана у числу n, поэтому ответа не существует.

const findProfitable = (N, K, D) => {
  let profit = BigInt(N);
  const ten = BigInt(10);
  const kBigInt = BigInt(K);
  const nLength = N.toString().length;

  for (let i = 0; i < D; i++) {
    let isFound = false;

    for (let j = 0; j <= 9; j++) {
      let newProfit = profit * ten + BigInt(j);
      let newPrefix = BigInt(newProfit.toString().substring(0, nLength + i + 1));

      if (newPrefix % kBigInt === BigInt(0)) {
        profit = newProfit;
        isFound = true;

        if (profit % kBigInt === BigInt(0)) {
          for (let j = 0; j < D - i - 1; j++) {
            profit *= BigInt(10);
          }
          return profit;
        }
      }
    }

    if (!isFound) {
      return BigInt(-1);
    }
  }

  return profit;
}

const fs = require('fs');
const [n, k, d] = fs.readFileSync('input.txt', 'utf-8').trim().split(' ').map(BigInt);

console.log(findProfitable(n, k, Number(d)).toString());
