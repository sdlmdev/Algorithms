// H. Выборы

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В одной демократической стране приближаются парламентские выборы.
// Выборы проходят по следующей схеме: каждый житель страны, достигший восемнадцатилетнего возраста,
// отдает свой голос за одну из политических партий.
// После этого партия, которая набрала максимальное количество голосов,
// считается победившей на выборах и формирует правительство.
// Если несколько партий набрали одинаковое максимальное количество голосов,
// то они должны сформировать коалиционное правительство, что обычно приводит к длительным переговорам.

// Один бизнесмен решил выгодно вложить свои средства и собрался поддержать на выборах некоторые партии.
// В результате поддержки он планирует добиться победы одной из этих партий,
// которая затем сформирует правительство, которое будет действовать в его интересах.
// При этом возможность формирования коалиционного правительства его не устраивает,
// поэтому он планирует добиться строгой победы одной из партий.

// Чтобы повлиять на исход выборов, бизнесмен собирается выделить деньги на агитационную работу среди жителей страны.
// Исследование рынка показало, что для того, чтобы один житель сменил свои политические воззрения,
// требуется потратить одну условную единицу. Кроме того, чтобы i-я партия в случае победы сформировала правительство,
// которое будет действовать в интересах бизнесмена,
// необходимо дать лидеру этой партии взятку в размере pi условных единиц.
// При этом некоторые партии оказались идеологически устойчивыми и не согласны на сотрудничество с
// бизнесменом ни за какие деньги.

// По результатам последних опросов известно,
// сколько граждан планируют проголосовать за каждую партию перед началом агитационной компании.
// Помогите бизнесмену выбрать, какую партию следует подкупить,
// и какое количество граждан придется убедить сменить свои политические воззрения,
// чтобы выбранная партия победила, учитывая,
// что бизнесмен хочет потратить на всю операцию минимальное количество денег.

// Формат ввода
// В первой строке вводится целое число n – количество партий (1 ≤ n ≤ 10**5).
// Следующие n строк описывают партии. Каждая из этих строк содержит по два целых числа:
// vi – количество жителей, которые собираются проголосовать за эту партию перед началом агитационной компании,
// и pi – взятка, которую необходимо дать лидеру партии для того, чтобы сформированное ей
// в случае победы правительство действовало в интересах бизнесмена(1 ≤ vi ≤ 10**6, 1 ≤ pi ≤ 10**6 или pi = -1).
// Если партия является идеологически устойчивой, то pi равно -1.
// Гарантируется, что хотя бы одно pi не равно -1.

// Формат вывода
// В первой строке выведите минимальную сумму, которую придется потратить бизнесмену.
// Во второй строке выведите номер партии, лидеру которой следует дать взятку.
// В третьей строке выведите n целых чисел – количество голосов,
// которые будут отданы за каждую из партий после осуществления операции.
// Если оптимальных решений несколько, выведите любое.

// Пример
// Ввод     Вывод
// 3        6
// 7 -1     3
// 2 8      3 2 5
// 1 2

const bs = (totalVotesArr, votesArr, l, r, i) => {
  while (l + 1 < r) {
    const m = Math.floor((l + r) / 2);

    if (totalVotesArr[m] + votesArr[i] > votesArr[m]) {
      r = m;
    } else {
      l = m;
    }
  }

  return l;
};

const calcReqVotes = (totalVotesArr, votesArr, reqVotesArr, N) => {
  for (let i = 1; i < N; i += 1) {
    const lB = bs(totalVotesArr, votesArr, 0, i, i);
    const remainder = (votesArr[lB] - (votesArr[i] + totalVotesArr[lB])) % (lB + 2);
    reqVotesArr[i] = votesArr[i] + totalVotesArr[lB] + Math.floor(
      (votesArr[lB] - (votesArr[i] + totalVotesArr[lB])) / (lB + 2)
    ) * (lB + 1) + ((remainder < (lB + 1)) ? (remainder + 1) : (lB + 1));
  }
};

const calcCur = (votesArr, totalVotesArr, lB, resI) => {
  const remainder = (((votesArr[lB] - (votesArr[resI] + totalVotesArr[lB])) % (lB + 2)) < lB + 1) ?
    (((votesArr[lB] - (votesArr[resI] + totalVotesArr[lB])) % (lB + 2)) + 1) : lB + 1;

  return [votesArr[resI] + totalVotesArr[lB] + Math.floor(
    (votesArr[lB] - (votesArr[resI] + totalVotesArr[lB])) / (lB + 2)
  ) * (lB + 1) + remainder, Math.floor(
    (votesArr[lB] - (votesArr[resI] + totalVotesArr[lB])) / (lB + 2)
  ), remainder];
};

const calcVotesAndReqs = (votesArr, N) => {
  let sumVotes = 0;

  const totalVotes = votesArr.map((votes, i) => {
    sumVotes += votes;
    return sumVotes - (i + 1) * votes;
  });

  const requiredVotes = [(N > 1 && votesArr[0] === votesArr[1]) ? votesArr[0] + 1 : votesArr[0]];

  return { totalVotes, requiredVotes };
};

const processPartiesData = (partiesArr) => {
  const partiesData = partiesArr.map((partyData, index) => ({
    party: index,
    votes: partyData[0],
    bribes: partyData[1]
  }));

  partiesData.sort((a, b) => b.votes - a.votes || b.bribes - a.bribes);

  const votes = partiesData.map(data => data.votes);
  const bribes = partiesData.map(data => data.bribes);
  const party = partiesData.map(data => data.party);

  return { votes, bribes, party };
};

const updatePeople = (partyArr, votesArr, peopleArr, requiredVotesArr, resI) => {
  partyArr.forEach((party, i) => {
    peopleArr[party] = votesArr[i];
  });

  if (resI === 0 && requiredVotesArr[0] > peopleArr[partyArr[0]]) {
    const [firstParty, secondParty] = partyArr;
    peopleArr[firstParty] += 1;
    peopleArr[secondParty] -= 1;
  }
};

const calcRes = (bribesArr, requiredVotesArr, votesArr) => {
  const result = bribesArr.reduce((acc, bribe, i) => {
    const cur = requiredVotesArr[i] - votesArr[i] + bribe;

    if (bribe != -1 && cur < acc.res) {
      return { res: cur, resI: i };
    }

    return acc;
  }, { res: Infinity, resI: 0 });

  return [result.res, result.resI];
};

const getRes = (N, bribesArr, requiredVotesArr, votesArr, partyArr, peopleArr, totalVotesArr) => {
  const [res, resI] = calcRes(bribesArr, requiredVotesArr, votesArr);

  updatePeople(partyArr, votesArr, peopleArr, requiredVotesArr, resI);

  if (resI === 0) {
    console.log(`${res}\n${partyArr[resI] + 1}\n${peopleArr.slice(0, N).join(' ')}`);
    return;
  }

  const lB = bs(totalVotesArr, votesArr, 0, resI, resI);
  const [cur, v, remainder] = calcCur(votesArr, totalVotesArr, lB, resI);

  partyArr.slice(0, lB + 1).forEach((p, i) => {
    peopleArr[p] = peopleArr[partyArr[lB]] - v - (i < remainder ? 1 : 0);
  });

  peopleArr[partyArr[resI]] = cur;
  console.log(`${res}\n${partyArr[resI] + 1}\n${peopleArr.slice(0, N).join(' ')}`);
};

const fs = require('fs');
const [[n], ...parties] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.split(' ').map(Number)
);
const { votes, bribes, party } = processPartiesData(parties);
const { totalVotes, requiredVotes } = calcVotesAndReqs(votes, n);
calcReqVotes(totalVotes, votes, requiredVotes, n);
const people = [];

getRes(n, bribes, requiredVotes, votes, party, people, totalVotes);