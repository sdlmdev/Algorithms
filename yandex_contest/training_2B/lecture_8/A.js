// A. Бинарное дерево (вставка, поиск, обход)

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Напишите программу, которая будет реализовывать действия в бинарном дереве поиска
// «вставить» и «найти» (по значению). Программа должна обрабатывать запросы трёх видов:

// ADD n — если указанного числа еще нет в дереве, вставлять его и выводить слово «DONE»,
// если уже есть — оставлять дерево как было и выводить слово «ALREADY».

// SEARCH — следует выводить слово «YES» (если значение найдено в дереве)
// или слово «NO» (если не найдено). Дерево при этом не меняется.

// PRINTTREE — выводить все дерево, обязательно используя алгоритм, указанный в формате вывода результатов.

// Формат ввода
// В каждой строке входных данных записан один из запросов ADD n или SEARCH n или PRINTTREE.
// Гарантируется, что запросы PRINTTREE будут вызываться только в моменты, когда дерево не пустое.
// Общее количество запросов не превышает 1000, из них не более 20 запросов PRINTTREE.

// Формат вывода
// Для каждого запроса выводите ответ на него.
// Для запросов ADD и SEARCH — соответствующее слово в отдельной строке.
// На запрос PRINTTREE надо выводить дерево, обязательно согласно такому алгоритму:

// 1) Распечатать левое поддерево
// 2) Вывести количество точек, равное глубине узла
// 3) Вывести значение ключа
// 4) Распечатать правое поддерево

// Пример
// Ввод              Вывод  
// ADD 2             DONE
// ADD 3             DONE
// ADD 2             ALREADY
// SEARCH 2          YES
// ADD 5             DONE
// PRINTTREE         2
// SEARCH 7          .3
//                   ..5
//                   NO

const addNode = (treeData, root, val) => {
  if (treeData[root][0] > val) {
    if (treeData[root][1] === -1) {
      treeData[root][1] = val;
      treeData[val] = [val, -1, -1];

      console.log('DONE');
    } else {
      addNode(treeData, treeData[root][1], val);
    }
  } else {
    if (treeData[root][2] === -1) {
      treeData[root][2] = val;
      treeData[val] = [val, -1, -1];

      console.log('DONE');
    } else {
      addNode(treeData, treeData[root][2], val);
    }
  }
};

const searchNode = (treeData, root, val) => {
  if (root === -1 || root === undefined) {
    return false;
  }

  if (treeData[root][0] == val) {
    return true;
  }

  return searchNode(treeData, treeData[root][1], val) || searchNode(treeData, treeData[root][2], val);
};

const printTree = (treeData, root, depth = 0) => {
  if (root === -1) {
    return;
  }

  let dots = '.'.repeat(depth);

  printTree(treeData, treeData[root][1], depth + 1);

  if (depth === 0) {
    console.log(treeData[root][0]);
  } else {
    console.log(dots + treeData[root][0]);
  }

  printTree(treeData, treeData[root][2], depth + 1);
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tree = [];
let root;

readline.on('line', line => {
  let [action, num] = line.trim().split(' ');
  num = +num;

  if (action === 'ADD') {
    if (tree.length === 0) {
      tree[num] = [num, -1, -1]
      root = num;

      console.log('DONE');
    } else {
      if (tree[num]) {
        console.log('ALREADY');
      } else {
        addNode(tree, root, num);
      }
    }
  } else if (action === 'SEARCH') {
    console.log(searchNode(tree, root, num) ? 'YES' : 'NO');
  } else {
    printTree(tree, root);
  }
});