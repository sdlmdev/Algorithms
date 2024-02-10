// 12. Правильная скобочная последовательность

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Рассмотрим последовательность, состоящую из круглых, квадратных и фигурных скобок.
// Программа должна определить, является ли данная скобочная последовательность правильной.
// Пустая последовательность является правильной.
// Если A — правильная, то последовательности (A), [A], {A} — правильные.
// Если A и B — правильные последовательности, то последовательность AB — правильная.

// Формат ввода
// В единственной строке записана скобочная последовательность, содержащая не более 100000 скобок.

// Формат вывода
// Если данная последовательность правильная, то программа должна вывести строку "yes", иначе строку "no".

// Пример 1
// Ввод	      Вывод
// ()[]       yes

// Пример 2
// Ввод	      Вывод
// ([)]       no

// Пример 3
// Ввод	      Вывод
// (          no

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = [];
const brackets = {
  '(': ')',
  '[': ']',
  '{': '}',
};

readline.on('line', (line) => {
  readline.close();

  for (let i = 0; i < line.length; i++) {
    switch (line[i]) {
      case '(':
      case '[':
      case '{':
        stack.push(line[i]);
        break;
      case ')':
      case ']':
      case '}':
        if (stack.length === 0 || brackets[stack.pop()] !== line[i]) {
          console.log('no');
          return;
        }
        break;
    }
  }

  console.log(stack.length === 0 ? 'yes' : 'no');
});

// readline.on('line', (line) => {
//   readline.close();

//   for (let i = 0; i < line.length; i++) {
//     if (line[i] === '(' || line[i] === '[' || line[i] === '{') {
//       stack.push(line[i]);
//     } else {
//       if (stack.length === 0) {
//         console.log('no');
//         return;
//       }
//       const last = stack[stack.length - 1];

//       if (
//         (line[i] === ')' && last === '(') ||
//         (line[i] === ']' && last === '[') ||
//         (line[i] === '}' && last === '{')
//       ) {
//         stack.pop();
//       } else {
//         console.log('no');
//         return;
//       }
//     }
//   }

//   if (stack.length === 0) {
//     console.log('yes');
//   } else {
//     console.log('no');
//   }
// });