// F. Современники

// Ограничение времени 	3 секунды
// Ограничение памяти 	64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Группа людей называется современниками, если был такой момент,
// когда они могли собраться все вместе и обсуждать какой-нибудь важный вопрос.
// Для этого в тот момент, когда они собрались, каждому из них должно было уже исполниться 18 лет,
// но еще не исполниться 80 лет.

// Вам дан список великих людей с датами их жизни.
// Выведите всевозможные максимальные множества современников.
// Множество современников будем называть максимальным, если нет другого множества современников,
// которое включает в себя всех людей из первого множества.

// Будем считать, что в день своего 18-летия человек уже может принимать участие в такого рода собраниях,
// а в день 80-летия, равно как и в день своей смерти, — нет.

// Формат ввода
// Сначала на вход программы поступает число N — количество людей (1 ≤ N ≤ 10000).
// Далее в N строках вводится по шесть чисел — первые три задают дату (день, месяц, год) рождения,
// следующие три — дату смерти (она всегда не ранее даты рождения).
// День (в зависимости от месяца, а в феврале — еще и года) от 1 до 28, 29, 30 или 31,
// месяц — от 1 до 12, год — от 1 до 2005.

// Формат вывода
// Программа должна вывести все максимальные множества современников.
// Каждое множество должно быть записано на отдельной строке и содержать номера людей
// (люди во входных данных нумеруются в порядке их задания, начиная с 1).
// Номера людей должны разделяться пробелами.

// Никакое множество не должно быть указано дважды.
// Если нет ни одного непустого максимального множества, выведите одно число 0.
// Гарантируется, что входные данные будут таковы,
// что размер выходных данных для правильного ответа не превысит 2 Мб.

// Пример 1
// Ввод                     Вывод
// 3                        2
// 2 5 1988 13 11 2005      3
// 1 1 1 1 1 30
// 1 1 1910 1 1 1990

// Пример 2
// Ввод                     Вывод
// 3                        2
// 2 5 1968 13 11 2005      1 3
// 1 1 1 1 1 30
// 1 1 1910 1 1 1990

// Пример 3
// Ввод                     Вывод
// 3                        0
// 2 5 1988 13 11 2005
// 1 1 1 1 1 10
// 2 1 1910 1 1 1928

const formatDate = (year, month, day) => `${year.toString().padStart(4, "0")}-${
  month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

const getGroupsOfPeople = (N, datesArr) => {
  const events = [];

  for (let i = 0; i < N; i++) {
    const [dStart, mStart, yStart, dEnd, mEnd, yEnd] = datesArr[i];
    const startDate =  new Date(Date.parse(formatDate(yStart + 18, mStart, dStart)));
    const updateStart = new Date(Date.parse(formatDate(yStart + 80, mStart, dStart)));
    const dateEnd = new Date(Date.parse(formatDate(yEnd, mEnd, dEnd)));
    const endDate = updateStart < dateEnd ? updateStart : dateEnd;

    if (startDate < endDate) {
      events.push([startDate, 1, i + 1]);
      events.push([endDate, -1, i + 1]);
    }
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const curGroup = new Set();
  const res = [];

  for (let human = 0; human < events.length; human++) {
    if (events[human][1] === 1) {
      curGroup.add(events[human][2]);
    } else if (events[human][1] === -1 && curGroup.size > 0) {
      if (events[human - 1][1] === 1) res.push([...curGroup].join(' '));

      curGroup.delete(events[human][2])
    }
  }

  return res.length > 0 ? res.join('\n') : '0';
};

const fs = require('fs');
const [n, ...dates] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.split(' ').map(Number)
);

fs.writeFileSync('output.txt', getGroupsOfPeople(n[0], dates));