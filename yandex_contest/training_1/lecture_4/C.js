// C. Самое частое слово

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан текст. Выведите слово, которое в этом тексте встречается чаще всего.
// Если таких слов несколько, выведите то, которое меньше в лексикографическом порядке.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1

// Ввод	                                
// apple orange banana banana orange    

// Вывод
// banana

// Пример 2

// Ввод
// oh you touch my tralala mmm my ding ding dong

// Вывод
// ding

// Пример 3

// Ввод	
// q w e r t y u i o p
// a s d f g h j k l
// z x c v b n m

// Вывод
// a

const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8').trim().split(/\s+/);
const dict = {};

const filltDict = (dictionary, elems) => {
  for (let elem of elems) {
    dictionary[elem] = ++dictionary[elem] || 1;
  }
};

filltDict(dict, text);

const findMaxValue = (obj) => {
  let max = 0;

  for (let key in obj) {
    max = Math.max(max, obj[key]);
  }

  return max;
};

const maxValue = findMaxValue(dict);

const findMaxWord = (data, maxVal) => {
  const res = [];

  for (let key in data) {
    if (data[key] === maxVal) res.push(key);
  }

  return res.sort()[0];
};

fs.writeFileSync('output.txt', findMaxWord(dict, maxValue));