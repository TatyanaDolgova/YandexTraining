// Напишите программу, которая находит в массиве элемент, самый близкий по величине к  данному числу.

// Формат ввода
// В первой строке задается одно натуральное число N, не превосходящее 1000 – размер массива. Во второй 
// строке содержатся N чисел – элементы массива (целые числа, не превосходящие по модулю 1000). В третьей 
// строке вводится одно целое число x, не превосходящее по модулю 1000.

// Формат вывода
// Вывести значение элемента массива, ближайшее к x. Если таких чисел несколько, выведите любое из них.

// Пример 1
// Ввод	                                      Вывод
// 5                                            5
// 1 2 3 4 5
// 6
// 
// Пример 2
// Ввод	                                      Вывод
// 5                                           3
// 5 4 3 2 1
// 3
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');

let num = list[2];
let array = list[1].split(' ').map(item => Number(item));
let difference = Math.abs(array[0] - num);
let count = array[0];

for (let i = 1; i < array.length; i++) {
  if (Math.abs(array[i] - num) < difference) {
    difference = Math.abs(array[i] - num)
    count = array[i];
  }
}

fs.writeFileSync('output.txt', count.toString());