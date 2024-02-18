// F. Инопланетный геном

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Геном жителей системы Тау Кита содержит 26 видов оснований,
// для обозначения которых будем использовать буквы латинского алфавита от A до Z,
// а сам геном записывается строкой из латинских букв. Важную роль в геноме играют пары соседних оснований,
// например, в геноме «ABBACAB» можно выделить следующие пары оснований: AB, BB, BA, AC, CA, AB.

// Степенью близости одного генома другому геному называется количество пар соседних оснований первого генома,
// которые встречаются во втором геноме.

// Формат ввода
// Вам даны два генома, определите степень близости первого генома второму геному.
// Программа получает на вход две строки, состоящие из заглавных латинских букв.
// Каждая строка непустая, и её длина не превосходит 10**5.

// Формат вывода
// Программа должна вывести одно целое число – степень близости генома,
// записанного в первой строке, геному, записанному во второй строке.

// Пример
// Ввод	        Вывод
// ABBACAB      4
// BCABB

// Примечания
// Следующие пары оснований первого генома встречаются во втором геноме:
// AB, BB, CA, AB. Обратите внимание на то, что пара AB в первом геноме встречается два раза,
// поэтому и подсчитана в ответе два раза.

// Система оценивания:
// Решение, правильно работающее только для случаев, когда длины данных строк не превосходят 100,
// будет оцениваться в 60 баллов.

const fs = require('fs');
let [gen1, gen2] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

const getGenePairs = (str) => {
  const genes = [];

  for (let i = 0; i <= str.length - 2; i++) {
    genes.push(str[i] + str[i + 1]);
  }

  return genes;
}

const set1 = getGenePairs(gen1);
const set2 = new Set(getGenePairs(gen2));

let res = 0;

for (let i of set1) {
  if (set2.has(i)) {
    res += 1;
  }
}

fs.writeFileSync('output.txt', res.toString());