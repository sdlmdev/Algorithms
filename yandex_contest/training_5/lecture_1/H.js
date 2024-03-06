// H. Забег по стадиону

// Ограничение времени 1 секунда
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Стадион представляет собой окружность длинойL метров, на которой отмечена точка старта.
// По стадиону бегают Кирилл и Антон. У каждого мальчика есть своя точка старта
// (она представляет собой расстояние в метрах от старта, отсчитанное по часовой стрелке)
// и своя скорость в метрах в секунду (положительная скорость означает,
// что мальчик бежит по часовой стрелке, отрицательная — что бежит против часовой,
// а нулевая — что он стоит на месте).

// Вам нужно сказать, через какое минимальное время мальчики окажутся на одинаковом расстоянии от точки старта.
// Обратите внимание, что в этот момент они могли находиться в разных точках.
// Расстоянием от точки A до точки B называется минимальное из расстояний,
// которое нужно пробежать из точки A по или против часовой стрелки, чтобы оказаться в B.

// Формат ввода
// В единственной строке вводится 5 целых чисел
// L,x1,v1,x2,v2 (1≤L≤10**9, 0≤x1,x2<L, ∣v1∣,∣v2∣≤10**9) — длины стадиона в метрах,
// начальная точка Кирилла, скорость Кирилла, начальная точка Антона, скорость Антона.

// Формат вывода
// В первой строке выведите слово «YES», если случится момент,
// когда мальчики будут на одинаковом расстоянии от старта, или «NO», если такого момента не произойдёт.

// Если ответ «YES», то во второй строке выведите одно вещественное число —
// через какое минимальное количество времени мальчики окажутся на одинаковом расстоянии от старта.

// Вы можете выводить каждую букву в любом регистре (строчную или заглавную).
// Например, строки «yEs», «yes», «Yes» и «YES» будут приняты как положительный ответ.

// Ваш ответ будет считаться правильным, если его абсолютная или относительная ошибка не превосходит 10**−9.

// Формально, пусть ваш ответ равен a, а ответ жюри равен b.
// Ваш ответ будет зачтен, если и только если |a−b|max(1,|b|)≤10**-9.

// Пример 1
// Ввод             Вывод
// 6 3 1 1 1        YES
//                  1.0000000000


// Пример 2
// Ввод             Вывод
// 12 8 10 5 20     YES
//                  0.3000000000

// Пример 3
// Ввод             Вывод
// 5 0 0 1 2        YES
//                  2.0000000000

// Пример 4
// Ввод             Вывод
// 10 7 -3 1 4      YES
//                  0.8571428571

// Примечания
// В первом тесте Кирилл изначально находится в точке 3 и бежит по часовой стрелке со скоростью 1.
// Антон находится в точке 1 и также бежит по часовой стрелке со скоростью 1.
// Через 1 секунду мальчики окажутся в точках 4 и 2 соответственно.
// Обе эти точки расположены на расстоянии 2 метра от старта (точки 0, совпадающей с точкой 6).
// Можно показать, что до этого они всегда находились на разном расстоянии от старта.
// Значит, ответ — 1.
// Во втором тесте оба мальчика окажутся в точке 11 через 0.3 секунды.
// В третьем Антон прибежит к Кириллу в точку 0 за 2 секунды.

const cntDistance = (L, X1, V1, X2, V2) => {
  if (X1 === X2) {
    return '0.0000000000';
  }

  if (V1 === V2 && X1 !== X2 && (V1 >= 0 && V2 >= 0)) {
    if (X1 > X2) {
      return ((L - Math.abs(-X2 - X1) % L) / (V1 + V2)).toFixed(10);
    }
    return (Math.abs(X2 - X1) / (V1 + V2)).toFixed(10);
  }

  if (V1 !== V2 && X1 !== X2 && (V1 >= 0 && V2 >= 0)) {
    if (X1 > X2 && V1 > V2 || X1 > X2 && V1 === 0) {
      return ((L - Math.abs(-X2 - X1) % L) / (V1 + V2)).toFixed(10);
    }

    if (V2 === 0) {
      return ((Math.abs(X2 - X1)) / (V1 + V2)).toFixed(10);
    }

    return ((L - Math.abs(X2 - X1)) / (V1 + V2)).toFixed(10);
  }

  if (V1 !== V2 && X1 !== X2 && (V1 < 0 || V2 < 0)) {
    if (V1 < 0 && V2 < 0) {
      return (Math.abs(X2 + X1) / Math.abs(V1 + V2)).toFixed(10);
    }

    if (X2 > X1) {
      if (V1 === 0 || V2 === 0) {
        return ((Math.abs(-X2 - X1) % L) / (V1 - V2)).toFixed(10);
      }
      return ((L - Math.abs(X2 - X1)) / Math.abs(V1 - V2)).toFixed(10);
    }

    if (V2 < V1) {
      return ((L - Math.abs(X2 - X1)) / Math.abs(V1 - V2)).toFixed(10);
    }

    return (Math.abs(X2 - X1) / Math.abs(V1 - V2)).toFixed(10);
  }

  if (V1 === V2 && X1 !== X2 && (V1 < 0 && V2 < 0)) {
    return (Math.abs(X2 + X1) / Math.abs(V1 + V2)).toFixed(10);
  }
};

const getRes = (L, X1, V1, X2, V2) => {
  const res = cntDistance(L, X1, V1, X2, V2);

  if (res !== '-Infinity' && res !== 'Infinity') {
    return 'YES\n' + res;
  } else {
    return 'NO';
  }
};

const fs = require('fs');
const [l, x1, v1, x2, v2] = fs.readFileSync('input.txt', 'utf-8').trim().split(' ').map(Number);

fs.writeFileSync('output.txt', getRes(l, x1, v1, x2, v2));
