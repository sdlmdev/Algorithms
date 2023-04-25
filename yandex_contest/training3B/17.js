// 17. Игра в пьяницу

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В игре в пьяницу карточная колода раздается поровну двум игрокам.
// Далее они вскрывают по одной верхней карте, и тот, чья карта старше, забирает себе обе вскрытые карты,
// которые кладутся под низ его колоды. Тот, кто остается без карт – проигрывает.
// Для простоты будем считать, что все карты различны по номиналу, а также,
// что самая младшая карта побеждает самую старшую карту ("шестерка берет туза").
// Игрок, который забирает себе карты, сначала кладет под низ своей колоды карту первого игрока,
// затем карту второго игрока (то есть карта второго игрока оказывается внизу колоды).
// Напишите программу, которая моделирует игру в пьяницу и определяет, кто выигрывает.
// В игре участвует 10 карт, имеющих значения от 0 до 9, большая карта побеждает меньшую,
// карта со значением 0 побеждает карту 9.

// Формат ввода
// Программа получает на вход две строки: первая строка содержит 5 чисел,
// разделенных пробелами — номера карт первого игрока, вторая – аналогично 5 карт второго игрока.
// Карты перечислены сверху вниз, то есть каждая строка начинается с той карты,
// которая будет открыта первой.

// Формат вывода
// Программа должна определить, кто выигрывает при данной раздаче,
// и вывести слово first или second, после чего вывести количество ходов, сделанных до выигрыша.
// Если на протяжении 10**6 ходов игра не заканчивается, программа должна вывести слово botva.

// Пример 1
// Ввод             Вывод
// 1 3 5 7 9        second 5
// 2 4 6 8 0

// Пример 2
// Ввод             Вывод
// 2 4 6 8 0        first 5
// 1 3 5 7 9

// Пример 3
// Ввод             Вывод
// 1 7 3 9 4        second 23
// 5 8 0 2 6

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

  popBack() {
    if (this.size !== 0) {
      const temp = this.tail.data;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  
      this.size -= 1;

      return temp;
    }
  }

  pushFront(elem) {
    const node = new Node(elem);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  pushBack(elem) {
    const node = new Node(elem);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
  }
}

const playGame = (first, second) => {
  first.reverse();
  second.reverse();
  const firstPlayer = new Deque();
  const secondPlayer = new Deque();
  let moves = 0;

  for (let i = 0; i < 5; i++) {
    firstPlayer.pushBack(first[i]);
    secondPlayer.pushBack(second[i]);
  }

  while (firstPlayer.size !== 0 && secondPlayer.size !== 0) {
    const firstCard = firstPlayer.popBack();
    const secondCard = secondPlayer.popBack();

    moves += 1;

    switch (true) {
      case firstCard === 0 && secondCard === 9:
        firstPlayer.pushFront(firstCard);
        firstPlayer.pushFront(secondCard);
        break;
      case firstCard === 9 && secondCard === 0:
        secondPlayer.pushFront(firstCard);
        secondPlayer.pushFront(secondCard);
        break;
      case firstCard > secondCard:
        firstPlayer.pushFront(firstCard);
        firstPlayer.pushFront(secondCard);
        break;
      default:
        secondPlayer.pushFront(firstCard);
        secondPlayer.pushFront(secondCard);
    }

    if (moves > 10 ** 6) {
      return 'botva';
    }
  }

  return firstPlayer.size === 0 ? `second ${moves}` : `first ${moves}`;
};

const fs = require('fs');
const [first, second] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);

console.log(playGame(first, second));