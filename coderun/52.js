// 52. Словарь синонимов

// легкая standard library dict

// Вам дан словарь, состоящий из пар слов. Каждое слово является синонимом к парному ему слову.
// Все слова в словаре различны. Для одного данного слова определите его синоним.

// Формат ввода
// Программа получает на вход количество пар синонимов NN.
// Далее следует NN строк, каждая строка содержит ровно два слова-синонима.
// После этого следует одно слово.

// Формат вывода
// Программа должна вывести синоним к данному слову.

// Примечание
// Эту задачу можно решить и без словарей (сохранив все входные данные в списке),
// но решение со словарем будет более простым.

// Пример 1
// Ввод
// 3
// Hello Hi
// Bye Goodbye
// List Array
// Goodbye

// Вывод
// Bye

// Пример 2
// Ввод
// 1
// beep Car
// Car

// Вывод
// beep

// Пример 3
// Ввод
// 2
// Ololo Ololo
// Numbers 1234567890
// Numbers

// Вывод
// 1234567890

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dict1 = {};
const dict2 = {};
let lineCnt = 0;
let n = null;

readline.on('line', line => {
  if (lineCnt === 0) {
    n = Number(line);
  } else if (lineCnt <= n) {
    const [word1, word2] = line.trim().split(' ');

    dict1[word1] = word2;
    dict2[word2] = word1;
  } else {
    readline.close();
    console.log(dict1[line] || dict2[line]);
  }

  lineCnt += 1;
});
