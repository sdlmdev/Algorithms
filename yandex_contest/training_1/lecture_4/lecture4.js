// Задача 1

// Дано два числа X и Y без ведущих нулей.
// Необходимо проверить можно ли получить первое из второго перестановкой цифр

const checkDigitPermutations = (x, y) => {
  const countDigits = (num) => {
    const digitArr = new Array(10).fill(0);

    while (num > 0) {
      digitArr[num % 10]++;
      num = Math.floor(num / 10);
    }

    return digitArr;
  };

  const countX = countDigits(x);
  const countY = countDigits(y);

  for (let i in countX) {
    if (countX[i] !==countY[i]) return false;
  }

  return true;
};

console.log(checkDigitPermutations(123, 321));

// Задача 2

// На шахматной доске N * N находятся M ладей (ладья бьет клетки на той же горизонтали или вертикали до ближайшей занятой)
// Определить сколько пар ладей бьют друг друга. Ладьи задаются парой чисел I, J - координаты клетки
// 1 <= N <= 10 ** 9, 0 <= M <= 2 * 10 ** 5

const countRookPairs = (rookcoords) => {
  const row = {};
  const col = {};

  const fillDict = (dictionary, key) => {
    if (dictionary[key]) {
      dictionary[key]++;
    } else {
      dictionary[key] = 1;
    }
  };

  const countPairs = (dictionary) => {
    let pairs = 0;

    for (let key in dictionary) {
      pairs += dictionary[key] - 1;
    }

    return pairs;
  };

  for (let coord of rookcoords) {
    fillDict(row, coord[0]);
    fillDict(col, coord[1]);
  }

  return countPairs(row) + countPairs(col);
};

console.log(countRookPairs([[1, 1], [1, 2], [3, 4], [5, 4], [3, 3]]));

// Задача 3

// Дана строка S. Выведите гистограмму как в примере (коды символов отсортированы) S = Hello, world!

//       #
//       ##
// ##########
//  !,Hdelorw

const getHistogram = (str) => {
  const dict = {};
  let maxCount = 0;

  for (let sym of str) {
    if (dict[sym]) {
      dict[sym]++;
    } else {
      dict[sym] = 1;
    }

    maxCount = Math.max(maxCount, dict[sym]);
  }
  
  const sortedDict = Object.keys(dict).sort();
  const res = [];

  for (let count = maxCount; count > 0; count--) {
    for (let key of sortedDict) {
      if (dict[key] >= count) {
        res.push('#');
      } else {
        res.push(' ');
      }
    }

    res.push('\n');
  }

  res.push(sortedDict.join(''));

  return res.join('');
};

console.log(getHistogram('Hello, world!'));

// Задача 4

// Сгруппировать слова по общим буквам
// ['cat', 'dog', 'god', 'tca', 'gda']
// [['cat', 'tca'], ['dog', 'god'], ['gda']]

const groupWords = (arr) => {
  const dict = {};

  for (let word of arr) {
    const sortWord = word.split('').sort().join('');

    if (dict[sortWord]) {
      dict[sortWord].push(word);
    } else {
      dict[sortWord] = [word];
    }
  }

  return Object.values(dict);
};

console.log(groupWords(['cat', 'dog', 'god', 'tca', 'gda']));