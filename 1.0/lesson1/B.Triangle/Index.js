// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO.

// Треугольник — это три точки, не лежащие на одной прямой.

// Формат ввода
// Вводятся три натуральных числа.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	                                Вывод
// 3                                     YES
// 4
// 5

// Пример 2
// Ввод	                                Вывод
// 3                                     YES
// 5
// 4

// Пример 3
// Ввод	                                Вывод
// 4                                     YES
// 5
// 3

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const lines = data.toString().split('\n');
const arr = lines.map((item) => Number(item));
let result = '';

if (arr[0] + arr[1] > arr[2] && arr[1] + arr[2] > arr[0] &&
  arr[0] + arr[2] > arr[1]) {
  result = 'YES';
} else {
  result = 'NO';
}

fs.writeFileSync('output.txt', result.toString());