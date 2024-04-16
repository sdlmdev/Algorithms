// 3 задание
// Ограничение времени
// 1 секунда
// Ограничение памяти
// 256 МБ

// Понятная файловая система — залог успеха любой операционной системы. К сожалению, не каждая файловая система может похвастаться таким свойством. Но, как говорится, если что-то хочешь сделать хорошо — сделай это сам! Хочется иметь удобное для просмотра представление директорий, чтобы можно было видеть, какие директории в какие вложены.

// Для этого требуется по списку директорий вывести их перечисление в алфавитном порядке. При этом вложенные директории должны быть выведены с отступом на два пробела больше, чем у родительской.

// Формат входных данных
// В первой строке дано число n — количество директорий (1≤n≤10**5). В следующих n строках по одному в строке заданы абсолютные пути ко всем директориям, каждый абсолютный путь — это последовательность вложенных папок, начиная с корневой, разделенная символами "/".

// Гарантируется, что первая директория во всех путях одинаковая и имеет непустое имя. Имена всех директорий состоят из маленьких латинских букв и имеют длину не более 10. Гарантируется, что если директория выведена, то выведены и все, в которые она вложена.

// Формат выходных данных 
// Выведите перечисление всех директорий, в котором все директории внутри одной упорядочены по алфавиту, вложенные идут сразу после родительской и имеют отступ на два пробела больше, чем у нее. 

// Примеры данных
// Пример 1
// Ввод
// 6
// root/a
// root/a/b
// root/c/x
// root/a/b/c
// root
// root/c
// Вывод
// root
//   a
//     b
//       c
//   c
//     x

// Пример 2
// Ввод
// 4
// a/b/c/d
// a/b
// a/b/c
// a
// Вывод
// a
//   b
//     c
//       d

class Node {
  constructor(name) {
    this.name = name;
    this.children = {};
  }

  addChild(path) {
    if (path.length === 0) return;

    const [head, ...tail] = path;

    if (!this.children[head]) {
      this.children[head] = new Node(head);
    }

    this.children[head].addChild(tail);
  }
}

const buildTree = (paths) => {
  const root = new Node(null);

  for (const path of paths) {
    root.addChild(path.split('/'));
  }

  return root;
};

const printTree = (node, indent = '') => {
  if (node.name !== null) {
    console.log(indent + node.name);
    indent += '  ';
  }

  const childrenNames = Object.keys(node.children).sort();

  for (const name of childrenNames) {
    printTree(node.children[name], indent);
  }
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let n, dirs = [];

readline.on('line', line => {
  if (lineCnt === 0) {
    n = Number(line);
  } else {
    dirs.push(line);
  }

  if (lineCnt === n) {
    readline.close();
    const tree = buildTree(dirs);
    printTree(tree);
  }

  lineCnt += 1;
});