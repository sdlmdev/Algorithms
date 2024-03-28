// E. Нумерация дробей

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Георг Кантор доказал, что множество всех рациональных чисел счетно
// (т.е. все рациональные числа можно пронумеровать).

// Чтобы упорядочить дроби необходимо их положить в таблицу, как показано на рисунке.
// В строку с номером i этой матрицы по порядку записаны дроби с числителем i,
// а в столбец с номером j дроби с знаменателем j.

// Дальше необходимо выписать все дроби в том порядке, как показано на рисунке стрелками.
// Получится такая последовательность: , , , , , , …

// Вам требуется по числу n найти числитель и знаменатель n-ой дроби.

// Формат ввода
// Во входном файле дано число n (1 ≤ n ≤ 10**18) — порядковый номер дроби в последовательности.

// Формат вывода
// В выходной файл требуется вывести через символ / два числа: числитель и знаменатель соответствующей дроби.

// Пример 1
// Ввод      Вывод
// 1         1/1

// Пример 2
// Ввод      Вывод
// 6         3/1

// Пример 3
// Ввод      Вывод
// 2         2/1

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const findFraction = (n) => {
  let l = 1n;
  let r = n;
  let diagonal;

  while (l <= r) {
    let mid = l + (r - l) / 2n;

    if (mid * (mid - 1n) / 2n < n) {
      l = mid + 1n;
    } else {
      r = mid - 1n;
    }
  }

  diagonal = l - 1n;
  const diagonalStart = diagonal * (diagonal - 1n) / 2n + 1n;
  let offset = n - diagonalStart;

  let numerator, denominator;

  if (diagonal % 2n === 0n) {
    numerator = diagonal - offset;
    denominator = 1n + offset;
  } else {
    numerator = 1n + offset;
    denominator = diagonal - offset;
  }

  return `${numerator}/${denominator}`;
};

readline.on('line', line => {
  console.log(findFraction(BigInt(line)));
  readline.close();
});