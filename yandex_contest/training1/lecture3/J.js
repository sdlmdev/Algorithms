// J. Пробежки по Манхэттену

// Ограничение времени	2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Дороги Нью-Манхэттена устроены следующим образом.
// С юга на север через каждые сто метров проходит авеню,
// с запада на восток через каждые сто метров проходит улица.
// Авеню и улицы нумеруются целыми числами.
// Меньшие номера соответствуют западным авеню и южным улицам.
// Таким образом, можно построить прямоугольную систему координат так,
// чтобы точка (x, y) лежала на пересечении x-ой авеню и y-ой улицы.
// Легко заметить, что для того, чтобы в Нью-Манхэттене дойти от точки
// (x1, y1) до точки (x2, y2) нужно пройти |x2 − x1| + |y2 − y1| кварталов.
// Эта величина называется манхэттенским расстоянием между точками (x1, y1) и (x2, y2).

// Миша живет в Нью-Манхэттене и каждое утро делает пробежку по городу.
// Он выбегает из своего дома, который находится в точке (0, 0)
// и бежит по случайному маршруту.
// Каждую минуту Миша либо остается на том же перекрестке, что и минуту назад,
// или перемещается на один квартал в любом направлении.
// Чтобы не заблудиться Миша берет с собой навигатор,
// который каждые t минут говорит Мише, в какой точке он находится.
// К сожалению, навигатор показывает не точное положение Миши,
// он может показать любую из точек,
// манхэттенское расстояние от которых до Миши не превышает d.

// Через t × n минут от начала пробежки, получив n-е сообщение от навигатора,
// Миша решил, что пора бежать домой. Для этого он хочет понять,
// в каких точках он может находиться. Помогите Мише сделать это.

// Формат ввода
// Первая строка входного файла содержит числа
// t, d и n (1 ≤ t ≤ 100, 1 ≤ d ≤ 100, 1 ≤ n ≤ 100).

// Далее n строк описывают данные, полученные от навигатора.
// Строка номер i содержит числа xi и yi — данные,
// полученные от навигатора через ti минут от начала пробежки.

// Формат вывода
// В первой строке выходного файла выведите число m — число точек,
// в которых может находиться Миша.
// Далее выведите m пар чисел — координаты точек.
// Точки можно вывести в произвольном порядке.

// Гарантируется, что навигатор исправен и что существует по крайней мере одна точка,
// в которой может находиться Миша.

// Пример 1
// Ввод	        Вывод
// 2 1 5        2
// 0 1          1 5
// -2 1         2 4
// -2 3
// 0 3
// 2 5

// Пример 2
// Ввод	        Вывод
// 1 1 1        5
// 0 0          -1 0
//              0 -1
//              0 0
//              0 1
//              1 0

// Пример 3
// Ввод	        Вывод
// 1 10 1       5
// 0 0          -1 0
//              0 -1
//              0 0
//              0 1
//              1 0

const fs = require('fs');
let [data, ...coordinates] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const [t, d, n] = data.split(' ').map(Number);
let position = [0, 0, 0, 0];

const expandTerritoryWithErr = (coord, err) => {
  const [minPlus, maxPlus, minMinus, maxMinus] = coord;

  return [minPlus - err, maxPlus + err, minMinus - err, maxMinus + err];
};

const findIntersections = (zone1, zone2) => {
  return [
    Math.max(zone1[0], zone2[0]), Math.min(zone1[1], zone2[1]),
    Math.max(zone1[2], zone2[2]), Math.min(zone1[3], zone2[3])
  ];
};

for (let i of coordinates) {
  const [x, y] = i.split(' ').map(Number);
  const currentPosition = expandTerritoryWithErr(
    [x + y, x + y, x - y, x - y], d
  );

  position = expandTerritoryWithErr(position, t);
  position = findIntersections(position, currentPosition);
}

const res = [];

for (let xPlusY = position[0]; xPlusY <= position[1]; xPlusY++) {
  for (let xMinusY = position[2]; xMinusY <= position[3]; xMinusY++) {
    if ((xPlusY + xMinusY) % 2 === 0) {
      const x = Math.floor((xPlusY + xMinusY) / 2);
      const y = xPlusY - x;

      res.push(x + ' ' + y);
    }
  }
}

fs.writeFileSync('output.txt', `${res.length}\n${res.join('\n')}`);