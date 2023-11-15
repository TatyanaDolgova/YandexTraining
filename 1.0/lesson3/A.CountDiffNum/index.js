// Дан список чисел, который может содержать до 100000 чисел.Определите, сколько в нем встречается различных чисел.

// Формат ввода
// Вводится список целых чисел.Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

//   Ввод	               Вывод
// 1 2 3 2 1                    3

// Пример 2
//   Ввод                     Вывод
// 1 2 3 4 5 6 7 8 9 10         10

// Пример 3
//   Ввод	                 Вывод
// 1 2 3 4 5 1 2 1 2 7 3        6




const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.trim().split(' ');

const set = new Set();
list.forEach(item => set.add(item));
let result = set.size;
fs.writeFileSync('output.txt', result.toString());