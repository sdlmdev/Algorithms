// B. Футбольный комментатор

// Ограничение времени 2 секунды
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Раунд плей-офф между двумя командами состоит из двух матчей.
// Каждая команда проводит по одному матчу «дома» и «в гостях».
// Выигрывает команда, забившая большее число мячей. Если же число забитых мячей совпадает,
// выигрывает команд, забившая больше мячей «в гостях». Если и это число мячей совпадает,
// матч переходит в дополнительный тайм или серию пенальти.

// Вам дан счёт первого матча, а также счёт текущей игры (которая ещё не завершилась).
// Помогите комментатору сообщить, сколько голов необходимо забить первой команде, чтобы победить,
// не переводя игру в дополнительное время.

// Формат ввода
// В первой строке записан счёт первого мачта в формате G1:G2, где G1 "— число мячей,
// забитых первой командой, а G2 "— число мячей, забитых второй командой.
// Во второй строке записан счёт второго (текущего) матча в аналогичном формате.
// Все числа в записи счёта не превышают 5.
// В третьей строке записано число 1, если первую игру первая команда провела «дома»,
// или 2, если «в гостях».

// Формат вывода
// Выведите единственное целое число "— необходимое количество мячей.

// Пример 1
// Ввод        Вывод
// 0:0         1
// 0:0
// 1

// Пример 2
// Ввод        Вывод
// 0:2         5
// 0:3
// 1

// Пример 3
// Ввод        Вывод
// 0:2         6
// 0:3
// 2

const cntGoals = (G1, G2, G3, G4, location) => {
  const first = G1 + G3;
  const second = G2 + G4;
  const diffence = second - first;

  if (first < second) {
    if (location === 1) {
      if (G2 > G3) {
        if (first + diffence === second && (G3 + diffence <= G2)) return diffence + 1;
        return diffence;
      } else {
        if (first + diffence === second) return diffence;
        return diffence + 1;
      }
    } else {
      if (first + diffence === second && G1 > G4) return diffence;
      return diffence + 1;
    }
  } else if (first === second) {
    if (location === 1) {
      if (G3 > G2) return diffence;
      if (G1 === G2 && G3 === G4) {
        if (G2 >= G3 || G4 >= G1) {
          return diffence + 1;
        }
      } else if (G4 >= G1) {
        return diffence + 1;
      }
      if (G3 < G2) return diffence + 1;
    } else {
      if (G4 >= G1) {
        return diffence + 1;
      }
    }
  }

  return 0;
};

const fs = require('fs');
const [[g1, g2], [g3, g4], [num]] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  e => e.split(':').map(Number)
);

console.log(cntGoals(g1, g2, g3, g4, num));