// H. АВЛ-сбалансированность

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// Дерево называется АВЛ-сбалансированным, если для любой его вершины высота
// левого и правого поддерева для этой вершины различаются не более чем на 1.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем.
// Сам ноль в последовательность не входит. Постройте дерево, соответствующее данной последовательности.

// Формат вывода
// Определите, является ли дерево сбалансированным, выведите слово YES или NO.

// Пример
// Ввод                    Вывод
// 7 3 2 1 9 5 4 6 8 0     YES

const addNode = (treeData, root, val) => {
  if (treeData[root][0] === val) return;

  if (treeData[root][0] > val) {
    if (treeData[root][1] === -1) {
      treeData[root][1] = treeData.length;
      treeData.push([val, -1, -1]);
    } else {
      addNode(treeData, treeData[root][1], val);
    }
  } else {
    if (treeData[root][2] === -1) {
      treeData[root][2] = treeData.length;
      treeData.push([val, -1, -1]);
    } else {
      addNode(treeData, treeData[root][2], val);
    }
  }
};

const fillTree = (treeArr, input) => {
  for (let i = 1; i < input.length; i++) {
    addNode(treeArr, 0, input[i]);
  }
};

const checkBalancing = (treeData, root) => {
  if (root === -1) return 0;

  let leftHeight = checkBalancing(treeData, treeData[root][1]);
  if (leftHeight === -1) return -1;

  let rightHeight = checkBalancing(treeData, treeData[root][2]);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
};

const fs = require('fs');
const nums = fs.readFileSync('input.txt', 'utf-8').trim().split(' ').map(Number).slice(0, -1);
const tree = [[nums[0], -1, -1]];

fillTree(tree, nums);

const isBalanced = checkBalancing(tree, 0) !== -1 ? 'YES' : 'NO';

fs.writeFileSync('output.txt', isBalanced);