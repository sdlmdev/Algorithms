// 33. Списывание

//                      Все языки    Python 3.6
// Ограничение времени	2 секунды	   5 секунд
// Ограничение памяти 	256Mb	       256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Во время контрольной работы профессор Флойд заметил, что некоторые студенты обмениваются записками.
// Сначала он хотел поставить им всем двойки, но в тот день профессор был добрым,
// а потому решил разделить студентов на две группы: списывающих и дающих списывать,
// и поставить двойки только первым.

// У профессора записаны все пары студентов, обменявшихся записками. Требуется определить,
// сможет ли он разделить студентов на две группы так,
// чтобы любой обмен записками осуществлялся от студента одной группы студенту другой группы.

// Формат ввода
// В первой строке находятся два числа N и M — количество студентов и количество пар студентов,
// обменивающихся записками (1 ≤ N ≤ 10**2, 0 ≤ M ≤ N(N−1)/2).

// Далее в M строках расположены описания пар студентов: два числа, соответствующие номерам студентов,
// обменивающихся записками (нумерация студентов идёт с 1).
// Каждая пара студентов перечислена не более одного раза.

// Формат вывода
// Необходимо вывести ответ на задачу профессора Флойда.
// Если возможно разделить студентов на две группы - выведите YES; иначе выведите NO.

// Пример 1
// Ввод	        Вывод
// 3 2          YES
// 1 2
// 2 3

// Пример 2
// Ввод	        Вывод
// 3 3          NO
// 1 2
// 2 3
// 1 3

const fillGraph = (graphArr, verticesArr) => {
  for (const [v1, v2] of verticesArr) {
    graphArr[v1].push(v2);
    graphArr[v2].push(v1);
  }
};

const dfs = (graphArr, colorsArr, vertex, color = 1) => {
  colorsArr[vertex] = color;

  for (const neighbor of graphArr[vertex]) {
    if (colorsArr[neighbor] === color) return false;
    if (
      colorsArr[neighbor] === 0
      && !dfs(graphArr, colorsArr, neighbor, 3 - color)
    ) return false;
  }

  return true;
};

const getRes = (graphArr, colorsArr) => {
  for (let i = 1; i < graphArr.length; i++) {
    if (colorsArr[i] === 0 && !dfs(graphArr, colorsArr, i)) return 'NO';
  }

  return 'YES';
};

const fs = require('fs');
const [[n, m], ...vertices] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const graph = Array.from({ length: n + 1 }, () => []);
const colors = new Array(n + 1).fill(0);

fillGraph(graph, vertices);
console.log(getRes(graph, colors));
