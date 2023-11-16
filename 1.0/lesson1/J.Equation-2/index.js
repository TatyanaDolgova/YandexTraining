// Даны числа a, b, c, d, e, f.Решите систему линейных уравнений
// ax + by = e
// cx + dy = f


// Формат ввода
// Вводятся 6 вещественных чисел - коэффициенты уравнений.

// Формат вывода
// Вывод программы зависит от вида решения этой системы.Если система не имеет решений, то программа должна вывести 
// единственное число 0. Если система имеет бесконечно много решений, каждое из которых имеет вид y = kx + b, то программа
//  должна вывести число 1, а затем значения k и b.Если система имеет единственное решение(x0, y0), то программа должна 
// вывести число 2, а затем значения x0 и y0.Если система имеет бесконечно много решений вида x = x0, y — любое, то 
// программа должна вывести число 3, а затем значение x0.Если система имеет бесконечно много решений вида y = y0, x — 
// любое, то программа должна вывести число 4, а затем значение y0.Если любая пара чисел(x, y) является решением, то 
// программа должна вывести число 5.

// Числа x0 и y0 будут проверяться с точностью до пяти знаков после точки.

//   Пример 1
// Ввод	                                  Вывод
// 1                                      2 3 3
// 0
// 0
// 1
// 3
// 3
//
// Пример 2
// Ввод	                                  Вывод
// 1                                      1 - 1 1
// 1
// 2
// 2
// 1
// 2
// 
// Пример 3
// Ввод	                                  Вывод
// 0                                      4 0.5
// 2
// 0
// 4
// 1
// 2
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = '';
let [a, b, c, d, e, f] = list;

const determinant = (a * d) - (b * c);

if (determinant !== 0) {
  const determinantX = (e * d) - (f * b);
  const determinantY = (a * f) - (c * e);
  const x = determinantX / determinant;
  const y = determinantY / determinant;
  result = `2 ${x} ${y}`;
} else if (b === 0 && a === 0 && c === 0 && d === 0 && e === 0 && f === 0) {
  result = '5';
} else if ((a === c && b === d && e !== f) || (a !== c && b !== d && e === f && a !== d) ||
  (a === 0 && b === 0 && e !== 0) || (c === 0 && d === 0 && f !== 0)) {
  result = '0';
} else if (a === 0 && b === 0 && e === 0 && (c !== 0 || d !== 0) && (c === 0 || d === 0)) {
  if (c) {
    const x = f / c;
    result = `3 ${x}`;
  }
  if (d) {
    const y = f / d;
    result = `4 ${y}`;
  }
} else if (a === 0 && c === 0) {
  const y1 = e / b;
  const y2 = f / d;
  if (y1 === y2) {
    result = `4 ${y1}`;

  } else if (!y2 && y1 && !d) {
    result = `4 ${y1}`;
  } else if (!y1 && y2 && !b) {
    result = `4 ${y2}`;
  } else {
    result = '0';
  }
} else if (b === 0 && d === 0) {
  const x1 = e / a;
  const x2 = f / c;
  if (x1 === x2) {
    result = `3 ${x1}`;
  } else if (!x2 && x1 && !c) {
    result = `3 ${x1}`;
  } else if (!x1 && x2 && !a) {
    result = `3 ${x2}`;
  } else {
    result = '0';
  }

} else if (a === 0 && b === 0 && e === 0) {
  const k = -c / d;
  const bValue = f / d;
  result = `1 ${k} ${bValue}`;
} else {
  const k = -a / b;
  const bValue = e / b;
  result = `1 ${k} ${bValue}`;
}

fs.writeFileSync('output.txt', result.toString());