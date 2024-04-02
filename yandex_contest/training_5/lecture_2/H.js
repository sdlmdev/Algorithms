// H. Наилучший запрет

// Ограничение времени 3 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Константин и Михаил играют в настольную игру «Ярость Эльфов».
// В игре есть n рас и m классов персонажей. Каждый персонаж характеризуется своими расой и классом.
// Для каждой расы и каждого класса существует ровно один персонаж такой расы и такого класса.
// Сила персонажа i-й расы и j-го класса равна ai j, и обоим игрокам это прекрасно известно.

// Сейчас Константин будет выбирать себе персонажа.
// Перед этим Михаил может запретить одну расу и один класс, чтобы Константин не мог выбирать персонажей,
// у которых такая раса или такой класс.
// Конечно же, Михаил старается, чтобы Константину достался как можно более слабый персонаж,
// а Константин, напротив, выбирает персонажа посильнее. Какие расу и класс следует запретить Михаилу?

// Формат ввода
// Первая строка содержит два целых числа n и m (2 ≤ n,m ≤ 1000) через пробел —
// количество рас и классов в игре «Ярость Эльфов», соответственно.

// В следующих n строках содержится по m целых чисел через пробел.
// j-е число i-й из этих строк — это ai j (1 ≤ ai j ≤ 10**9).

// Формат вывода
// В единственной строке выведите два целых числа через пробел — номер расы и номер класса,
// которые следует запретить Михаилу. Расы и классы нумеруются с единицы.
// Если есть несколько возможных ответов, выведите любой из них.

// Пример 1
// Ввод         Вывод
// 2 2          2 2
// 1 2
// 3 4

// Пример 2
// Ввод         Вывод
// 3 4          3 2
// 1 3 5 7
// 9 11 2 4
// 6 8 10 12

const findRaceAndClassToBan = (N, M, powersArr) => {
  let firstMax = -Infinity;
  let firstMaxIndex = [-1, -1];
  let secondMax = -Infinity;
  let secondMaxIndex = [-1, -1];
  let thirdMax = -Infinity;
  let thirdMaxIndex = [-1, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (powersArr[i][j] > firstMax) {
        thirdMax = secondMax;
        thirdMaxIndex = secondMaxIndex.slice();
        secondMax = firstMax;
        secondMaxIndex = firstMaxIndex.slice();
        firstMax = powersArr[i][j];
        firstMaxIndex = [i, j];
      } else if (powersArr[i][j] > secondMax) {
        thirdMax = secondMax;
        thirdMaxIndex = secondMaxIndex.slice();
        secondMax = powersArr[i][j];
        secondMaxIndex = [i, j];
      } else if (powersArr[i][j] > thirdMax) {
        thirdMax = powersArr[i][j];
        thirdMaxIndex = [i, j];
      }
    }
  }

  if (firstMaxIndex[1] === thirdMaxIndex[1] && firstMaxIndex[1] === secondMaxIndex[1]) {
    let newFirstMax = -Infinity;
    let newFirstMaxIndex = [-1, -1];
    let newSecondMax = -Infinity;
    let newSecondMaxIndex = [-1, -1];
    let newThirdMax = -Infinity;
    let newThirdMaxIndex = [-1, -1];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (powersArr[i][j] > newFirstMax && j !== newFirstMaxIndex[1]) {
          newThirdMax = newSecondMax;
          newThirdMaxIndex = newSecondMaxIndex.slice();
          newSecondMax = newFirstMax;
          newSecondMaxIndex = newFirstMaxIndex.slice();
          newFirstMax = powersArr[i][j];
          newFirstMaxIndex = [i, j];
        } else if (powersArr[i][j] > newSecondMax && j !== newFirstMaxIndex[1]) {
          newThirdMax = newSecondMax;
          newThirdMaxIndex = newSecondMaxIndex.slice();
          newSecondMax = powersArr[i][j];
          newSecondMaxIndex = [i, j];
        } else if (powersArr[i][j] > newThirdMax) {
          newThirdMax = powersArr[i][j];
          newThirdMaxIndex = [i, j];
        }
      }
    }

    return [newSecondMaxIndex[0] + 1, secondMaxIndex[1] + 1].join(' ');
  } else if (firstMaxIndex[0] === thirdMaxIndex[0] && firstMaxIndex[0] === secondMaxIndex[0]) {
    let newFirstMax = -Infinity;
    let newFirstMaxIndex = [-1, -1];
    let newSecondMax = -Infinity;
    let newSecondMaxIndex = [-1, -1];
    let newThirdMax = -Infinity;
    let newThirdMaxIndex = [-1, -1];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (powersArr[i][j] > newFirstMax && i !== newFirstMaxIndex[0]) {
          newThirdMax = newSecondMax;
          newThirdMaxIndex = newSecondMaxIndex.slice();
          newSecondMax = newFirstMax;
          newSecondMaxIndex = newFirstMaxIndex.slice();
          newFirstMax = powersArr[i][j];
          newFirstMaxIndex = [i, j];
        } else if (powersArr[i][j] > newSecondMax && i !== newFirstMaxIndex[0]) {
          newThirdMax = newSecondMax;
          newThirdMaxIndex = newSecondMaxIndex.slice();
          newSecondMax = powersArr[i][j];
          newSecondMaxIndex = [i, j];
        } else if (powersArr[i][j] > newThirdMax) {
          newThirdMax = powersArr[i][j];
          newThirdMaxIndex = [i, j];
        }
      }
    }

    return [firstMaxIndex[0] + 1, newSecondMaxIndex[1] + 1].join(' ');
  } else if (firstMaxIndex[1] === thirdMaxIndex[1]) {
    return [secondMaxIndex[0] + 1, firstMaxIndex[1] + 1].join(' ');
  } else if (firstMaxIndex[1] === secondMaxIndex[1]) {
    return [thirdMaxIndex[0] + 1, firstMaxIndex[1] + 1].join(' ');
  } else if (secondMaxIndex[0] === thirdMaxIndex[0]) {
    return [secondMaxIndex[0] + 1, firstMaxIndex[1] + 1].join(' ');
  } else if (secondMaxIndex[0] === firstMaxIndex[0]) {
    return [firstMaxIndex[0] + 1, thirdMaxIndex[1] + 1].join(' ');
  }
  else if (firstMaxIndex[0] !== secondMaxIndex[0]
    && firstMaxIndex[0] !== thirdMaxIndex[0]
    && secondMaxIndex[0] !== thirdMaxIndex[0]
    && firstMaxIndex[1] !== secondMaxIndex[1]
    && firstMaxIndex[1] !== thirdMaxIndex[1]
    && secondMaxIndex[1] !== thirdMaxIndex[1]) {
    return [secondMaxIndex[0] + 1, firstMaxIndex[1] + 1].join(' ');
  }
  else {
    return [firstMaxIndex[0] + 1, secondMaxIndex[1] + 1].join(' ');
  }
}

const fs = require('fs');
const [[n, m], ...powers] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

console.log(findRaceAndClassToBan(Number(n), Number(m), powers));
