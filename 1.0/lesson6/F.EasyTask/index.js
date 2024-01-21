// Сегодня утром жюри решило добавить в вариант олимпиады еще одну, Очень Легкую Задачу.Ответственный секретарь
// Оргкомитета напечатал ее условие в одном экземпляре, и теперь ему нужно до начала олимпиады успеть сделать еще
// N копий.В его распоряжении имеются два ксерокса, один из которых копирует лист за х секунд, а другой – за y.
// (Разрешается использовать как один ксерокс, так и оба одновременно.Можно копировать не только с оригинала,
// но и с копии.) Помогите ему выяснить, какое минимальное время для этого потребуется.

// Формат ввода
// На вход программы поступают три натуральных числа N, x и y, разделенные пробелом(1 ≤ N ≤ 2 × 108, 1 ≤ x, y ≤ 10).

// Формат вывода
// Выведите одно число – минимальное время в секундах, необходимое для получения N копий.

//   Пример 1
// Ввод
// 4 1 1
// Вывод
// 3
// Пример 2
// Ввод
// 5 1 2
// Вывод
// 4
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const [n, x, y] = data.toString().trim().split(' ').map(Number);

const binarySearch = (n, x, y) => {
  let right = n * Math.max(x, y) + 1;
  let left = -1;
  let mid;

  while (right - left > 1) {
    mid = Math.floor((right + left) / 2);

    const countX = mid / x;
    const countY = mid / y;

    const countXY = Math.floor((mid - Math.min(x, y)) / x) + Math.floor((mid - Math.min(x, y)) / y) + 1;
    console.log(mid, countXY)
    if (countX >= n || countY >= n || countXY >= n) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
}

let result = binarySearch(n, x, y);
fs.writeFileSync('output.txt', result.toString());