// 13. Постфиксная запись

// Ограничение времени 1 секунда
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В постфиксной записи (или обратной польской записи) операция записывается после двух операндов.
// Например, сумма двух чисел A и B записывается как A B +. Запись B C + D * обозначает привычное нам
// (B + C) * D, а запись A B C + D * + означает A + (B + C) * D.
// Достоинство постфиксной записи в том,
// что она не требует скобок и дополнительных соглашений о приоритете операторов для своего чтения.

// Формат ввода
// В единственной строке записано выражение в постфиксной записи, содержащее цифры и операции +, -, *.
// Цифры и операции разделяются пробелами. В конце строки может быть произвольное количество пробелов.

// Формат вывода
// Необходимо вывести значение записанного выражения.

// Пример
// Ввод	              Вывод
// 8 9 + 1 7 - *      -102

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = [];

readline.on('line', line => {
  readline.close();
  const tokens = line.split(' ');

  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        stack.push(-stack.pop() + stack.pop());
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      default:
        stack.push(+tokens[i]);
        break;
    }
  }

  console.log(stack.pop());
});