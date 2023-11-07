// Дана строка (возможно, пустая), состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB

// Нужно написать функцию RLE, которая на выходе даст строку вида:
// A4B3C2XYZD4E3F3A6B28 И сгенерирует ошибку, если на вход пришла невалидная строка.

// Примечание: Если символ встречается 1 раз, он остается без изменений;
// Если символ повторяется более 1 раза, к нему добавляется количество повторений.

const compressString = (str) => {
  let element = str[0];
  let count = 1;
  const res = [];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== element) {
      if (count === 1) {
        res.push(element);
      } else if (count > 1) {
        res.push(element + count);
      }

      count = 1;
      element = str[i]
    } else if (str[i] === element) {
      count += 1;
    }
  }

  return res.join('');
}

console.log(compressString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));
