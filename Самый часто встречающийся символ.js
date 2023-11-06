// Дана строка (в кодировке UTF-8)

// Найти самый часто встречающийся в ней символ.
// Если несколько символов встречаются одиноково часто, то можно вывести любой

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const findMaxElem = (str) => {
  let elem = '';
  let num = 0;
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }

    if (obj[str[i]] > num) {
      elem = str[i];
      num = obj[str[i]];
    }
  }

  return elem;
}

rl.on('line', line => {
  const res = findMaxElem(line);

  rl.close();

  console.log(res);
});
