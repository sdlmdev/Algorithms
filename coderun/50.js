// 50. Самое частое слово
// легкая standard library dict counting

// Дан текст. Выведите слово, которое в этом тексте встречается чаще всего.
// Если таких слов несколько, выведите то, которое меньше в лексикографическом порядке.

// Напомним:
// Текст - произвольная последовательность символов.
// Слово - непустая последовательность непробельных символов, идущих подряд.

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

const findMaxEl = (textArr) => {
  const dict = {};

  for (let word of textArr) {
    if (dict[word]) {
      dict[word] += 1;
    } else {
      dict[word] = 1;
    }
  }

  return Object.keys(dict).sort((a, b) => a.localeCompare(b)).reduce(
    (a, b) => dict[a] >= dict[b] ? a : b
  );
};

const fs = require('fs');
const [...text] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.trim().split(' ')
);

console.log(findMaxEl(text.flat()));