// E. OpenCalculator

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt

// В новой программе OpenCalculator появилась новая возможность – можно настроить, какие кнопки отображаются, а какие – нет. Если кнопка не отображается на экране, то ввести соответствующую цифру с клавиатуры или копированием из другой программы нельзя. Петя настроил калькулятор так, что он отображает только кнопки с цифрами x, y, z. Напишите программу, определяющую, сможет ли Петя ввести число N, а если нет, то какое минимальное количество кнопок надо дополнительно отобразить на экране для его ввода.

// Формат ввода
// Сначала вводятся три различных числа из диапазона от 0 до 9: x, y и z (числа разделяются пробелами). Далее вводится целое неотрицательное число N, которое Петя хочет ввести в калькулятор. Число N не превышает 10000.

// Формат вывода
// Выведите, какое минимальное количество кнопок должно быть добавлено для того, чтобы можно было ввести число N (если число может быть введено с помощью уже имеющихся кнопок, выведите 0)

// Пример 1
// Ввод	     Вывод
// 1 2 3     0
// 1123

// Пример 2
// Ввод	     Вывод
// 1 2 3     1
// 1001

// Пример 3
// Ввод	     Вывод
// 5 7 3     2
// 123

// Примечания
// Комментарии к примерам тестов.
// 1. Число может быть введено имеющимися кнопками.
// 2. Нужно добавить кнопку 0.
// 3. Нужно добавить кнопки 1 и 2.

const fs = require('fs');
const [buttons, number] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const set1 = new Set(buttons.split(' '));
const set2 = new Set(number.split(''));
const res = [];

set2.forEach(i => {
  if (!set1.has(i)) {
    res.push(i);
  }
});

fs.writeFileSync('output.txt', res.length.toString());