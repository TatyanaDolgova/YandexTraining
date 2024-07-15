// Реализуйте бинарное дерево поиска для целых чисел. Программа получает на вход последовательность целых чисел и строит из них дерево. 
// Элементы в деревья добавляются в соответствии с результатом поиска их места. Если элемент уже существует в дереве, добавлять его не 
// надо. Балансировка дерева не производится.

// Формат ввода
// На вход программа получает последовательность натуральных чисел. Последовательность завершается числом 0, которое означает конец
//  ввода, и добавлять его в дерево не надо.

// Формат вывода
// Выведите единственное число – высоту получившегося дерева.

// Пример
// Ввод	                     Вывод
// 7 3 2 1 9 5 4 6 8 0       4

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
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  height() {
    return this.getHeight(this.root);
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    } else {
      const leftHeight = this.getHeight(node.left);
      const rightHeight = this.getHeight(node.right);

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

const bst = new BinarySearchTree();

for (let point of points) {
  bst.insert(point);
}

fs.writeFileSync('output.txt', bst.height().toString());