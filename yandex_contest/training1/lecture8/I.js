
// I. Родословная: число потомков

// Ограничение времени 1 секунда
// Ограничение памяти 64Mb
// Ввод стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В генеалогическом древе у каждого человека, кроме родоначальника, есть ровно один родитель.
// Для каждого элемента дерева определите число всех его потомков (не считая его самого).

// Формат ввода
// Программа получает на вход число элементов в генеалогическом древе N.
// Далее следует N−1 строка, задающие родителя для каждого элемента древа, кроме родоначальника.
// Каждая строка имеет вид имя_потомка имя_родителя.

// Формат вывода
// Выведите список всех элементов в лексикографическом порядке,
// для каждого элемента выводите количество всех его потомков.

// Пример
// Ввод                       Вывод
// 9                          Alexander_I 0
// Alexei Peter_I             Alexei 1
// Anna Peter_I               Anna 4
// Elizabeth Peter_I          Elizabeth 0
// Peter_II Alexei            Nicholaus_I 0
// Peter_III Anna             Paul_I 2
// Paul_I Peter_III           Peter_I 8
// Alexander_I Paul_I         Peter_II 0
// Nicholaus_I Paul_I         Peter_III 3

// Примечания
// Если вы используете рекурсию, то вам может быть полезно добавление в начало программы следующих строк:
// import sys
// sys.setrecursionlimit(100000)

const fillTree = (tree, people, parentsData, childrenData) => {
  for (let i = 0; i < people.length; i++) {
    const [child, parent] = people[i].split(' ');

    if (!tree[parent]) {
      tree[parent] = [];
    }

    tree[parent].push(child);
    parentsData.add(parent);
    childrenData.add(child);
  }
};

const cntDescendants = (tree, rootData, descendantsData) => {
  const stack = [rootData];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack[stack.length - 1];

    if (tree[node]) {
      let allVisited = true;

      for (let child of tree[node]) {

        if (!visited.has(child)) {
          stack.push(child);
          allVisited = false;
        }
      }
      if (allVisited) {
        visited.add(node);

        let cnt = 0;

        for (let child of tree[node]) {
          cnt += 1 + descendantsData[child];
        }

        descendantsData[node] = cnt;
        stack.pop();
      }
    } else {
      visited.add(node);
      descendantsData[node] = 0;
      stack.pop();
    }
  }
};

const fs = require('fs');
const [n, ...input] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const parentChild = {};
const descendants = {};
const parents = new Set();
const children = new Set();

fillTree(parentChild, input, parents, children);

let root = [...parents].filter(parent => !children.has(parent))[0];

cntDescendants(parentChild, root, descendants);

fs.writeFileSync('output.txt', Object.entries(descendants).sort().map(el => `${el[0]} ${el[1]}`).join('\n'));