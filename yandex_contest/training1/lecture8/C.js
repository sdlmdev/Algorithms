// C. Второй максимум

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// Выведите второй по величине элемент в построенном дереве. Гарантируется, что такой найдется.

// Формат ввода
// Дана последовательность целых чисел, оканчивающаяся нулем. Сам ноль в последовательность не входит.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод	Вывод
// 7 3 2 1 9 5 4 6 8 0
// 8

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const addNode = (treeData, root, val) => {
  if (treeData[root][0] > val) {
    if (treeData[root][1] === -1) {
      treeData[root][1] = val;
      treeData[val] = [val, -1, -1];
    } else {
      addNode(treeData, treeData[root][1], val);
    }
  } else {
    if (treeData[root][2] === -1) {
      treeData[root][2] = val;
      treeData[val] = [val, -1, -1];
    } else {
      addNode(treeData, treeData[root][2], val);
    }
  }
};

rl.on('line', line => {
  rl.close();

  const input = line.split(' ').map(Number);
  const tree = {
    [input[0]]: [input[0], -1, -1],
  };

  for (let i = 1; i < input.length - 1; i++) {
    if (tree[input[i]]) continue;
    addNode(tree, input[0], input[i]);
  }

  console.log(Object.keys(tree)[Object.keys(tree).length - 2]);
});