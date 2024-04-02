// J. Дождик

// Ограничение времени 2 секунды
// Ограничение памяти 256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В НИИ метеорологии решили изучить процесс образования водоемов на различных рельефах местности во время дождя.
// Ввиду сложности реальной задачи была создана двумерная модель,
// в которой местность имеет только два измерения — высоту и длину.
// В этой модели рельеф местности можно представить как N-звенную ломаную c вершинами
// (x0, y0), ..., (xN, yN), где x0 < x1 < ... < xN и yi ≠ yj, для любых i ≠ j.
// Слева в точке x0 и справа в точке xN рельеф ограничен вертикальными горами огромной высоты.

// Если бы рельеф был горизонтальным, то после дождя вся местность покрылась бы слоем воды глубины H.
// Но поскольку рельеф — это ломаная, то вода стекает и скапливается в углублениях, образуя водоемы.

// Требуется найти максимальную глубину в образовавшихся после дождя водоемах.

// Формат ввода
// В первой строке расположены натуральное число N (1 ≤ N ≤ 100) и H — действительное число,
// заданное с тремя цифрами после десятичной точки (0 ≤ H ≤ 10**9).
// В последующих N + 1 строках — по два целых числа xi, yi (-10000 ≤ xi, yi ≤ 10000).

// Числа в строках разделены пробелами.

// Формат вывода
// Выведите единственное число — искомую глубину с точностью 10**-4.

// Пример
// Ввод       Вывод
// 7 7.000    15.8446
// -5 10
// -3 4
// -1 6
// 1 –4
// 4 17
// 5 3
// 9 5
// 12 15

class Calculator {
  constructor(xValues, yValues) {
    this.xValues = xValues;
    this.yValues = yValues;
    this.epsilon = 1e-6;
  }

  checkHeight(index) {
    return (this.yValues[index + 1] < this.yValues[index])
      && (this.yValues[index] > this.yValues[index - 1]);
  }

  findMinY(left, right) {
    return this.yValues.slice(left, right + 1).reduce(
      (min, y) => Math.min(min, y), this.yValues[left]
    );
  }

  calcVolumes(left, maxIndex, right, maxY, volume) {
    const volumeLeftActual = this.findVolume(left, maxIndex, maxY);
    const volumeRightActual = this.findVolume(maxIndex, right, maxY);
    const volumeLeftExpected = (this.xValues[maxIndex] - this.xValues[left]) / (
      this.xValues[right] - this.xValues[left]) * volume;
    const volumeRightExpected = (this.xValues[right] - this.xValues[maxIndex]) / (
      this.xValues[right] - this.xValues[left]) * volume;

    return { volumeLeftActual, volumeRightActual, volumeLeftExpected, volumeRightExpected };
  }

  findVolume(left, right, height) {
    let volume = 0;

    for (let i = left; i <= right - 1; i++) {
      const currentHeight = this.yValues[i];
      const nextHeight = this.yValues[i + 1];
      const currentX = this.xValues[i];
      const nextX = this.xValues[i + 1];
      const deltaX = nextX - currentX;

      if ((height < nextHeight) && (height < currentHeight)) continue;

      if ((height > nextHeight) && (height > currentHeight)) {
        const volumeIncrement = deltaX * (height - currentHeight + height - nextHeight) / 2;
        volume += volumeIncrement;
        continue;
      }

      const x = currentX + (height - currentHeight) / (nextHeight - currentHeight) * deltaX;

      if (currentHeight < height) {
        const volumeIncrement = (x - currentX) * (height - currentHeight) / 2;
        volume += volumeIncrement;
        continue;
      }

      const volumeIncrement = (nextX - x) * (height - nextHeight) / 2;
      volume += volumeIncrement;
    }

    return volume;
  }

  isBothVolumesExceed(volumeLeftActual, volumeRightActual,
    volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight) {
    return (volumeLeftActual > volumeLeftExpected + volumeLeft - this.epsilon)
      && (volumeRightActual > volumeRightExpected + volumeRight - this.epsilon);
  }

  isLeftVolumeExceed(volumeLeftActual, volumeRightActual,
    volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight) {
    return volumeLeftActual > volumeLeftExpected + volumeLeft
      && volumeRightActual < volumeRightExpected + volumeRight;
  }

  isRightVolumeExceed(volumeLeftActual, volumeRightActual,
    volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight) {
    return volumeLeftActual < volumeLeftExpected + volumeLeft
      && volumeRightActual > volumeRightExpected + volumeRight;
  }

  calcOptWaterHeight(left, right, volume) {
    if (this.epsilon > Math.abs(volume)) {
      return this.findMinY(left, right);
    }

    let heightLeft = -1e9;
    let heightRight = 1e9;

    while (heightRight - heightLeft > this.epsilon) {
      let height = (heightRight + heightLeft) / 2;

      if (volume > this.findVolume(left, right, height)) {
        heightLeft = height;
      } else {
        heightRight = height;
      }
    }

    return heightRight;
  }

  findMaxHeightAndIndex(left, right) {
    let maxY = -Infinity, maxIndex = -1;

    this.yValues.slice(left + 1, right).forEach((value, i) => {
      i += left + 1;

      if (this.checkHeight(i)) {
        if (maxY < value) {
          maxY = value;
          maxIndex = i;
        }
      }
    });

    return { maxY, maxIndex };
  }

  calcHeightForRightVolumeExceed(left, maxIndex, right,
    volumeLeftExpected, volumeRightExpected, volumeLeft,
    volumeRight, maxY, volumeLeftActual, volumeRightActual, volume) {
    if (volumeLeftActual + volumeRightActual > volumeLeftExpected + volumeRightExpected + volumeLeft + volumeRight) {
      const heightLeft = maxY - this.findMinY(left, maxIndex);
      const heightRight = this.calcHeight(
        maxIndex, right, volumeRightExpected, volumeLeft + volumeLeftExpected - volumeLeftActual, volumeRight);

      return Math.max(heightLeft, heightRight);
    }

    return this.calcOptWaterHeight(
      left, right, volume + volumeRight + volumeLeft) - this.findMinY(left, right);
  }

  calcHeight(left, right, volume, volumeLeft, volumeRight) {
    const { maxY, maxIndex } = this.findMaxHeightAndIndex(left, right);

    if (maxIndex === -1) {
      return this.calcOptWaterHeight(left, right, volume + volumeLeft + volumeRight) - this.findMinY(left, right);
    }

    const { volumeLeftActual, volumeRightActual,
      volumeLeftExpected, volumeRightExpected } = this.calcVolumes(left, maxIndex, right, maxY, volume);

    if (this.isBothVolumesExceed(volumeLeftActual, volumeRightActual,
      volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight)) {
      return this.calcHeightForBothVolumesExceed(
        left, maxIndex, right, volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight);
    }
    if (this.isLeftVolumeExceed(
      volumeLeftActual, volumeRightActual, volumeLeftExpected, volumeRightExpected, volumeLeft, volumeRight)) {
      return this.calcHeightForLeftVolumeExceed(left, maxIndex, right, volumeLeftExpected,
        volumeRightExpected, volumeLeft, volumeRight, maxY, volumeRightActual, volumeLeftActual, volume);
    }
    if (this.isRightVolumeExceed(volumeLeftActual, volumeRightActual, volumeLeftExpected,
      volumeRightExpected, volumeLeft, volumeRight)) {
      return this.calcHeightForRightVolumeExceed(left, maxIndex, right, volumeLeftExpected,
        volumeRightExpected, volumeLeft, volumeRight, maxY, volumeLeftActual, volumeRightActual, volume);
    }
    return this.calcOptWaterHeight(left, right, volume + volumeRight + volumeLeft) - this.findMinY(left, right);
  }

  calcHeightForBothVolumesExceed(left, maxIndex, right, volumeLeftExpected,
    volumeRightExpected, volumeLeft, volumeRight) {
    const heightLeft = this.calcHeight(left, maxIndex, volumeLeftExpected, volumeLeft, 0);
    const heightRight = this.calcHeight(maxIndex, right, volumeRightExpected, 0, volumeRight);

    return Math.max(heightLeft, heightRight);
  }

  calcHeightForLeftVolumeExceed(left, maxIndex, right, volumeLeftExpected,
    volumeRightExpected, volumeLeft, volumeRight, maxY, volumeRightActual, volumeLeftActual, volume) {
    if (volumeLeftActual + volumeRightActual > volumeLeftExpected + volumeRightExpected + volumeLeft + volumeRight) {
      const heightLeft = this.calcHeight(left, maxIndex, volumeLeftExpected, volumeLeft,
        volumeRight + volumeRightExpected - volumeRightActual);
      const heightRight = maxY - this.findMinY(maxIndex, right);

      return Math.max(heightLeft, heightRight);
    }

    return this.calcOptWaterHeight(left, right, volume + volumeLeft + volumeRight) - this.findMinY(left, right);
  }
}

const fs = require('fs');
const [[numPoints, initialHeight], ...points] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  line => line.trim().split(' ').map(Number)
);
const xValues = points.map(point => point[0]);
const yValues = points.map(point => point[1]);
const initialVolume = (xValues[numPoints] - xValues[0]) * initialHeight;
const calculator = new Calculator(xValues, yValues);
const maxH = calculator.calcHeight(0, numPoints, initialVolume, 0, 0);

console.log(maxH.toFixed(4));