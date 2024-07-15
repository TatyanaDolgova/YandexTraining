// B. Глубина добавляемых элементов

// В бинарное дерево поиска добавляются элементы. Выведите глубину для каждого добавленного элемента в том 
// порядке, как они добавлялись. Если элемент уже есть в дереве, то ничего добавлять и выводить не нужно. 
// Глубиной называется расстояние от корня дерева до элемента включительно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем. Сам ноль в последовательность не входит. 
// По данной последовательности требуется построить дерево.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод	                                Вывод
// 7 3 2 1 9 5 4 6 8 0                   1 2 3 4 2 3 4 4 3 

const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const points = data.toString().trim().split(' ').map(Number).slice(0, -1);

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return 1;
    } else {
      return this.insertNode(this.root, newNode, 1);
    }
  }

  insertNode(node, newNode, depth) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
        return depth + 1;
      } else {
        return this.insertNode(node.left, newNode, depth + 1);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
        return depth + 1;
      } else {
        return this.insertNode(node.right, newNode, depth + 1);
      }
    }
  }
}

const bst = new BinarySearchTree();

const result = [];

for (let point of points) {
  const depth = bst.insert(point);
  result.push(depth)
}

fs.writeFileSync('output.txt', result.join(' '));
