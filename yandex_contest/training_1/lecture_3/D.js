// D. Количество слов в тексте

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Во входном файле (вы можете читать данные из sys.stdin, подключив библиотеку sys) записан текст.
// Словом считается последовательность непробельных символов идущих подряд,
// слова разделены одним или большим числом пробелов или символами конца строки. 
// Определите, сколько различных слов содержится в этом тексте.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод	                                                 Вывод
// She sells sea shells on the sea shore;                19
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').trim();
const res = input === '' ? 0 : new Set(input.split(/[ \n]+/)).size;

fs.writeFileSync('output.txt', res.toString());