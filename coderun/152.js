// 152. Калькулятор
// dynamic programming 1D

// Имеется калькулятор, который выполняет следующие операции:

// умножить число X на 2;
// умножить число  X на 3;
// прибавить к числу X единицу.

// Определите, какое наименьшее количество операций требуется,
// чтобы получить из числа~1 число~N.

// Формат ввода
// Во входном файле написано натуральное число N, не превосходящее 10**6

// Формат вывода
// В первой строке выходного файла выведите минимальное количество операций.
// Во второй строке выведите числа, последовательно получающиеся при выполнении операций.
// Первое из них должно быть равно 1, а последнее N. Если решений несколько,
// выведите любое.

// Пример 1

// Ввод    Вывод
// 1       0
//         1
// 
// 
// Пример 2

// Ввод    Вывод
// 5       3
//         1 3 4 5

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const input = +line;
  const nums = new Array(input + 1).fill(0);
  const steps = new Array(input + 1).fill(10 ** 6);
  steps[1] = 0;

  rl.close();

  for (let i = 2; i <= input; i++) {
    if (i % 3 === 0) {
      let cur = steps[i / 3] + 1;

      if (cur < steps[i]) steps[i] = cur, nums[i] = i / 3;
    }

    if (i % 2 === 0) {
      let cur = steps[i / 2] + 1;

      if (cur < steps[i]) steps[i] = cur, nums[i] = i / 2;
    }

    let cur = steps[i - 1] + 1;

    if (cur < steps[i]) steps[i] = cur, nums[i] = i - 1;
  }

  let res = [];
  let currentNum = input;

  while (currentNum !== 0) {
    res.push(currentNum);
    currentNum = nums[currentNum];
  }

  console.log(steps[input] + '\n' + res.reverse().join(' '));
});
