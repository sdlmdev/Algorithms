// A. Словарь синонимов

// Ограничение времени 1 секунда
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вам дан словарь, состоящий из пар слов.
// Каждое слово является синонимом к парному ему слову.
// Все слова в словаре различны. Для одного данного слова определите его синоним.

// Формат ввода
// Программа получает на вход количество пар синонимов N.
// Далее следует N строк, каждая строка содержит ровно два слова-синонима.
// После этого следует одно слово.

// Формат вывода
// Программа должна вывести синоним к данному слову.

// Примечания
// Эту задачу можно решить и без словарей (сохранив все входные данные в списке),
// но решение со словарем будет более простым.

// Пример 1
// Ввод	          Вывод
// 3              Bye
// Hello Hi
// Bye Goodbye
// List Array
// Goodbye

// Пример 2
// Ввод	          Вывод
// 1              beep
// beep Car
// Car

// Пример 3
// Ввод	                   Вывод
// 2                       1234567890
// Ololo Ololo
// Numbers 1234567890
// Numbers

const fs = require('fs');
const [length, ...pairs] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const word = pairs.pop();

const dict1 = {};
const dict2 = {};

const fillDicts = (firstDict, secondDict, pairs) => {
  for (let pair of pairs) {
    const [key, value] = pair.split(' ');

    firstDict[key] = value;
    secondDict[value] = key;
  }
};

fillDicts(dict1, dict2, pairs);

fs.writeFileSync('output.txt', dict1[word] || dict2[word])