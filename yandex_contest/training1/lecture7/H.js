
// H. Охрана

// Ограничение времени	4 секунды
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// На секретной военной базе работает N охранников.
// Сутки поделены на 10000 равных промежутков времени, и известно когда каждый из охранников
// приходит на дежурство и уходит с него. Например, если охранник приходит в 5, а уходит в 8, то значит,
// что он был в 6, 7 и 8-ой промежуток (а в 5-й нет!!!).

// Укажите, верно ли что для данного набора охранников, объект охраняется в любой момент времени
// хотя бы одним охранником и удаление любого из них приводит к появлению промежутка времени,
// когда объект не охраняется.

// Формат ввода
// В первой строке входного файла записано натуральное число K (1 ≤ K ≤ 100) — количество тестов в файле.
// Каждый тест начинается с числа N (1 ≤ N ≤ 10000), за которым следует N пар неотрицательных целых чисел
// A и B — время прихода на дежурство и ухода (0 ≤ A ≤ B ≤ 10000) соответствующего охранника.

// Формат вывода
// Выведите K строк, где в M-ой строке находится слово Accepted,
// если M-ый набор охранников удовлетворяет описанным выше условиям.
// В противном случае выведите Wrong Answer.

// Пример
// Ввод                                Вывод
// 2                                   Wrong Answer
// 3 0 3000 2500 7000 2700 10000       Accepted
// 2 0 3000 2700 10000

const checkTime = (timeData) => {
  const N = timeData[0];
  const events = [];

  for (let i = 1; i < timeData.length; i += 2) {
    events.push([timeData[i], 1, (i - 1) / 2]);
    events.push([timeData[i + 1], -1, (i - 1) / 2]);
  }

  events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  const security = new Set();
  const curSecurity = new Set();
  let prevTime = -1;

  for (let event of events) {
    if (event[0] !== 0 && curSecurity.size === 0) {
      return 'Wrong Answer';
    }

    if (curSecurity.size === 1 && event[0] !== prevTime) {
      security.add([...curSecurity]);
    }

    if (event[1] === 1) {
      curSecurity.add(event[2]);
    } else {
      curSecurity.delete(event[2]);
    }
    
    prevTime = event[0];
  }

  if (events[events.length - 1][0] !== 10000) {
    return 'Wrong Answer';
  }

  return security.size === N ? 'Accepted' : 'Wrong Answer';
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let timeData = [];
let res = [];

rl.on('line', (line) => {
  if (lineCount !== 0) {
    timeData = line.split(' ').map(Number);
    res.push(checkTime(timeData));
  }

  lineCount++;
});

rl.on('close', () => {
  console.log(res.join('\n'));
});