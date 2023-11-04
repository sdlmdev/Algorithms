// E. Вывод листьев

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// Для полученного дерева выведите список всех листьев (вершин, не имеющих потомков) в порядке возрастания.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем. Сам ноль в последовательность не входит.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод                    Вывод
// 7 3 2 1 9 5 4 6 8 0     1
//                         4
//                         6
//                         8

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

const dfs = (treeData, root, ans) => {
  if (root === -1) return;
  if (treeData[root][1] === -1 && treeData[root][2] === -1) ans.push(treeData[root][0]);

  dfs(treeData, treeData[root][1], ans);
  dfs(treeData, treeData[root][2], ans);
};

const fs = require('fs');
const nums = fs.readFileSync('input.txt', 'utf-8').trim().split(' ').map(Number).slice(0, -1);
const tree = [[nums[0], -1, -1]];
const res = [];

fillTree(tree, nums);
dfs(tree, 0, res);

fs.writeFileSync('output.txt', res.join('\n'));