// E. Два из трех

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Вам даны три списка чисел. Найдите все числа, которые встречаются хотя бы в двух из трёх списков.

// Формат ввода
// Во входных данных описывается три списка чисел.
// Первая строка каждого описания списка состоит из длины списка n (1 ≤ n ≤ 1000).
// Вторая строка описания содержит список натуральных чисел, записанных через пробел.
// Числа не превосходят 10**9.

// Формат вывода
// Выведите все числа, которые содержатся хотя бы в двух списках из трёх, в порядке возрастания.
// Обратите внимание, что каждое число необходимо выводить только один раз.

// Пример 1
// Ввод       Вывод
// 2          1 3
// 3 1
// 2
// 1 3
// 2
// 1 2

// Пример 2
// Ввод       Вывод
// 3
// 1 2 2
// 3
// 3 4 3
// 1
// 5

const fs = require('fs');
const [[aLen], a, [bLen], b, [cLen], c] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);

const setA = new Set(a);
const setB = new Set(b);
const setC = new Set(c);

const intersectionAB = new Set([...setA].filter(x => setB.has(x)));
const intersectionBC = new Set([...setB].filter(x => setC.has(x)));
const intersectionAC = new Set([...setA].filter(x => setC.has(x)));

const res = new Set([...intersectionAB, ...intersectionBC, ...intersectionAC]);

console.log(Array.from(res).sort((a, b) => a - b).join(' '));
