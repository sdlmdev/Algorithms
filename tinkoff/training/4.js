// 4 задание

// Ограничение времени
// 2 секунды
// Ограничение памяти
// 256 МБ

// У Кости есть бумажка, на которой написано n чисел. Также у него есть возможность не больше, чем k раз, взять любое число с бумажки, после чего закрасить одну из старых цифр, а на ее месте написать новую произвольную цифру.

// На какое максимальное значение Костя сможет увеличить сумму всех чисел на листочке?

// Формат входных данных
// В первой строке входного файла даны два целых числа, n,k — количество чисел на бумажке и ограничение на число операций. (1≤n≤1000,1≤k≤10).

// Во второй строке записано n чисел ai — числа на бумажке (1≤ai≤10**9)

// Формат выходных данных 
// В выходной файл выведите одно число — максимальную разность между конечной и начальной суммой.

// Замечание 

// В первом примере Костя может изменить две единицы на две девятки, в результате чего сумма чисел увеличится на 16.

// Во втором примере Костя меняет число 85 на 95.

// В третьем примере можно ничего не менять.

// Обратите внимание, что ответ может превышать вместимость 32-битного типа данных.

// Примеры данных
// Пример 1
// Ввод
// 5  2
// 1  2  1  3  5
// Вывод
// 16

// Пример 2
// Ввод
// 3  1
// 99  5  85
// Вывод
// 10
// Пример 3
// Ввод
// 1  10
// 9999
// Вывод
// 0

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, lineCnt = 0;

readline.on('line', line => {
  if (lineCnt === 0) {
    const [N, K] = line.trim().split(' ').map(Number);
    n = N;
    k = K;
  } else {
    readline.close();
    let nums = line.trim().split(' ').map(Number);
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const gains = [];

    nums = nums.map((num, numIndex) => {
      const digits = String(num).split('').map(Number);
      let weight = 1;

      for (let i = digits.length - 1; i >= 0; i--) {
        let gain = (9 - digits[i]) * weight;
        gains.push({ gain, numIndex, digitIndex: i });
        weight *= 10;
      }

      return digits;
    });

    gains.sort((a, b) => b.gain - a.gain);
    const maxGains = gains.slice(0, k);

    maxGains.forEach(g => {
      nums[g.numIndex][g.digitIndex] = 9;
    });

    nums = nums.map(num => Number(num.join('')));
    const curSum = nums.reduce((acc, cur) => acc + cur, 0);

    console.log(curSum - sum);
  }
  
  lineCnt += 1;
});