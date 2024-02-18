// C. Родословная: LCA

// Ограничение времени 2 секунды
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В генеалогическом древе определите для двух элементов их наименьшего общего предка.
// Наименьшим общим предком элементов A и B является такой элемент C, что С является предком A, C
// является предком B, при этом глубина C является наибольшей из возможных.
// При этом элемент считается своим собственным предком.

// Формат ввода
// Формат входных данных аналогичен предыдущей задаче.

// Формат вывода
// Для каждого запроса выведите наименьшего общего предка данных элементов.

// Пример
// Ввод	                         Вывод
// 9                             Paul_I
// Alexei Peter_I                Peter_I
// Anna Peter_I                  Anna
// Elizabeth Peter_I
// Peter_II Alexei
// Peter_III Anna
// Paul_I Peter_III
// Alexander_I Paul_I
// Nicholaus_I Paul_I
// Alexander_I Nicholaus_I
// Peter_II Paul_I
// Alexander_I Anna

const checkParent = (treeData, first, second, root) => {
  const firstParents = new Set().add(first);
  const secondParents = new Set().add(second);

  while (first || second) {
    if (firstParents.has(second)) {
      return second;
    }

    if (secondParents.has(first)) {
      return first;
    }

    if (first) {
      first = treeData.get(first);
      firstParents.add(first);
    }

    if (second) {
      second = treeData.get(second);
      secondParents.add(second);
    }
  }

  return root;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tree = new Map();
let n;
let root;

readline.on('line', (line) => {
  if (!n) {
    n = Number(line) - 1;
  } else {
    if (tree.size < n) {
      const [child, parent] = line.split(' ');

      tree.set(child, parent);
    } else {
      if (!root) {
        tree.forEach((value, key) => {
          if (!tree.has(value)) {
            return root = value;
          }
        });
      } 

      const [name1, name2] = line.split(' ');

      console.log(checkParent(tree, name1, name2, root));
    }
  }
});