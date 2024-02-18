// C. Изготовление палиндромов

// Ограничение времени 2 секунды
// Ограничение памяти 512Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В строкоремонтную мастерскую принесли строку, состоящую из строчных латинских букв.
// Заказчик хочет сделать из неё палиндром. В мастерской могут за 1 байтландский тугрик
// заменить произвольную букву в строке любой выбранной заказчиком буквой.

// Какую минимальную сумму придётся заплатить заказчику за ремонт строки?

// Напомним, что палиндромом называется строка, которая равна самой себе,
// прочитанной в обратном направлении.

// Формат ввода
// Входные данные содержат непустую строку, состоящую из строчных латинских букв,
// которую принёс заказчик. Длина строки не превосходит 10**4.

// Формат вывода
// Выведите одно целое число — минимальную сумму,
// которую заказчику придётся заплатить за превращение принесённой заказчиком строки в палиндром.

// Пример 1
// Ввод        Вывод
// a           0

// Пример 2
// Ввод        Вывод
// ab          1

// Пример 3
// Ввод        Вывод
// cognitive   4

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  rl.close();
  let res = 0;

  for (let i = 0, j = line.length - 1; i < j; i++, j--) {
    if (line[i] !== line[j]) res += 1;
  }

  console.log(res);
});