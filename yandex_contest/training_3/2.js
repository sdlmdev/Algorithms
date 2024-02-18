// 2. Красивая строка

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Красотой строки назовем максимальное число идущих подряд одинаковых букв.
// (красота строки abcaabdddettq равна 3)

// Сделайте данную вам строку как можно более красивой,
// если вы можете сделать не более k операций замены символа.

// Формат ввода
// В первой строке записано одно целое число k (0 ≤ k ≤ 10**9)

// Во второй строке дана непустая строчка S (|S| ≤ 2 ⋅ 10**5).
// Строчка S состоит только из маленьких латинских букв.

// Формат вывода
// Выведите одно число — максимально возможную красоту строчки, которую можно получить.

// Пример 1
// Ввод	         Вывод
// 2             4
// abcaz

// Пример 2
// Ввод	         Вывод
// 2             3
// helto

const findMaxBeauty = (K, strData) => {
  let res = 0;

  for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
    let substitutionСnt = 0;
    let r = 0;

    for (let l = 0; l < strData.length; l++) {
      while (r < strData.length && (strData[r] === letter || substitutionСnt < K)) {
        if (r === strData.length) break;
        if (strData[r] !== letter) substitutionСnt += 1;

        r += 1;
      }

      res = Math.max(res, r - l);

      if (strData[l] !== letter) substitutionСnt -= 1;
    }
  }

  return res;
};

const fs = require('fs');
let [k, str] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
k = +k;

fs.writeFileSync('output.txt', findMaxBeauty(k, str).toString());