// Игра в PitCraft происходит в двумерном мире, который состоит из блоков размером 1 на 1 метр.
// Остров игрока представляет собой набор столбцов различной высоты, состоящих из блоков камня и окруженный морем.
// Над островом прошел сильный дождь, который заполнил водой все низины,
// а не поместившаяся в них вода стекла в море, не увеличив его уровень

// По ландшафту острова определите, сколько блоков воды осталось после дождя в низинах на острове.

const findWaterBlocks = (arr) => {
  let waterBlocks = 0;
  let lastMaxElemPosition = 0;
  let maxLength = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxLength) {
      maxLength = arr[i];
      lastMaxElemPosition = i;
    } else if (arr[i] === maxLength) {
      lastMaxElemPosition = i;
    }
  }

  maxLength = 0;

  for (let i = 0; i < lastMaxElemPosition; i++) {
    if (arr[i] > maxLength) {
      maxLength = arr[i];
    }

    waterBlocks += maxLength - arr[i]
  }

  maxLength = 0;

  for (let i = arr.length -1; i > lastMaxElemPosition; i--) {
    if (arr[i] > maxLength) {
      maxLength = arr[i];
    }

    waterBlocks += maxLength - arr[i]
  }

  return waterBlocks;
};

console.log(findWaterBlocks([3, 1, 4, 3, 5, 1, 1, 3, 1]));
// console.log(findWaterBlocks([3, 1, 4, 3, 5, 3, 4, 3, 5, 1, 1, 3, 1]));