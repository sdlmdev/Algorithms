// D. Наполненность котятами

// Ограничение времени 2 секунды
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На прямой в точках a1, a2,…,an (возможно, совпадающих) сидят n котят.
// На той же прямой лежат m отрезков [l1, r1], [l2, r2],…,[lm, rm].
// Нужно для каждого отрезка узнать его наполненность котятами — сколько котят сидит на отрезке.

// Формат ввода
// На первой строке n и m (1 ≤ n, m ≤ 10**5). 
// На второй строке n целых чисел ai (0 ≤ ai ≤ 10**9).
// Следующие m строк содержат пары целых чисел li, ri (0 ≤ li ≤ ri ≤ 10**9).

// Формат вывода
// Выведите m целых чисел. i-е число — наполненность котятами i-го отрезка.

const checkSegments = (pointsArr, segmentsArr) => {
  const events = [];

  for (let point of pointsArr) {
    events.push([point, 0]);
  }

  for (let i = 0; i < segmentsArr.length; i++) {
    events.push([segmentsArr[i][0], -1, i]);
    events.push([segmentsArr[i][1], 1, i]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const res = Array(segmentsArr.length);
  let cnt = 0;

  for (let event of events) {
    if (event[1] === 0) {
      cnt += 1;
    } else if (event[1] === -1) {
      res[event[2]] = cnt;
    } else {
      res[event[2]] = cnt - res[event[2]];
    }
  }

  return res.join(' ');
};

const fs = require('fs');
const [[n, m], points, ...segments] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').filter(val => val != '').map(Number)
);

fs.writeFileSync('output.txt', checkSegments(points,segments));