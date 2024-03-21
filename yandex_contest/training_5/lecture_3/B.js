// B. Анаграмма?

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Задано две строки, нужно проверить, является ли одна анаграммой другой.
// Анаграммой называется строка, полученная из другой перестановкой букв.

// Формат ввода
// Строки состоят из строчных латинских букв, их длина не превосходит 100000.
// Каждая записана в отдельной строке.

// Формат вывода
// Выведите "YES" если одна из строк является анаграммой другой и "NO" в противном случае.

// Пример 1
// Ввод         Вывод
// dusty        YES
// study 

// Пример 2
// Ввод         Вывод
// rat          NO
// bat

const checkAnagram = (firstStr, secondStr) => {
  if (firstStr.length !== secondStr.length) {
    return 'NO';
  }

  const firstStrMap = new Map();
  const secondStrMap = new Map();

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStrMap.has(firstStr[i])) {
      firstStrMap.set(firstStr[i], firstStrMap.get(firstStr[i]) + 1);
    } else {
      firstStrMap.set(firstStr[i], 1);
    }
    if (secondStrMap.has(secondStr[i])) {
      secondStrMap.set(secondStr[i], secondStrMap.get(secondStr[i]) + 1);
    } else {
      secondStrMap.set(secondStr[i], 1);
    }
  }

  for (let [key, value] of firstStrMap) {
    if (secondStrMap.get(key) !== value) {
      return 'NO';
    }
  }

  return 'YES';
};

const fs = require('fs');
const [firstStr, secondStr] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

console.log(checkAnagram(firstStr, secondStr));