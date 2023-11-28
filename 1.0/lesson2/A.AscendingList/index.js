// Дан список. Определите, является ли он монотонно возрастающим(то есть верно ли, что каждый элемент этого 
//   списка больше предыдущего).

// Выведите YES, если массив монотонно возрастает и NO в противном случае.

// Пример 1
// Ввод	                                Вывод
// 1 7 9                                 YES
// 
// Пример 2
// Ввод	                                Вывод
// 1 9 7                                 NO
// 
// Пример 3
// Ввод	                                Вывод
// 2 2 2                                 NO
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));

let result = 'YES';
let currentItem = list[0];
for (let i = 1; i < list.length; i += 1) {
  if (list[i] <= currentItem) {
    result = 'NO';
  }
  currentItem = list[i];
}

fs.writeFileSync('output.txt', result.toString());