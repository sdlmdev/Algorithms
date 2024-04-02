// I. Играйте в футбол!

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Ася Вуткина — известный футбольный комментатор.
// Будучи профессионалом своего дела, Ася тщательно следит за всеми матчами всех европейских чемпионатов.

// Благодаря накопленной информации, Ася может во время трансляции матча сообщить какую-нибудь
// интересную статистику, например: «Индзаги третий матч подряд забивает гол на 9-й минуте»
// или «Матерацци никогда не открывает счет в матче».

// Но мозг Аси не безграничен, а помнить всю историю футбола просто невозможно.
// Поэтому Ася попросила вас написать программу,
// которая собирает статистику матчей и умеет отвечать на некоторые запросы, касающиеся истории футбола.

// Информация о матче сообщается программе в следующей форме:
// "<Название 1-й команды>" - "<Название 2-й команды>" <Счет 1-й команды>:<Счет 2-й команды>
// <Автор 1-го забитого мяча 1-й команды> <Минута, на которой был забит мяч>'
// <Автор 2-го забитого мяча 1-й команды> <Минута, на которой был забит мяч>'
// ...
// <Автор последнего забитого мяча 1-й команды> <Минута, на которой был забит мяч>'
// <Автор 1-го забитого мяча 2-й команды> <Минута, на которой был забит мяч>'
// ...
// <Автор последнего забитого мяча 2-й команды> <Минута, на которой был забит мяч>'

// Запросы к программе бывают следующих видов:
// Total goals for <Название команды>
// — количество голов, забитое данной командой за все матчи.
// Mean goals per game for <Название команды>
// — среднее количество голов, забиваемое данной командой за один матч.
// Гарантирутся, что к моменту подачи такого запроса команда уже сыграла хотя бы один матч.
// Total goals by <Имя игрока>
// — количество голов, забитое данным игроком за все матчи.
// Mean goals per game by <Имя игрока>
// — среднее количество голов, забиваемое данным игроком за один матч его команды.
// Гарантирутся, что к моменту подачи такого запроса игрок уже забил хотя бы один гол.
// Goals on minute <Минута> by <Имя игрока>
// — количество голов, забитых данным игроком ровно на указанной минуте матча.
// Goals on first <T> minutes by <Имя игрока>
// — количество голов, забитых данным игроком на минутах с первой по T-ю включительно.
// Goals on last <T> minutes by <Имя игрока>
// — количество голов, забитых данным игроком на минутах с (91 - T)-й по 90-ю включительно.
// Score opens by <Название команды>
// — сколько раз данная команда открывала счет в матче.
// Score opens by <Имя игрока>
// — сколько раз данный игрок открывал счет в матче.

// Формат ввода
// Входной файл содержит информацию о матчах и запросы в том порядке,
// в котором они поступают в программу Аси Вуткиной.

// Во входном файле содержится информация не более чем о 100 матчах,
// в каждом из которых забито не более 10 голов. Всего в чемпионате участвует не более 20 команд,
// в каждой команде не более 10 игроков забивают голы.

// Все названия команд и имена игроков состоят только из прописных и строчных латинских букв и пробелов,
// а их длина не превышает 30. Прописные и строчные буквы считаются различными.
// Имена и названия не начинаются и не оканчиваются пробелами и не содержат двух пробелов подряд.
// Каждое имя и название содержит хотя бы одну букву.

// Минута, на которой забит гол — целое число от 1 до 90
// (про голы, забитые в дополнительное время, принято говорить, что они забиты на 90-й минуте).

// Для простоты будем считать, что голов в собственные ворота в европейских чемпионатах не забивают,
// и на одной минуте матча может быть забито не более одного гола (в том числе на 90-й).
// Во время чемпионата игроки не переходят из одного клуба в другой.

// Количество запросов во входном файле не превышает 500.

// Формат вывода
// Для каждого запроса во входном файле выведите ответ на этот запрос в отдельной строке.
// Ответы на запросы, подразумевающие нецелочисленный ответ,
// должны быть верны с точностью до трех знаков после запятой.

// Пример 1
// Ввод
// "Juventus" - "Milan" 3:1
// Inzaghi 45'
// Del Piero 67'
// Del Piero 90'
// Shevchenko 34'
// Total goals for "Juventus"
// Total goals by Pagliuca
// Mean goals per game by Inzaghi
// "Juventus" - "Lazio" 0:0
// Mean goals per game by Inzaghi
// Mean goals per game by Shevchenko
// Score opens by Inzaghi

// Вывод
// 3
// 0
// 1.0
// 0.5
// 1.0
// 0

// Пример 2
// Ввод
// Total goals by Arshavin

// Вывод
// 0

const requests = {
  getTotalGoalsForTeam: 'Total goals for',
  getMeanGoalsPerGameForTeam: 'Mean goals per game for',
  getTotalGoalsByPlayer: 'Total goals by',
  getMeanGoalsPerGameByPlayer: 'Mean goals per game by',
  getGoalsOnMinuteByPlayer: 'Goals on minute',
  getGoalsOnFirstTMinutesByPlayer: 'Goals on first',
  getGoalsOnLastTMinutesByPlayer: 'Goals on last',
  getScoreOpensBy: 'Score opens by',
};

const getTotalGoalsForTeam = (team) => teamsGoalsScored.get(team) || 0;

const getMeanGoalsPerGameForTeam = (team) => {
  const totalGoals = getTotalGoalsForTeam(team);
  const gamesPlayed = teamsGamesPlayed.get(team);

  return (totalGoals / gamesPlayed);
};

const getTotalGoalsByPlayer = (player) => {
  const res = playersGoalsScored.get(player)?.get('goals');

  return res ? res : 0;
};

const getMeanGoalsPerGameByPlayer = (player) => {
  const totalGoals = getTotalGoalsByPlayer(player);
  const gamesPlayed = teamsGamesPlayed.get(playersGoalsScored.get(player)?.get('team'));

  return (totalGoals / gamesPlayed);
};

const getGoalsOnMinuteByPlayer = (minute, player) => {
  let res = 0;

  for (const elem of [...goalsHistory.values()].flat()) {
    if (elem.minute === minute && elem.player === player) {
      res += 1;
    }
  }

  return res;
};

const getGoalsOnFirstTMinutesByPlayer = (t, player) => {
  let cnt = 0;

  for (const elem of [...goalsHistory.values()].flat()) {
    if (elem.minute <= t && elem.player === player) {
      cnt += 1;
    }
  }

  return cnt;
};

const getGoalsOnLastTMinutesByPlayer = (t, player) => {
  let cnt = 0;

  for (const elem of [...goalsHistory.values()].flat()) {
    if (elem.minute >= (91 - t) && elem.player === player && elem.minute <= 90) {
      cnt += 1;
    }
  }

  return cnt;
};

const getScoreOpensByTeam = (team) => teamsOpenGameScore.get(team);

const getScoreOpensByPlayer = (player) => {
  let cnt = 0;

  for (const [gameId, gameData] of gamesData) {
    if (gameData.get('openGame')?.player === player) {
      cnt += 1;
    }
  }

  return cnt;
}


const readData = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const lineData = data[i].split(' ');
    const curCommand = [lineData[0], lineData[1], lineData[2]].join(' ');

    if (lineData[0][0] === '"') {
      const [firstTeamScore, secondTeamScore] = lineData.pop().split(':').map(Number);
      const [firstTeamName, secondTeamName] = lineData.join(' ').split(' - ');
      const gameId = `${firstTeamName} - ${secondTeamName}_${i}`;

      gamesData.set(
        gameId,
        new Map().set('score', [firstTeamScore, secondTeamScore])
      );

      teamsGoalsScored.get(firstTeamName) ? teamsGoalsScored.set(
        firstTeamName, teamsGoalsScored.get(firstTeamName) + firstTeamScore
        ) : teamsGoalsScored.set(firstTeamName, firstTeamScore);
      teamsGoalsScored.get(secondTeamName) ? teamsGoalsScored.set(
        secondTeamName, teamsGoalsScored.get(secondTeamName) + secondTeamScore
        ) : teamsGoalsScored.set(secondTeamName, secondTeamScore);

      teamsGamesPlayed.get(firstTeamName) ? teamsGamesPlayed.set(
        firstTeamName, teamsGamesPlayed.get(firstTeamName) + 1
        ) : teamsGamesPlayed.set(firstTeamName, 1);
      teamsGamesPlayed.get(secondTeamName) ? teamsGamesPlayed.set(
        secondTeamName, teamsGamesPlayed.get(secondTeamName) + 1
        ) : teamsGamesPlayed.set(secondTeamName, 1);

      const matchDataLengthFirstTeam = firstTeamScore + i;
      const matchDataLength = firstTeamScore + secondTeamScore + i;
      let cntLine = i;
      let minMinute = Infinity;
      let openGame = {};

      while (i < matchDataLength) {
        i += 1;
        cntLine += 1;

        const team = i <= matchDataLengthFirstTeam ? firstTeamName : secondTeamName;
        const playerData = data[i].split(' ');
        const minute = Number(playerData.pop().replace("'", ''));
        const playerId = playerData.join(' ');

        if (minMinute > minute) {
          minMinute = minute;
          openGame = { 'player': playerId, 'team': team, 'minute': minute };
        }

        if (cntLine === matchDataLength) {
          gamesData.get(gameId).set('openGame', openGame);

          teamsOpenGameScore.get(openGame.team) ? teamsOpenGameScore.set(
            openGame.team, teamsOpenGameScore.get(openGame.team) + 1
            ) : teamsOpenGameScore.set(openGame.team, 1);
        }

        playersGoalsScored.get(playerId) ? playersGoalsScored.get(playerId).set(
          'goals', playersGoalsScored.get(playerId).get('goals') + 1
          ) : playersGoalsScored.set(playerId, new Map().set('goals', 1).set('team', team));

        goalsHistory.get(gameId) ? goalsHistory.get(gameId).push(
          { 'player': playerId, 'team': team, 'minute': minute }
          ) : goalsHistory.set(gameId, [{ 'player': playerId, 'team': team, 'minute': minute }]);
      }
    } else if (curCommand === requests.getTotalGoalsForTeam) {
      const curTeam = lineData.slice(3).join(' ');

      console.log(getTotalGoalsForTeam(curTeam));
    } else if (curCommand === requests.getTotalGoalsByPlayer) {
      const curPlayer = lineData.slice(3).join(' ');

      console.log(getTotalGoalsByPlayer(curPlayer));
    } else if (curCommand === requests.getGoalsOnMinuteByPlayer) {
      const curMinute = Number(lineData[3]);
      const curPlayer = lineData.slice(5).join(' ');

      console.log(getGoalsOnMinuteByPlayer(curMinute, curPlayer));
    } else if (curCommand === requests.getGoalsOnFirstTMinutesByPlayer) {
      const curT = Number(lineData[3]);
      const curPlayer = lineData.slice(6).join(' ');

      console.log(getGoalsOnFirstTMinutesByPlayer(curT, curPlayer));
    } else if (curCommand === requests.getGoalsOnLastTMinutesByPlayer) {
      const curT = Number(lineData[3]);
      const curPlayer = lineData.slice(6).join(' ');

      console.log(getGoalsOnLastTMinutesByPlayer(curT, curPlayer));
    } else if (curCommand === requests.getScoreOpensBy) {
      const curText = lineData.slice(3).join(' ');

      if (teamsOpenGameScore.get(curText) !== undefined) {
        const curTeam = lineData.slice(3).join(' ');

        console.log(getScoreOpensByTeam(curTeam));
      } else {
        const curPlayer = lineData.slice(3).join(' ');

        console.log(getScoreOpensByPlayer(curPlayer));
      }
    } else if (lineData.slice(0, 5).join(' ') === requests.getMeanGoalsPerGameForTeam) {
      const curTeam = lineData.slice(5).join(' ');

      console.log(getMeanGoalsPerGameForTeam(curTeam));
    } else if (lineData.slice(0, 5).join(' ') === requests.getMeanGoalsPerGameByPlayer) {
      const curPlayer = lineData.slice(5).join(' ');

      console.log(getMeanGoalsPerGameByPlayer(curPlayer));
    }
  }
};

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const gamesData = new Map();
const teamsGoalsScored = new Map();
const teamsGamesPlayed = new Map();
const playersGoalsScored = new Map();
const teamsOpenGameScore = new Map();
const goalsHistory = new Map();

readData(input);
