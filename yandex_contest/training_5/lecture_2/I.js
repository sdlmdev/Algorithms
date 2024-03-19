// I. Пираты Баренцева моря

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вася играет в настольную игру «Пираты Баренцева моря», которая посвящена морским битвам.
// Игровое поле представляет собой квадрат из N×N клеток,
// на котором расположено N кораблей (каждый корабль занимает одну клетку).

// Вася решил воспользоваться линейной тактикой, для этого ему необходимо выстроить все N кораблей в одном столбце.
// За один ход можно передвинуть один корабль в одну из четырёх соседних по стороне клеток.
// Номер столбца, в котором будут выстроены корабли, не важен. Определите минимальное количество ходов,
// необходимых для построения кораблей в одном столбце.
// В начале и процессе игры никакие два корабля не могут находиться в одной клетке.

// Формат ввода
// В первой строке входных данных задаётся число N (1≤N≤100).

// В каждой из следующих N строк задаются координаты корабля:
// сначала номер строки, затем номер столбца (нумерация начинается с единицы).

// Формат вывода
// Выведите одно число — минимальное количество ходов, необходимое для построения.

// Пример
// Ввод      Вывод
// 3         3
// 1 2
// 3 3
// 1 1

// Примечания
// В примере необходимо выстроить корабли в столбце номер 2.
// Для этого необходимо переставить корабль из клетки 3 3 в клетку 3 2 за один ход,
// а корабль из клетки 1 1 в клетку 2 2 за два хода.
// Существуют и другие варианты перестановки кораблей, однако ни в одном из них нет меньше трёх ходов. 

const cntDistance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const cntSum = (J, N, shipsArr) => {
  const ships = shipsArr.slice();
  let sum = 0;

  for (let i = 1; i <= N; i += 1) {
    const ship = ships.pop();
    sum += cntDistance(i, J, ...ship);
  }

  return sum;
};

const cntMinSum = (N, shipsArr) => {
  let min = Infinity;

  for (let j = 1; j <= N; j += 1) {
    const current = cntSum(j, N, shipsArr);

    if (current < min) min = current;
  }

  return min;
};

const fs = require('fs');
let [[n], ...ships] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
ships = ships.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

console.log(cntMinSum(n, ships));