// C. Кубики

// Ограничение времени 1 секунда
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Аня и Боря любят играть в разноцветные кубики, причем у каждого из них свой набор
// и в каждом наборе все кубики различны по цвету. Однажды дети заинтересовались,
// сколько существуют цветов таких, что кубики каждого цвета присутствуют в обоих наборах.
// Для этого они занумеровали все цвета случайными числами. На этом их энтузиазм иссяк,
// поэтому вам предлагается помочь им в оставшейся части.
// Номер любого цвета — это целое число в пределах от 0 до 10**9.

// Формат ввода
// В первой строке входного файла записаны числа N и M — количество кубиков у Ани и Бори соответственно.
// В следующих N строках заданы номера цветов кубиков Ани. В последних M строках номера цветов кубиков Бори.

// Формат вывода
// Выведите сначала количество, а затем отсортированные по возрастанию номера цветов таких,
// что кубики каждого цвета есть в обоих наборах,
// затем количество и отсортированные по возрастанию номера остальных цветов у Ани,
// потом количество и отсортированные по возрастанию номера остальных цветов у Бори.

// Пример 1
// Ввод	      Вывод
// 4 3        2
// 0          0 1
// 1          2
// 10         9 10
// 9          1
// 1          3
// 3
// 0

// Пример 2
// Ввод	      Вывод
// 2 2        1
// 1          2
// 2          1
// 2          1
// 3          1
//            3

// Пример 3
// Ввод	      Вывод
// 0 0        0
//
//            0
//
//            0

const fs = require('fs');
let [numberOfCubes, ...cubes] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
numberOfCubes = numberOfCubes.split(' ');
const set1 = new Set(cubes.slice(0, numberOfCubes[0]));
const set2 = new Set(cubes.slice(numberOfCubes[0], cubes.length));
const repeatingСolors = [];

for (let i of set1) {
  if (set2.has(i)) {
    repeatingСolors.push(i);
    set1.delete(i);
    set2.delete(i);
  }
}

const res = [
  repeatingСolors.length,
  repeatingСolors.sort((a, b) => a - b).join(' '),
  set1.size,
  [...set1].sort((a, b) => a - b).join(' '),
  set2.size,
  [...set2].sort((a, b) => a - b).join(' ')
].join('\n');

fs.writeFileSync('output.txt', res);