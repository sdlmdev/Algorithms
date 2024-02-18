// 18. Дек с защитой от ошибок

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Научитесь пользоваться стандартной структурой данных deque для целых чисел. 
// Напишите программу, содержащую описание дека и моделирующую работу дека,
// реализовав все указанные здесь методы.
// Программа считывает последовательность команд и в зависимости от команды выполняет ту или иную операцию.
// После выполнения каждой команды программа должна вывести одну строчку.

// Возможные команды для программы:
// push_front n
// Добавить (положить) в начало дека новый элемент. Программа должна вывести ok.
// push_back n
// Добавить (положить) в конец дека новый элемент. Программа должна вывести ok.
// pop_front
// Извлечь из дека первый элемент. Программа должна вывести его значение.
// pop_back
// Извлечь из дека последний элемент. Программа должна вывести его значение.
// front
// Узнать значение первого элемента (не удаляя его). Программа должна вывести его значение.
// back
// Узнать значение последнего элемента (не удаляя его). Программа должна вывести его значение.
// size
// Вывести количество элементов в деке.
// clear
// Очистить дек (удалить из него все элементы) и вывести ok.
// exit
// Программа должна вывести bye и завершить работу.

// Гарантируется, что количество элементов в деке в любой момент не превосходит 100.
// Перед исполнением операций pop_front, pop_back, front, back программа должна проверять,
// содержится ли в деке хотя бы один элемент. Если во входных данных встречается операция pop_front,
// pop_back, front, back, и при этом дек пуст,
// то программа должна вместо числового значения вывести строку error.

// Формат ввода
// Вводятся команды управления деком, по одной на строке.

// Формат вывода
// Требуется вывести протокол работы дека, по одному сообщению на строке

// Пример 1
// Ввод	            Вывод
// push_back 1      ok
// back             1
// exit             bye

// Пример 2
// Ввод	            Вывод
// size             0
// push_back 1      ok
// size             1
// push_back 2      ok
// size             2
// push_front 3     ok
// size             3
// exit             bye

// Пример 3
// Ввод	            Вывод
// push_back 3      ok 
// push_front 14    ok
// size             2
// clear            ok
// push_front 1     ok
// back             1
// push_back 2      ok
// front            1
// pop_back         2
// size             1
// pop_front        1
// size             0
// exit             bye

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element, isFront) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (isFront) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
    return 'ok';
  }

  pop(isFront) {
    if (this.size === 0) {
      return 'error';
    }

    const temp = isFront ? this.head.data : this.tail.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (isFront) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
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

  getTail() {
    if (this.size === 0) {
      return 'error';
    }

    return this.tail.data;
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
  ['push_front', value => results.push(queue.push(+value, true))],
  ['push_back', value => results.push(queue.push(+value, false))],
  ['pop_front', () => results.push(queue.pop(true))],
  ['pop_back', () => results.push(queue.pop(false))],
  ['front', () => results.push(queue.getHead())],
  ['back', () => results.push(queue.getTail())],
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