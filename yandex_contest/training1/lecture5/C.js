// C. Туризм

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Александр недавно увлекся горным туризмом.
// Ему уже надоело покорять отдельные горные пики, и он собирается покорить самую настоящую горную цепь!

// Напомним, что Александр живет в плоском мире.
// Горная цепь состоит из отрезков, соединяющих точки на плоскости,
// каждая из которых находится строго правее предыдущей (x-координата следующей точки больше,
// чем у предыдущей).
// Трассой на горной цепи называется её часть между двумя фиксированными концами отрезков.

// Участок, на котором при движении по трассе координата y (высота) всегда возрастает, называется подъемом,
// величиной подъема называется разность высот между начальной и конечной точками участка.

// Туристическая компания предлагает на выбор несколько трасс на одной горной цепи.
// Александр из-за финансовых трудностей может выбрать для поездки только одну из этих трасс.
// Вы решили помочь ему с выбором. Александру важно для каждой трассы определить суммарную высоту подъемов на ней.
// Обратите внимание, что трасса может идти как слева-направо, так и справа-налево.

// Формат ввода
// В первой строке входного файла содержится единственное число N — количество точек ломаной,
// задающей горную цепь (1 ≤ N ≤ 30 000). Далее в N строках содержатся описания точек,
// каждое из которых состоит из двух целых чисел, xi и yi (1 ≤ xi, yi ≤ 30 000).

// В следующей строке находится число M — количество трасс (1 ≤ M ≤ 30 000).

// Далее в M строках содержатся описания трасс.
// Каждое описание представляет собой два целых числа, si и fi, они обозначают номера вершин начала и конца трассы,
// соответственно (1 ≤ si ≤ N, 1 ≤ fi ≤ N). Начало и конец трассы могут совпадать.

// Гарантируется, что во входном файле задана именно горная цепь.

// Формат вывода
// Для каждой трассы выведите одно число — суммарную высоту подъемов на данной трассе.

// Пример 1
// Ввод	      Вывод
// 7          4
// 2 1
// 4 5
// 7 4
// 8 2
// 9 6
// 11 3
// 15 3
// 1
// 2 6

// Пример 2
// Ввод	      Вывод
// 6          0
// 1 1        5
// 3 2        4
// 5 6
// 7 2
// 10 4
// 11 1
// 3
// 5 6
// 1 4
// 4 2

const getPrefixSum = (arr, n, direction) => {
  const prefixSum = Array(n).fill(0);
  let y = direction === 1 ? arr[0][1] : arr[n - 1][1];
  const start = direction === 1 ? 1 : n - 2;
  const end = direction === 1 ? n : -1;
  const step = direction;

  for (let i = start; i !== end; i += step) {
    let prevY = y;
    y = arr[i][1];

    if (y > prevY) {
      prefixSum[i] = prefixSum[i - step] + y - prevY;
    } else {
      prefixSum[i] = prefixSum[i - step];
    }
  }

  return prefixSum;
};

const getSum = (toRightArr, toLeftArr, trailsArr) => {
  const res = [];

  for (const [s, f] of trailsArr) {
    const start = s - 1;
    const end = f - 1;
  
    if (start <= end) {
      res.push(toRightArr[end] - toRightArr[start]);
    } else {
      res.push(toLeftArr[end] - toLeftArr[start]);
    }
  }

  return res.join('\n');
}

const fs = require('fs');
let [mountainСhainLength, ...points] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
mountainСhainLength = Number(mountainСhainLength);
const mountainСhain = points.slice(0, mountainСhainLength).map(point => point.split(' ').map(Number));
const [trailsLength, ...trails] = points.slice(mountainСhainLength).map(point => point.split(' ').map(Number));

const toRight = getPrefixSum(mountainСhain, mountainСhainLength, 1);
const toLeft = getPrefixSum(mountainСhain, mountainСhainLength, -1);

fs.writeFileSync('output.txt', getSum(toRight, toLeft, trails));