// C. Частотный анализ

// Ограничение времени	2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дан текст. Выведите все слова, встречающиеся в тексте, по одному на каждую строку.
// Слова должны быть отсортированы по убыванию их количества появления в тексте,
// а при одинаковой частоте появления — в лексикографическом порядке. Указание.
// После того, как вы создадите словарь всех слов,
// вам захочется отсортировать его по частоте встречаемости слова.
// Желаемого можно добиться, если создать список, элементами которого будут кортежи из двух элементов:
// частота встречаемости слова и само слово. Например, [(2, 'hi'), (1, 'what'), (3, 'is')].
// Тогда стандартная сортировка будет сортировать список кортежей,
// при этом кортежи сравниваются по первому элементу, а если они равны — то по второму.
// Это почти то, что требуется в задаче.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	                         Вывод
// hi                            damme
// hi                            is
// what is your name             name
// my name is bond               van
// james bond                    bond
// my name is damme              claude
// van damme                     hi
// claude van damme              my
// jean claude van damme         james
//                               jean
//                               what
//                               your

// Пример 2
// Ввод	                         Вывод
// oh you touch my tralala       ding
// mmm my ding ding dong         my
//                               dong
//                               mmm
//                               oh
//                               touch
//                               tralala
//                               you

// Пример 3
// Ввод	                             Вывод
// ai ai ai ai ai ai ai ai ai ai     ai

const checkWords = (dataArr) => {
  const words = new Map();

  for (let word of dataArr) {
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  }

  return Array.from(words.entries()).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  }).map(([word, count]) => word);
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(el => el.split(' ')).flat();

fs.writeFileSync('output.txt', checkWords(input).join('\n'));