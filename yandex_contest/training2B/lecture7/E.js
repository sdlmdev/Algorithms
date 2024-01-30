// E. Полярные прямоугольники

// Ограничение времени	5 секунд
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вася недавно изучил полярную систему координат.
// А именно, он изучил понятие полярного прямоугольника.
// Пусть задана стандартная декартова плоскость.
// Если на ней нарисовать две окружности с центром в начале координат, то область,
// находящаяся между ними, называется кольцом (на рисунке обозначена синим).
// Если на ней нарисовать два луча, то область, заметаемая первым лучом при движении ко второму,
// называется углом (т.е. область между этими двумя лучами, на рисунке обозначена зеленым).
// Полярным прямоугольником называется пересечение некоторого угла с некоторым кольцом.

// Задано несколько полярных прямоугольников. Найдите площадь их пересечения.
// Помните, что пересечение полярных прямоугольников может состоять из нескольких частей!

// Формат ввода
// В первой строке вводится целое число N — количество прямоугольников (1 ≤ N ≤ 100 000).
// Далее в N строках содержится описание прямоугольников.
// Каждый прямоугольник описывается четверкой действительных чисел r1, r2, φ1, φ2, где r1, r2
// обозначают радиусы окружностей, образующих кольцо (r1 < r2), а φ1, φ2 обозначают углы,
// образованные первым и вторым лучами с осью абсцисс, заданные в радианах.
// При этом заметается область от первого луча до второго в направлении против часовой стрелки
// (т.е. возрастания углов), даже в случае, когда φ1 > φ2.
// Все числа заданы максимум с шестью знаками после десятичной точки.
// Углы лежат в полуинтервале [0, 2π), а радиусы не превосходят 106.
// Гарантируется, что φ1 ≠ φ2.

// Формат вывода
// Выведите единственное число — площадь искомого пересечения.
// Ответ будет считаться правильным,
// если его абсолютная или относительная погрешность не будет превышать 10-6.

// Пример 1
// Ввод	            Вывод
// 2                3.7500000000
// 1 3 0 3
// 2 4 1.5 4.5

// Пример 2
// Ввод	            Вывод
// 2                3.0000000000
// 1 2 0 3
// 1 2 2 1

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quickSortInPlace = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return;
  }

  let pivotIndex = partition(arr, start, end);

  quickSortInPlace(arr, start, pivotIndex - 1);
  quickSortInPlace(arr, pivotIndex + 1, end);
};

const partition = (arr, start, end) => {
  let pivotValue = arr[end][0];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i][0] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return pivotIndex;
};

let events = [];
let rMin = 0;
let rMax = 10 ** 6;
let n = 0;
let lineCnt = 0;

rl.on('line', (line) => {
  if (n === 0) {
    n = Number(line);
  } else {
    lineCnt += 1;
    const [r1, r2, phi1, phi2] = line.split(' ').map(Number);
    rMin = Math.max(rMin, r1);
    rMax = Math.min(rMax, r2);

    events.push([phi1, -lineCnt]);
    events.push([phi2, lineCnt]);
  }
});

rl.on('close', () => {
  quickSortInPlace(events);

  let cnt = 0;
  const set = new Set();
  let res = 0;

  for (let event of events) {
    if (event[1] < 0) {
      cnt += 1;
      set.add(-event[1]);
    } else if (set.has(event[1])) {
      cnt -= 1;
      set.delete(event[1]);
    }
  }

  const radius = rMax ** 2 - rMin ** 2;

  for (let i = 0; i < events.length; i++) {
    if (events[i][1] < 0) {
      cnt += 1;
    } else {
      cnt -= 1;
    }

    if (cnt == n) {
      if (i < events.length - 1) {
        res += (events[i + 1][0] - events[i][0]) * radius / 2;
      } else {
        res += (events[0][0] - events[events.length - 1][0] + 2 * Math.PI) * radius / 2;
      }
    }
  }

  console.log(res);
});
