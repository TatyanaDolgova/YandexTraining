// Даны два списка чисел, которые могут содержать до 10000 чисел каждый. Выведите все числа, которые входят как в первый, так и во второй список в порядке возрастания. Примечание. И даже эту задачу на Питоне можно решить в одну строчку.

// Формат ввода
// Вводятся два списка целых чисел. Все числа каждого списка находятся на отдельной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	                        Вывод
// 1 3 2                         2 3
// 4 3 2

// Пример 2
// Ввод	                         Вывод
// 1 2 6 4 5 7                    2 4
// 10 2 3 4 8



const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.trim().split('\r\n');
let result = [];
const arr1 = list[0].split(' ');
const arr2 = list[1].split(' ');
const map = new Map();
arr1.forEach(item => map.set(item, false));
arr2.forEach((item) => {
  if (map.has(item)) {
    map.set(item, true);
  }
})
map.forEach((value, key) => {
  if (value === true) {
    result.push(+key);
  }
})

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       result.push(arr1[i]);
//       break;
//     }
//   }
// }

fs.writeFileSync('output.txt', result.sort((a, b) => a - b).join(' ').toString());