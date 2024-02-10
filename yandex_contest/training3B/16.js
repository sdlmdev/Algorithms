// 16. Очередь с защитой от ошибок

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Научитесь пользоваться стандартной структурой данных queue для целых чисел.
// Напишите программу, содержащую описание очереди и моделирующую работу очереди,
// реализовав все указанные здесь методы. 
// Программа считывает последовательность команд и в зависимости от команды выполняет
// ту или иную операцию. После выполнения каждой команды программа должна вывести одну строчку.

// Возможные команды для программы:
// push n
// Добавить в очередь число n (значение n задается после команды). Программа должна вывести ok.
// pop
// Удалить из очереди первый элемент. Программа должна вывести его значение.
// front
// Программа должна вывести значение первого элемента, не удаляя его из очереди.
// size
// Программа должна вывести количество элементов в очереди.
// clear
// Программа должна очистить очередь и вывести ok.
// exit
// Программа должна вывести bye и завершить работу.

// Перед исполнением операций front и pop программа должна проверять,
// содержится ли в очереди хотя бы один элемент.
// Если во входных данных встречается операция front или pop, и при этом очередь пуста,
// то программа должна вместо числового значения вывести строку error.

// Формат ввода
// Вводятся команды управления очередью, по одной на строке

// Формат вывода
// Требуется вывести протокол работы очереди, по одному сообщению на строке

// Пример 1
// Ввод          	Вывод
// push 1         ok
// front          1
// exit           bye

// Пример 2
// Ввод          	Вывод
// size           0
// push 1         ok
// size           1
// push 2         ok
// size           2
// push 3         ok
// size           ok
// exit           bye

// Пример 3
// Ввод          	Вывод
// push 3         ok
// push 14        ok
// size           2
// clear          ok
// push 1         ok
// front          1
// push 2         ok
// front          1
// pop            1
// size           1
// pop            2
// size           0
// exit           bye

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushBack(element) {
    const node = new Node(element);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
    return 'ok';
  }

  popFront() {
    if (this.size === 0) {
      return 'error';
    }

    const temp = this.head.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size -= 1;

    return temp;
  }

  getHead() {
    if (this.size === 0) {
      return 'error';
    }

    return this.head.data;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    return 'ok';
  }

  exit() {
    return 'bye';
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const queue = new Deque();
const results = [];
const commands = new Map([
  ['push', value => results.push(queue.pushBack(+value))],
  ['pop', () => results.push(queue.popFront())],
  ['front', () => results.push(queue.getHead())],
  ['size', () => results.push(queue.getSize())],
  ['clear', () => results.push(queue.clear())],
  ['exit', () => {
    results.push(queue.exit());
    console.log(results.join('\n'));
    process.exit(0);
  }],
]);

readline.on('line', line => {
  const [command, value] = line.split(' ');
  const execute = commands.get(command);

  if (execute) execute(value);
});