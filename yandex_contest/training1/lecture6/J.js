// J. Медиана объединения

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Дано N упорядоченных по неубыванию последовательностей целых чисел
// (т.е. каждый следующий элемент больше либо равен предыдущему), в каждой из последовательностей ровно L элементов.
// Для каждых двух последовательностей выполняют следующую операцию: объединяют их элементы
// (в объединенной последовательности каждое число будет идти столько раз,
// сколько раз оно встречалось суммарно в объединяемых последовательностях), упорядочивают их по неубыванию и смотрят,
// какой элемент в этой последовательности из 2L элементов окажется на месте номер L
// (этот элемент называют левой медианой).

// Напишите программу, которая для каждой пары последовательностей выведет левую медиану их объединения.

// Формат ввода
// Сначала вводятся числа N и L (2 ≤ N ≤ 100, 1 ≤ L ≤ 300).
// В следующих N строках задаются последовательности.
// Каждая последовательность состоит из L чисел, по модулю не превышающих 30000.

// Формат вывода
// В первой строке выведите медиану объединения 1-й и 2-й последовательностей,
// во второй строке — объединения 1-й и 3-й, и так далее, в (N‑1)-ой строке — объединения 1-й и N-ой последовательностей,
// далее медиану объединения 2-й и 3-й, 2-й и 4-й, и т.д. до 2-й и N-ой, затем 3-й и 4-й и так далее.
// В последней строке должна быть выведена медиана объединения (N–1)-й и N-ой последовательностей.

// Пример
// Ввод	               Вывод
// 3 6                 7
// 1 4 7 10 13 16      10
// 0 2 5 9 14 20       9
// 1 7 16 16 21 22 

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

fs.writeFileSync('output.txt', getMedians(sequences).join('\n'));