// D. Правильная, круглая, скобочная

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// Если из правильного арифметического выражения вычеркнуть всё, кроме круглых скобок,
// то получится правильная скобочная последовательность.
// Проверьте, является ли введённая строка правильной скобочной последовательностью.

// Формат ввода
// Вводится непустая строка, состоящая из открывающих и закрывающих круглых скобок.
// Длина строки не превосходит 100000

// Формат вывода
// Выведите YES если введённая строка является правильной скобочной последовательностью и NO иначе

// Пример 1
// Ввод	          Вывод
// (())()         YES

// Пример 2
// Ввод	          Вывод
// (()))()        NO

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
}).on('line', (line) => {
  readline.close();
  let cnt = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '(') cnt += 1;
    else cnt -= 1;
    if (cnt < 0) return console.log('NO'); ;
  }
  
  console.log(cnt === 0 ? 'YES' : 'NO');
});