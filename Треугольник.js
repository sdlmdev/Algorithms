// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO.

// Треугольник — это три точки, не лежащие на одной прямой.

// Формат ввода
// Вводятся три натуральных числа.

// Формат вывода
// Выведите ответ на задачу.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const input = [];

rl.on('line', line => {
  input.push(Number(line));

  if (input.length === 3) {
    let result;
    const [a, b, c] = input;

    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      result = 'YES'
    } else {
      result = 'NO'
    }

    console.log(result);
    
    rl.close();
  }
});
