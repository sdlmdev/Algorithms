// I. Узник замка Иф

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D × E. Замок Иф сложен из кирпичей, размером A × B × C.
// Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие, если стороны кирпича должны быть параллельны сторонам отверстия.

// Формат ввода

// Программа получает на вход числа A, B, C, D, E.

// Формат вывода

// Программа должна вывести слово YES или NO.

// Пример 1

// Ввод	  Вывод
// 1      YES
// 1
// 1
// 1
// 1

// Пример 2

// Ввод	  Вывод
// 2      NO
// 2
// 2
// 1
// 1

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const [A, B, C, D, E] = input.split(/\r?\n/).map(Number);

if (((A <= D) && (B <= E)) || ((A <= E) && (B <= D))) {
  fs.writeFileSync('output.txt', 'YES');
} else if (((C <= D) && (B <= E)) || ((C <= E) && (B <= D))) {
  fs.writeFileSync('output.txt', 'YES');
} else if (((A <= D) && (C <= E)) || ((A <= E) && (C <= D))) {
  fs.writeFileSync('output.txt', 'YES');
} else {
  fs.writeFileSync('output.txt', 'NO');
}

// ------------------------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const data = [];

rl.on('line', line => {
  data.push(+line);

  if (data.length === 5) {
    let [a, b, c, d, e] = data;

    const sort = (firstElem, secondElem) => {
      if (firstElem < secondElem) {
        return [firstElem, secondElem];
      }

      return [secondElem, firstElem];
    };

    [a, b] = sort(a, b);
    [b, c] = sort(b, c);
    [a, b] = sort(a, b);
    [d, e] = sort(d, e);

    if (a <= d && b <= e) {
      rl.close();

      console.log('YES');
    } else {
      rl.close();

      console.log('NO');
    }
  }
});