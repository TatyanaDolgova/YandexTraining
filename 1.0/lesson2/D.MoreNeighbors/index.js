// Дан список чисел. Определите, сколько в этом списке элементов, которые больше двух своих соседей и 
// выведите количество таких элементов.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	                               Вывод
// 1 2 3 4 5                             0
// 
// Пример 2
// Ввод	                               Вывод
// 5 4 3 2 1                             0
// 
// Пример 3
// Ввод	                               Вывод
// 1 5 1 5 1                             2                
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));

let result = 0;
let prev = list[0];
let next = list[2];

for (let i = 1; i < list.length - 1; i++) {
  if (list[i] > prev && list[i] > next) {
    result += 1;
  }
  prev = list[i];
  next = list[i + 2];
}

fs.writeFileSync('output.txt', result.toString());