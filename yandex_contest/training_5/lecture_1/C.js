// C. Форматирование файла

// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Петя - начинающий программист. Сегодня он написал код из n строк.

// К сожалению оказалось, что этот код трудно читать.
// Петя решил исправить это, добавив в различные места пробелы.
// А точнее, для i-й строки ему нужно добавить ровно ai пробелов.

// Для добавления пробелов Петя выделяет строку и нажимает на одну из трёх клавиш: Space, Tab, и Backspace.
// При нажатии на Space в строку добавляется один пробел.
// При нажатии на Tab в строку добавляются четыре пробела.
// При нажатии на Backspace в строке удаляется один пробел.

// Ему хочется узнать, какое наименьшее количество клавиш придётся нажать,
// чтобы добавить необходимое количество пробелов в каждую строку. Помогите ему!

// Формат ввода
// Первая строка входных данных содержит одно целое положительное число n(1≤n≤10**5) – количество строк в файле.

// Каждая из следующих n строк содержит одно целое неотрицательное число ai(0≤ai≤10**9) – количество пробелов,
// которые нужно добавить в i-ю строку файла.

// Формат вывода
// Выведите одно число – минимальное количество нажатий,
// чтобы добавить в каждой строке необходимое количество пробелов.

// Пример
// Ввод         Вывод
// 5            8
// 1
// 4
// 12
// 9
// 0

// Примечания
// В примере можно:
// 1 раз нажать на Space в первой строке.
// 1 раз нажать на Tab на второй строке.
// 3 раза нажать на Tab в третьей строке.
// 2 раза нажать на Tab и один раз нажать на Space в четвёртой строке.
// Ничего не нажимать в пятой строке.

// В итоге получается 1+1+3+3=8 нажатий.
// Можно доказать, что нельзя добавить необходимое количество пробелов за 7 нажатий или меньше.

const cntClicks = (input, N) => {
  let res = 0;

  for (let i = 0; i < N; i++) {
    const t = Math.floor(input[i] / 4);
    const s = input[i] % 4;
    const b = s === 3 ? 1 : 0;

    res += t + s - b;
  }

  return res;
}

const fs = require('fs');
const [n, ...strs] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(Number);

fs.writeFileSync('output.txt', cntClicks(strs, n).toString());