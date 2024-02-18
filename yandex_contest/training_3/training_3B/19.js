// 19. Хипуй

// Ограничение времени 2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В этой задаче вам необходимо самостоятельно
// (не используя соответствующие классы и функции стандартной библиотеки)
// организовать структуру данных Heap для хранения целых чисел,
// над которой определены следующие операции:
// a) Insert(k) – добавить в Heap число k;
// b) Extract достать из Heap наибольшее число (удалив его при этом).

// Формат ввода
// В первой строке содержится количество команд N (1 ≤ N ≤ 100000), далее следуют N команд,
// каждая в своей строке. Команда может иметь формат: “0 <число>” или “1”, обозначающий,
// соответственно, операции Insert(<число>) и Extract.
// Гарантируется, что при выполнении команды Extract в структуре находится по крайней мере один элемент.

// Формат вывода
// Для каждой команды извлечения необходимо отдельной строкой вывести число,
// полученное при выполнении команды Extract.

// Пример 1
// Ввод	          Вывод
// 2              10000
// 0 10000
// 1

// Пример 2
// Ввод	          Вывод
// 14             345
// 0 1            4346
// 0 345          2435
// 1              365
// 0 4346         235
// 1              5
// 0 2435         1
// 1
// 0 235
// 0 5
// 0 365
// 1
// 1
// 1
// 1

class Heap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let sonIndex = this.heap.length - 1;
    const elem = this.heap[sonIndex];

    while (sonIndex > 0) {
      const parentIndex = Math.floor((sonIndex - 1) / 2);
      const parent = this.heap[parentIndex];

      if (elem <= parent) break;
      this.heap[parentIndex] = elem;
      this.heap[sonIndex] = parent;
      sonIndex = parentIndex;
    }
  }

  extract() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let firstIndex = 0;
    const lastIndex = this.heap.length - 1;
    const elem = this.heap[firstIndex];

    while (true) {
      const leftSonIndex = 2 * firstIndex + 1;
      const rightSonIndex = 2 * firstIndex + 2;
      let swap = null;

      if (leftSonIndex <= lastIndex) {
        const leftSon = this.heap[leftSonIndex];

        if (leftSon > elem) swap = leftSonIndex;
      }
    
      if (rightSonIndex <= lastIndex) {
        const rightSon = this.heap[rightSonIndex];

        if (rightSon > elem) {
          if (swap === null || rightSon > this.heap[swap]) {
            swap = rightSonIndex;
          }
        }
      }

      if (swap === null) break;
      this.heap[firstIndex] = this.heap[swap];
      this.heap[swap] = elem;

      firstIndex = swap;
    }
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const heap = new Heap();
let lineCnt = 0;
let n = 0;

readline.on('line', line => {
  if (lineCnt === 0) {
    n = +line;
  } else {
    const [cmd, val] = line.split(' ').map(Number);

    if (cmd === 0) {
      heap.insert(val);
    } else {
      console.log(heap.extract());
    }

    if (lineCnt === n) {
      readline.close();
    }
  }

  lineCnt += 1;
});