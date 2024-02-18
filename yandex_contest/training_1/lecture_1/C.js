// C. Телефонные номера

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Телефонные номера в адресной книге мобильного телефона имеют один из следующих форматов: +7<код><номер>,
// 8<код><номер>, <номер>, где <номер> — это семь цифр, а <код> — это три цифры или три цифры в круглых скобках.
// Если код не указан, то считается, что он равен 495. Кроме того, в записи телефонного номера может стоять знак
// “-” между любыми двумя цифрами (см. пример).
// На данный момент в адресной книге телефона Васи записано всего три телефонных номера,
// и он хочет записать туда еще один. Но он не может понять, не записан ли уже такой номер в телефонной книге.
// Помогите ему! Два телефонных номера совпадают, если у них равны коды и равны номера.
// Например, +7(916)0123456 и 89160123456 — это один и тот же номер.

// Формат ввода
// В первой строке входных данных записан номер телефона, который Вася хочет добавить в адресную книгу своего телефона.
// В следующих трех строках записаны три номера телефонов, которые уже находятся в адресной книге телефона Васи.
// Гарантируется, что каждая из записей соответствует одному из трех приведенных в условии форматов.

// Формат вывода
// Для каждого телефонного номера в адресной книге выведите YES (заглавными буквами),
// если он совпадает с тем телефонным номером,
// который Вася хочет добавить в адресную книгу или NO (заглавными буквами) в противном случае.

// Пример 1
// Ввод	                 Вывод
// 8(495)430-23-97       YES
// +7-4-9-5-43-023-97    YES
// 4-3-0-2-3-9-7         NO
// 8-495-430

// Пример 2
// Ввод	                 Вывод
// 86406361642           NO
// 83341994118           YES
// 86406361642           NO
// 83341994118

// Пример 3
// Ввод	                 Вывод
// +78047952807          YES
// +78047952807          NO
// +76147514928          YES
// 88047952807

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
})

const clearNumber = (number) => {
  number = number.replace(/\D/g, '');

  if (number.length == 7) {
    number = '495' + number;
  }

  if (number.length == 11) {
    number = number.slice(1);
  }
  return number
}

let result = '';
let lines = [];

rl.on('line', line => {
  lines.push(line);
}).on('close', () => {
  const [newNumber, ...oldNumbers] = lines.map((el) => clearNumber(el));

  for (let i = 0; i < oldNumbers.length; i++) {
    if (newNumber === oldNumbers[i]) {
      result += 'YES\n';
    } else {
      result += 'NO\n';
    }
  }

  process.stdout.write(result)
});