// D. Обход

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// Выведите все элементы полученного дерева в порядке возрастания.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем.
// Сам ноль в последовательность не входит. По данной последовательности требуется построить дерево.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод                    Вывод
// 7 3 2 1 9 5 4 6 8 0     1
//                         2
//                         3
//                         4
//                         5
//                         6
//                         7
//                         8
//                         9

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

  console.log(Object.keys(tree).join('\n'));
});

// --------------------------------------------------------------------------

const getNumsInOrderTraversal = (treeData, root) => {
  if (root === -1) return;

  getNumsInOrderTraversal(treeData, treeData[root][1]);
  console.log(root);
  getNumsInOrderTraversal(treeData, treeData[root][2]);
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

  getNumsInOrderTraversal(tree, input[0]);
});