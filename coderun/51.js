// 51. Номер появления слова
// легкая standard library dict counting

// Во входном файле (вы можете читать данные из файла input.txt) записан текст.
// Словом считается последовательность непробельных символов идущих подряд,
// слова разделены одним или большим числом пробелов или символами конца строки.
// Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// one two one tho three

// Вывод
// 0 0 1 0 0 

// Пример 2
// Ввод
// She sells sea shells on the sea shore;
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.

// Вывод
// 0 0 0 0 0 0 1 0 0 1 0 0 1 0 2 2 0 0 0 0 1 2 3 3 1 1 4 0 1 0 1 2 4 1 5 0 0 

// Пример 3
// Ввод
// aba aba; aba @?"

// Вывод
// 0 0 1 0 

const findMaxEl = (textArr) => {
  const dict = {};
  const res = [];

  for (let word of textArr) {
    if (dict[word] !== undefined) {
      dict[word] += 1;
    } else {
      dict[word] = 0;
    }

    res.push(dict[word]);
  }

  return res.join(' ');
};

const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8').trim().split(/\s+/);

if (text[0] === '') return [];

console.log(findMaxEl(text));