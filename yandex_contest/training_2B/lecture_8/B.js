// B. Родословная: предки и потомки

// Ограничение времени	2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В генеалогическом древе у каждого человека, кроме родоначальника, есть ровно один родитель.
// Каждом элементу дерева сопоставляется целое неотрицательное число, называемое высотой.
// У родоначальника высота равна 0, у любого другого элемента высота на 1 больше, чем у его родителя.
// Даны два элемента в дереве. Определите, является ли один из них потомком другого.

// Формат ввода
// Программа получает на вход число элементов в генеалогическом древе N.
// Далее следует N−1 строка, задающие родителя для каждого элемента древа, кроме родоначальника.
// Каждая строка имеет вид имя_потомка имя_родителя.

// Далее до конца файла идут строки, содержащие имена двух элементов дерева.

// Формат вывода
// Для каждого такого запроса выведите одно из трех чисел:
// 1, если первый элемент является предком второго, 2, если второй является предком первого или 0,
// если ни один из них не является предком другого.

// Пример
// Ввод	                 Вывод
// 9                     1 2 0 
// Alexei Peter_I
// Anna Peter_I
// Elizabeth Peter_I
// Peter_II Alexei
// Peter_III Anna
// Paul_I Peter_III
// Alexander_I Paul_I
// Nicholaus_I Paul_I
// Anna Nicholaus_I
// Peter_II Peter_I
// Alexei Paul_I

const checkParent = (treeData, child, parent) => {
  while (child) {
    if (child === parent) {
      return true;
    }

    child = treeData.get(child);
  }

  return false;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tree = new Map();
let n;
const res = [];

readline.on('line', (line) => {
  if (!n) {
    n = Number(line) - 1;
  } else {
    if (tree.size < n) {
      const [child, parent] = line.split(' ');

      tree.set(child, parent);
    } else {
      const [name1, name2] = line.split(' ');

      if (checkParent(tree, name1, name2)) {
        res.push(2);
      } else if (checkParent(tree, name2, name1)) {
        res.push(1);
      } else {
        res.push(0);
      }
    }
  }
});

readline.on('close', () => {
  console.log(res.join(' '));
});
