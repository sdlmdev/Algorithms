// 4 задание
// Ограничение времени
// 3 секунды
// Ограничение памяти
// 4 МБ

// В одной из предыдущих задач требовалось вывести перевернутую матрицу, теперь задача усложняется:

// При этом поворот необходимо осуществлять in−place, т. е. без выделения дополнительной памяти. Для этого вместо результирующей матрицы необходимо вывести последовательность операций. За одну операцию можно обменять местами два элемента матрицы.

// Вам дана матрица n×n, а так же указано, надо ли повернуть изображение по часовой R или против часовой L стрелки. Выведите последовательность операций, чтобы исходная матрица повернулась на 90 градусов в указанном направлении.

// Заметьте, что необязательно переставлять элементы в том порядке, в котором происходил бы поворот, главное чтобы в результате матрица соответствовала повороту на 90 градусов. Также необязательно, чтобы количество операций было минимальным, нужно только вписаться в ограничения.

// Формат входных данных 
// Первая строка содержит одно натуральное число (1≤n≤10**3) и указание направления поворота — символ R или L. Следующие n строк содержат описание матрицы, по n целых неотрицательных чисел, не превосходящих 10**18.

// Формат выходных данных
// В первой строке выведите число k — необходимое количество операций, при этом это число не должно превосходить 7n**2. В последующих k строках выведите по две пары чисел — координаты (x1,y1) и (x2,y2) ячеек, между которыми необходимо обменять элементы матрицы.

// Замечание
// Обратите внимание, что нумерация строк и столбцов матрицы ведётся с 0, а не с 1.

// Примеры данных
// Пример 1
// Ввод
// 2 L
// 0 0
// 0 1
// Вывод
// 1
// 1 1 0 1

// Пример 2
// Ввод
// 3 R
// 0 1 0
// 1 0 0
// 4 3 0
// Вывод
// 3
// 1 0 1 2
// 0 0 2 0
// 1 0 2 1

// Пример 3
// Ввод
// 1 L
// 5
// Вывод
// 0

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;

readline.on('line', line => {
  [n, m] = line.trim().split(' ');
  n = Number(n);
  readline.close();
});

// readline.on('close', () => {
//   const operations = [];

//   for (let i = 0; i < n / 2; i += 1) {
//     for (let j = i; j < n - i - 1; j += 1) {
//       if (m === 'R') {
//         operations.push(`${i} ${j} ${n - j - 1} ${i}`);
//         operations.push(`${n - j - 1} ${i} ${n - i - 1} ${n - j - 1}`);
//         operations.push(`${n - i - 1} ${n - j - 1} ${j} ${n - i - 1}`);
//       } else {
//         operations.push(`${i} ${j} ${j} ${n - i - 1}`);
//         operations.push(`${j} ${n - i - 1} ${n - i - 1} ${n - j - 1}`);
//         operations.push(`${n - i - 1} ${n - j - 1} ${n - j - 1} ${i}`);
//       }
//     }
//   }

//   console.log(operations.length);
//   operations.forEach(operation => console.log(operation));
// });

readline.on('close', () => {
  const operations = [];

  for (let i = 0; i < n / 2; i += 1) {
    for (let j = i; j < n - i - 1; j += 1) {
      if (m === 'R') {
        operations.push(`${i} ${j} ${n - j - 1} ${i}`);
        operations.push(`${n - j - 1} ${i} ${n - i - 1} ${n - j - 1}`);
        operations.push(`${n - i - 1} ${n - j - 1} ${j} ${n - i - 1}`);
      } else {
        operations.push(`${i} ${j} ${j} ${n - i - 1}`);
        operations.push(`${j} ${n - i - 1} ${n - i - 1} ${n - j - 1}`);
        operations.push(`${n - i - 1} ${n - j - 1} ${n - j - 1} ${i}`);
      }
    }
  }

  process.stdout.write(`${operations.length}\n`);
  operations.forEach(operation => process.stdout.write(`${operation}\n`));

  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
  }
});


// def rotate_matrix(n, direction):
//     operations = []
//     if direction == 'R':
//         for i in range(n):
//             for j in range(i, n):
//                 operations.append((i, j, j, n-i-1))
//     else:
//         for i in range(n):
//             for j in range(i, n):
//                 operations.append((i, j, n-j-1, i))
//     return operations

// n, direction = input().split()
// n = int(n)
// operations = rotate_matrix(n, direction)
// print(len(operations))
// for operation in operations:
//     print(*operation)

// n, m = map(str, input().strip().split())
// n = int(n)

// operations = []

// for i in range(n // 2):
//     for j in range(i, n - i - 1):
//         if m == 'R':
//             operations.append(f"{i} {j} {n - j - 1} {i}")
//             operations.append(f"{n - j - 1} {i} {n - i - 1} {n - j - 1}")
//             operations.append(f"{n - i - 1} {n - j - 1} {j} {n - i - 1}")
//         else:
//             operations.append(f"{i} {j} {j} {n - i - 1}")
//             operations.append(f"{j} {n - i - 1} {n - i - 1} {n - j - 1}")
//             operations.append(f"{n - i - 1} {n - j - 1} {n - j - 1} {i}")

// print(len(operations))
// for operation in operations:
//     print(operation)