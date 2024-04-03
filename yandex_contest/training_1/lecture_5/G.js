// G. Счет в гипершашках

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Андрей работает судьей на чемпионате по гипершашкам. В каждой игре в гипершашки участвует три игрока.
// По ходу игры каждый из игроков набирает некоторое положительное целое число баллов.
// Если после окончания игры первый игрок набрал a баллов, второй — b, а третий c, то говорят
// что игра закончилась со счетом a:b:c.

// Андрей знает, что правила игры гипершашек устроены таким образом,
// что в результате игры баллы любых двух игроков различаются не более чем в k раз.

// После матча Андрей показывает его результат,
// размещая три карточки с очками игроков на специальном табло.
// Для этого у него есть набор из n карточек, на которых написаны числа x1, x2, …, xn. Чтобы выяснить,
// насколько он готов к чемпионату, Андрей хочет понять,
// сколько различных вариантов счета он сможет показать на табло, используя имеющиеся карточки.

// Требуется написать программу, которая по числу k и значениям чисел на карточках, которые имеются у Андрея,
// определяет количество различных вариантов счета, которые Андрей может показать на табло.

// Формат ввода
// Первая строка входного файла содержит два целых числа: n и k (3 ≤ n ≤ 100000, 1 ≤ k ≤ 10**9).

// Вторая строка входного файла содержит n целых чисел x1, x2, …, xn (1 ≤ xi ≤ 10**9).

// Формат вывода
// Выходной файл должен содержать одно целое число — искомое количество различных вариантов счета.

// Пример
// Ввод	          Вывод
// 5 2            9
// 1 1 2 2 3

// Примечания
// В приведенном примере Андрей сможет показать следующие варианты счета:
// 1:1:2, 1:2:1, 2:1:1, 1:2:2, 2:1:2, 2:2:1, 2:2:3, 2:3:2, 3:2:2.
// Другие тройки чисел, которые можно составить с использованием имеющихся карточек,
// не удовлетворяют заданному условию, что баллы любых двух игроков различаются не более чем в k = 2 раза.

const fillDict = (dict, dataArr) => {
  for (let card of dataArr) {
    if (dict[card]) {
      dict[card]++;
    } else {
      dict[card] = 1;
    }
  }
};

const countCombination = (dict, keysArr, k) => {
  let res = 0;
  let r = 0;
  let duplicates = 0;

  for (let l = 0; l < keysArr.length; l++) {
    while (r < keysArr.length && keysArr[r] <= keysArr[l] * k) {
      if (dict[keysArr[r]] > 1) {
        duplicates += 1;
      }

      r++;
    }

    const range = r - l - 1;

    if (dict[keysArr[l]] > 1) {
      res += range * 3;
      duplicates -= 1;
    } 
    if (dict[keysArr[l]] > 2) res += 1;

    res += 6 * range * (range - 1) / 2;
    res += 3 * duplicates;
  }

  return res.toString();
};

const fs = require('fs');
const [NK, cards] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  i => i.split(' ').map(Number)
);
const nums = {};
const K = NK.pop();

cards.sort((a, b) => a - b);

fillDict(nums, cards);

const keys = Object.keys(nums);

fs.writeFileSync('output.txt', countCombination(nums, keys, K));