// A. Высота дерева

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Реализуйте бинарное дерево поиска для целых чисел.
// Программа получает на вход последовательность целых чисел и строит из них дерево.
// Элементы в деревья добавляются в соответствии с результатом поиска их места.
// Если элемент уже существует в дереве, добавлять его не надо. Балансировка дерева не производится.

// Формат ввода
// На вход программа получает последовательность натуральных чисел.
// Последовательность завершается числом 0, которое означает конец ввода, и добавлять его в дерево не надо.

// Формат вывода
// Выведите единственное число – высоту получившегося дерева.

// Пример
// Ввод                          Вывод
// 7 3 2 1 9 5 4 6 8 0           4

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const addNode = (treeData, root, val) => {
  if (val < treeData[root][0]) {
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

const calcHeight = (treeData, root) => {
  if (root === -1) return 0;

  const leftHeight = calcHeight(treeData, treeData[root][1]);
  const rightHeight = calcHeight(treeData, treeData[root][2]);

  return Math.max(leftHeight, rightHeight) + 1;
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

  const height = calcHeight(tree, input[0]);

  console.log(height);
});
