// D. Космическое поселение

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Для освоения Марса требуется построить исследовательскую базу.
// База должна состоять из n одинаковых модулей, каждый из которых представляет собой прямоугольник.

// Каждый модуль представляет собой жилой отсек, который имеет форму прямоугольника размером a на b метров.
// Для повышения надежности модулей инженеры могут добавить вокруг каждого модуля слой дополнительной защиты.
// Толщина этого слоя должна составлять целое число метров,
// и все модули должны иметь одинаковую толщину дополнительной защиты.
// Модуль с защитой, толщина которой равна d метрам, будет иметь форму прямоугольника размером (a+2d)(b+2d) метров.

// Все модули должны быть расположены на заранее подготовленном прямоугольном поле размером wh метров.
// При этом они должны быть организованы в виде регулярной сетки: их стороны должны быть параллельны сторонам поля,
// и модули должны быть ориентированы одинаково.

// Требуется написать программу, которая по заданным количеству и размеру модулей,
// а также размеру поля для их размещения, определяет максимальную толщину слоя дополнительной защиты,
// который можно добавить к каждому модулю.

// Формат ввода
// Входной файл содержит пять разделенных пробелами целых чисел: n, a, b, w и h (1 ≤ n, a, b, w, h ≤ 1018).
// Гарантируется, что без дополнительной защиты все модули можно разместить в поселении описанным образом.

// Формат вывода
// Выходной файл должен содержать одно целое число: максимальную возможную толщину дополнительной защиты.
// Если дополнительную защиту установить не удастся, требуется вывести число 0.

// Пример 1
// Ввод	        Вывод
// 1 1 1 1 1    0

// Пример 2
// Ввод	        Вывод
// 1 1 1 3 3    1

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const [n, a, b, w, h] = line.split(' ').map(BigInt);

  rl.close();

  const floorDiv = (a, b) => (a - a % b) / b;

  const checkSize = (size, params) => {
    const [n, a, b, w, h] = params;
  
    return (floorDiv(w, a + 2n * size) * floorDiv(h, b + 2n * size) >= n)
      || (floorDiv(w, b + 2n * size) * floorDiv(h, a + 2n * size) >= n);
  };

  const binarySearch = (l, r, check, params) => {
    while (l < r) {
      const m = floorDiv(l + r + 1n, 2n);

      if (check(m, params)) {
        l = m;
      } else {
        r = m - 1n;
      }
    }

    return l;
  };

  const max = w > h ? w : h;

  console.log(binarySearch(0n, max, checkSize, [n, a, b, w, h]).toString());
});
