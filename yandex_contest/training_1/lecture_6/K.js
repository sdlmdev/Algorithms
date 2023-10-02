// K. Медиана объединения-2

// Ограничение времени 5 секунд
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дано N упорядоченных по неубыванию последовательностей целых чисел
// (т.е. каждый следующий элемент больше либо равен предыдущему),
// в каждой из последовательностей ровно L элементов.
// Для каждых двух последовательностей выполняют следующую операцию:
// объединяют их элементы (в объединенной последовательности каждое число будет идти столько раз,
// сколько раз оно встречалось суммарно в объединяемых последовательностях),
// упорядочивают их по неубыванию и смотрят,
// какой элемент в этой последовательности из 2L элементов окажется на месте номер L
// (этот элемент называют левой медианой).

// Напишите программу, которая для каждой пары последовательностей выведет левую медиану их объединения.

// Формат ввода
// Сначала вводятся числа N и L (2 ≤ N ≤ 200, 1 ≤ L ≤ 50000).
// В следующих N строках задаются параметры, определяющие последовательности.

// Каждая последовательность определяется пятью целочисленными параметрами: x1, d1, a, c, m.
// Элементы последовательности вычисляются по следующим формулам:
// x1 нам задано, а для всех i от 2 до L: xi = xi–1+di–1.
// Последовательность di определяется следующим образом: d1 нам задано, а для i ≥ 2 di = ((a*di–1+c) mod m),
// где mod – операция получения остатка от деления (a*di–1+c) на m.

// Для всех последовательностей выполнены следующие ограничения: 1 ≤ m ≤ 40000, 0 ≤ a < m, 0≤c<m, 0≤d1<m.
// Гарантируется, что все члены всех последовательностей по модулю не превышают 10**9.

// Формат вывода
// В первой строке выведите медиану объединения 1-й и 2-й последовательностей,
// во второй строке — объединения 1-й и 3-й, и так далее, в (N‑1)-ой строке —
// объединения 1-й и N-ой последовательностей,
// далее медиану объединения 2-й и 3-й, 2-й и 4-й, и т.д. до 2-й и N-ой, затем 3-й и 4-й и так далее.
// В последней строке должна быть выведена медиана объединения (N–1)-й и N-ой последовательностей.

// Пример
// Ввод	             Вывод
// 3 6               7
// 1 3 1 0 5         10
// 0 2 1 1 100       9
// 1 6 8 5 11

// Примечания
// Последовательности, объединения которых мы считаем, таковы:
// 1 4 7 10 13 16
// 0 2 5 9 14 20
// 1 7 16 16 21 22

const getSequence = (l, x1, d1, a, c, m) => {
  const seq = [x1];
  let d = d1;

  for (let i = 1; i < l; i++) {
    seq.push(seq[seq.length - 1] + d);
    d = (a * d + c) % m;
  }

  return seq;
};

const binarySearch = (l, r, seq, val) => {
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (seq[m] >= val) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};

const getLess = (seq, val) => {
  const res = binarySearch(0, seq.length - 1, seq, val);

  if (seq[res] < val) return seq.length;

  return res;
};

const getGt = (seq, x) => seq.length - getLess(seq, x + 1);

const getMedian = (seq1, seq2, L) => {
  let l = Math.min(seq1[0], seq2[0]);
  let r = Math.max(seq1[seq1.length - 1], seq2[seq2.length - 1]);

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const less = getLess(seq1, m) + getLess(seq2, m);
    const gt = getGt(seq1, m) + getGt(seq2, m);

    if (less <= L - 1 && gt <= L) return m;
    if (gt > L) l = m + 1;
    if (less > L - 1) r = m - 1;
  }

  return l;
};

const getMedians = (seq) => {
  const medians = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      medians.push(getMedian(seq[i], seq[j], l));
    }
  }

  return medians;
};

const fs = require('fs');
const [nl, ...sequences] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  i => i.trim().split(' ').filter(val => val != '').map(el => Number(el))
);
const [n, l] = nl;
const seqs = sequences.map(seq => getSequence(l, ...seq));

fs.writeFileSync('output.txt', getMedians(seqs).join('\n'));