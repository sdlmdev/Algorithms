// F. Велодорожки

// Ограничение времени 4 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Мэр одного города очень любит следить за тенденциями и воспроизводить их в своём городе.
// До него дошла новость о популярности велодорожек.
// Теперь он хочет проложить велодорожки в своём городе и сделать это лучше, чем в других городах!
// Поэтому он решил сделать велодорожки даже на главной площади города.

// Главная площадь представляет собой прямоугольник шириной w и высотой h,
// замощённый квадратными плитками со стороной 1.
// Мэр хочет, чтобы было проложено две велодорожки одинаковой ширины:
// одна горизонтальная и одна вертикальная. К сожалению, ремонт на площади проводился достаточно давно
// и на некоторых плитках уже появились трещины. Мэр хочет проложить велодорожки так,
// чтобы после этого на площади остались только целые плитки.
// При строительстве велодорожек плитки на их месте убираются.
// Можно только убирать плитки с площади и нельзя менять местами или добавлять новые.
// Чтобы потратить меньше денег, мэр хочет сделать велодорожки наименьшей возможной ширины,
// при этом ширина дорожек должна быть целым числом. Определите, какой должна быть ширина велодорожек.

// Формат ввода
// В первой строке входных данных содержатся три целых числа w,h,n (1≤w,h≤10**9, 1≤n≤min(w×h,3⋅10**5)) —
// ширина и высота площади и количество потрескавшихся плиток соответственно.

// В следующих n строках содержится по 2 целых числа xi,yi (1≤xi≤w, 1≤yi≤h) —
// координаты потрескавшихся плиток. (xi,yi)≠(xj,yj) при i≠j.

// Формат вывода
// Выведите единственное число c (1≤c≤min(w,h)) — наименьшую возможную ширину велодорожек.

// Пример 1
// Ввод       Вывод
// 5 6 5      3
// 5 4
// 2 6
// 4 1
// 2 3
// 1 4

// Пример 2
// Ввод       Вывод
// 4 3 4      3
// 1 1
// 4 3
// 4 1
// 1 3

// Примечания
// Ниже приведены картинки к примерам из условия. Серым отмечены потрескавшиеся плитки.
// Во втором примере ширина дорожек равна меньшей из сторон прямоугольника.

const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const [w, h, n] = lines[0].split(' ').map(Number);
const cracks = lines.slice(1).map(line => line.split(' ').map(Number));
cracks.sort((a, b) => a[0] - b[0]);
const y = cracks.map(point => point[1]);
const prefMin = [...y];
const prefMax = [...y];
const sufMin = [...y];
const sufMax = [...y];

for (let i = 0, j = y.length - 1; i < y.length; i += 1, j -= 1) {
  if (i > 0) {
    prefMin[i] = prefMin[i - 1] < prefMin[i] ? prefMin[i - 1] : prefMin[i];
    prefMax[i] = prefMax[i - 1] > prefMax[i] ? prefMax[i - 1] : prefMax[i];
  }
  if (j < y.length - 1) {
    sufMin[j] = sufMin[j] < sufMin[j + 1] ? sufMin[j] : sufMin[j + 1];
    sufMax[j] = sufMax[j] > sufMax[j + 1] ? sufMax[j] : sufMax[j + 1];
  }
}

let l = 1;
let r = Math.min(w, h);

while (l < r) {
  let m = Math.floor((l + r) / 2);

  for (let j = 0, i = 0; j < cracks.length; j += 1) {
    const crack = cracks[j];
    for (; crack[0] - cracks[i][0] >= m; i += 1);
    const prevPrefMin = i > 0 ? prefMin[i - 1] : h + 1;
    const nextSufMin = j + 1 < n ? sufMin[j + 1] : h + 1;
    const minY = prevPrefMin < nextSufMin ? prevPrefMin : nextSufMin;
    const prevPrefMax = i > 0 ? prefMax[i - 1] : -1;
    const nextSufMax = j + 1 < n ? sufMax[j + 1] : -1;
    const maxY = prevPrefMax > nextSufMax ? prevPrefMax : nextSufMax;

    if (maxY - minY + 1 <= m) {
      r = m;
      break;
    } else if (j === cracks.length - 1) {
      l = m + 1;
    }
  }
}

console.log(l);

// const getPrefSufSum = (yPoints, N) => {
//   const prefMin = new Array(N);
//   const prefMax = new Array(N);
//   const sufMin = new Array(N);
//   const sufMax = new Array(N);

//   prefMin[0] = yPoints[0];
//   prefMax[0] = yPoints[0];
//   sufMin[N - 1] = yPoints[N - 1];
//   sufMax[N - 1] = yPoints[N - 1];

//   for (let i = 1; i < N; i++) {
//     prefMin[i] = Math.min(prefMin[i - 1], yPoints[i]);
//     prefMax[i] = Math.max(prefMax[i - 1], yPoints[i]);

//     const j = N - i - 1;
//     sufMin[j] = Math.min(sufMin[j + 1], yPoints[j]);
//     sufMax[j] = Math.max(sufMax[j + 1], yPoints[j]);
//   }

//   return [prefMin, prefMax, sufMin, sufMax];
// };


// const calcYVal = (i, j, N, prefMax, prefMin, sufMax, sufMin, H) => {
//   const prevPrefMin = i > 0 ? prefMin[i - 1] : H + 1;
//   const nextSufMin = j + 1 < N ? sufMin[j + 1] : H + 1;
//   const minY = Math.min(prevPrefMin, nextSufMin);
//   const prevPrefMax = i > 0 ? prefMax[i - 1] : -1;
//   const nextSufMax = j + 1 < N ? sufMax[j + 1] : -1;
//   const maxY = Math.max(prevPrefMax, nextSufMax);

//   return [minY, maxY];
// };

// const findMinWidth = (W, H, N, cracksArr, yArr) => {
//   const [prefMin, prefMax, sufMin, sufMax] = getPrefSufSum(yArr, N);
//   let l = 1;
//   let r = Math.min(W, H);

//   while (l < r) {
//     let m = Math.floor((l + r) / 2);
//     let i = 0;
//     let shouldChangeR = false;

//     for (let j = 0; j < cracksArr.length; j++) {
//       const crack = cracksArr[j];
//       for (; crack[0] - cracksArr[i][0] >= m; i++);

//       const [minY, maxY] = calcYVal(i, j, N, prefMax, prefMin, sufMax, sufMin, H);

//       if (Math.abs(maxY - minY) + 1 <= m || minY === -1) {
//         shouldChangeR = true;
//         break;
//       }
//     }

//     if (shouldChangeR) {
//       r = m;
//     } else {
//       l = m + 1;
//     }
//   }

//   return l;
// };

// const fs = require('fs');
// const [[w, h, n], ...cracks] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
//   e => e.split(' ').map(Number)
// );
// cracks.sort((a, b) => a[0] - b[0]);
// const y = cracks.map(point => point[1]);

// console.log(findMinWidth(w, h, n, cracks, y));
