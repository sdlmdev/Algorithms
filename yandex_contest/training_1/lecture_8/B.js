// B. Глубина добавляемых элементов

// 	                    Все языки   Python 3.6
// Ограничение времени 	2 секунды 	4 секунды
// Ограничение памяти 	64Mb 	      256Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В бинарное дерево поиска добавляются элементы.
// Выведите глубину для каждого добавленного элемента в том порядке, как они добавлялись.
// Если элемент уже есть в дереве, то ничего добавлять и выводить не нужно.
// Глубиной называется расстояние от корня дерева до элемента включительно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем.
// Сам ноль в последовательность не входит. По данной последовательности требуется построить дерево.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод	                   Вывод
// 7 3 2 1 9 5 4 6 8 0     1 2 3 4 2 3 4 4 3

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const addNode = (treeData, root, val, ans) => {
  let nodeCnt = 1;

  while (true) {
    nodeCnt += 1;

    if (treeData[root][0] > val) {
      if (treeData[root][1] === -1) {
        treeData[root][1] = val;
        treeData[val] = [val, -1, -1];
        ans.push(nodeCnt);

        return;
      } else {
        root = treeData[root][1];
      }
    } else {
      if (treeData[root][2] === -1) {
        treeData[root][2] = val;
        treeData[val] = [val, -1, -1];
        ans.push(nodeCnt);

        return;
      } else {
        root = treeData[root][2];
      }
    }
  }
};

rl.on('line', line => {
  rl.close();

  const input = line.split(' ').map(Number);
  const tree = {
    [input[0]]: [input[0], -1, -1],
  };
  const res = [1];

  for (let i = 1; i < input.length - 1; i++) {
    if (tree[input[i]]) continue;

    addNode(tree, input[0], input[i], res);
  }

  console.log(res.join(' '));
});