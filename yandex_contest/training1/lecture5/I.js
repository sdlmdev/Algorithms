// I. Робот

// Ограничение времени	4 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Студенты одного из вузов спроектировали робота для частичной автоматизации процесса сборки авиационного двигателя.

// В процессе сборки двигателя могут встречаться операции 26 типов,
// которые обозначаются строчными буквами латинского алфавита. Процесс сборки состоит из N операций.

// Предполагается использовать робота один раз для выполнения части подряд идущих операций из процесса сборки.

// Память робота состоит из K ячеек, каждая из которых содержит одну операцию.
// Операции выполняются последовательно, начиная с первой, в том порядке, в котором они расположены в памяти.
// Выполнив последнюю из них, робот продолжает работу с первой.
// Робота можно остановить после любой операции.
// Использование робота экономически целесообразно, если он выполнит хотя бы K + 1 операцию.

// Требуется написать программу, которая по заданному процессу сборки определит
// количество экономически целесообразных способов использования робота.

// Формат ввода
// В первой строке входного файла записано число K > 0 — количество операций, которые можно записать в память робота.

// Вторая строка состоит из N > K строчных латинских букв,
// обозначающих операции — процесс сборки двигателя.
// Операции одного и того же типа обозначаются одной и той же буквой. N ≤ 200000

// Формат вывода
// Выходной файл должен содержать единственное целое число
// количество экономически целесообразных способов использования робота.

// Пример 1
// Ввод	       Вывод
// 2           5
// zabacabab

// Пример 2
// Ввод	       Вывод
// 2           0
// abc

const fs = require('fs');
let [k, operations] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
k = Number(k);

const countOperations = (K, operationsArr) => {
  let res = 0;
  let length = 0;

  for (let i = 0; i < operationsArr.length; i++) {
    if (operationsArr[i] === operationsArr[i - K]) {
      length += 1;
      res += length;
    } else {
      length = 0;
    }
  }

  return res.toString();
};

fs.writeFileSync('output.txt', countOperations(k, operations));