// C. Корень кубического уравнения

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	cubroot.in
// Вывод cubroot.out

// Дано кубическое уравнение ax3+bx2+cx+d=0 (a≠0).
// Известно, что у этого уравнения есть ровно один корень. Требуется его найти.

// Формат ввода
// Во входном файле через пробел записаны четыре целых числа: .

// Формат вывода
// Выведите единственный корень уравнения с точностью не менее 5 знаков после десятичной точки.

// Пример 1
// Ввод	           Вывод
// 1 -3 3 -1       1.0000036491

// Пример 2
// Ввод	           Вывод
// -1 -6 -12 -7    -1.0000000111

const f = (x, a, b, c, d) => a*x**3 + b*x**2 + c*x + d;

const findRoot = (a, b, c, d) => {
  let r = 1, l = -1;

  while(f(r, a, b, c, d) * f(l, a, b, c, d) >= 0) r *= 2, l *= 2;

  while (r - l > 1e-6) {
    let m = (l + r) / 2;

    f(m, a, b, c, d) * f(r, a, b, c, d) > 0 ? r = m : l = m;
  }

  return l;
};

const fs = require('fs');
const [a, b, c, d] = fs.readFileSync('cubroot.in', 'utf-8').split(' ').map(Number);

fs.writeFileSync('cubroot.out', findRoot(a, b, c, d).toFixed(10));