// Решите в целых числах уравнение:√ax + b = c,
//a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

// Формат ввода
// Вводятся три числа a, b и c по одному в строке.

// Формат вывода
// Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION(заглавными буквами), если
// решений нет.Если решений бесконечно много, вывести MANY SOLUTIONS.

// Пример 1
// Ввод	                             Вывод
// 1                                   0
// 0
// 0

// Пример 2
// Ввод	                             Вывод
// 1                                   7
// 2
// 3

// Пример 3
// Ввод                              	Вывод
// 1                                NO SOLUTION
// 2
// - 3

const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let lines = data.toString().split('\n');
let result = 0;
const [a, b, c] = lines;
if (((c ** 2 - b) === 0 && Number(a) !== 0)) {
  result = (c ** 2 - b) / a;
} else if ((c ** 2 - b) === 0 && Number(a) === 0) {
  result = 'MANY SOLUTIONS'
} else if (Number(c) < 0 || Number(a) === 0) {
  result = 'NO SOLUTION';
} else {
  result = (c ** 2 - b) / a;
  if (!Number.isInteger(result)) {
    result = 'NO SOLUTION';
  }
}

fs.writeFileSync('output.txt', result.toString());