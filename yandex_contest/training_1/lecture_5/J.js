// J. Треугольники

//                      Все языки	  Python 3.9.1
// Ограничение времени	2 секунды	  4 секунды
// Ограничение памяти	256Mb	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Петя достаточно давно занимается в математическом кружке,
// поэтому он уже успел не только правила выполнения простейших операций,
// но и такое достаточно сложное понятие как симметрия.
// Для того, чтобы получше изучить симметрию Петя решил начать с наиболее простых геометрических фигур – треугольников.
// Он скоро понял, что осевой симметрией обладают так называемые равнобедренные треугольники.
// Поэтому теперь Петя ищет везде такие треугольники.

// Напомним, что треугольник называется равнобедренным, если его площадь положительна,
// и у него есть хотя бы две равные стороны.

// Недавно Петя, зайдя в класс, увидел, что на доске нарисовано n точек.
// Разумеется, он сразу задумался, сколько существует троек из этих точек,
// которые являются вершинами равнобедренных треугольников.

// Требуется написать программу, решающую указанную задачу.

// Формат ввода
// Входной файл содержит целое число n (3 ≤ n ≤ 1500).
// Каждая из последующих строк содержит по два целых числа – xi и yi – координаты i-ой точки.
// Координаты точек не превосходят 10**9 по абсолютной величине. Среди заданных точек нет совпадающих.

// Формат вывода
// В выходной файл выведите ответ на задачу.

// Пример 1
// Ввод	       Вывод
// 3           1
// 0 0
// 2 2
// -2 2

// Пример 2
// Ввод	       Вывод
// 4           4
// 0 0
// 1 1
// 1 0
// 0 1

const countTriangles = (N, pointsArr) => {
  let res = 0;

  for (let i = 0; i < N; i++) {
    const dict = new Map();

    for (let j = 0; j < N; j++) {
      if (i !== j) {
        const x = pointsArr[i][0] - pointsArr[j][0];
        const y = pointsArr[i][1] - pointsArr[j][1];
        const length = x ** 2 + y ** 2;

        if (dict.has(length)) {
          dict.get(length).push([x, y]);
        } else {
          dict.set(length, [[x, y]]);
        }
      }
    }

    dict.forEach((value) => {
      const len = value.length;
      if (len > 1) {
        for (let k = 0; k < len; k++) {
          for (let l = k + 1; l < len; l++) {
            if (value[k][0] * value[l][1] !== value[k][1] * value[l][0]) {
              res++;
            }
          }
        }
      }
    });
  }

  return res.toString();
};

const fs = require('fs');
const [n, ...points] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  i => i.split(' ').map(Number)
);

fs.writeFileSync('output.txt', countTriangles(n, points));