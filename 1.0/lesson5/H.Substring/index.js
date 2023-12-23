// В этой задаче Вам требуется найти максимальную по длине подстроку данной строки, такую что каждый символ
// встречается в ней не более k раз.

// Формат ввода
// В первой строке даны два целых числа n и k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n ) , где n – количество
// символов в строке. Во второй строке n символов – данная строка, состоящая только из строчных
// латинских букв.

// Формат вывода
// В выходной файл выведите два числа – длину искомой подстроки и номер её первого символа. Если
// решений несколько, выведите любое.

// Пример 1
// Ввод
// 3 1
// abb
// Вывод
// 2 1
// Пример 2
// Ввод
// ababa
// Вывод
// 5 2
// 4 1
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\r\n');
const len = +list[0].split(' ')[1]
let sim = list[1].split('');
let maxLength = 0;
let IRes = 0;

const dict = new Map();

let i = 0;
let j = 0;

while (i < sim.length && j < sim.length) {
  if (!dict.has(sim[j])) {
    dict.set(sim[j], 0);
  }
  let value = dict.get(sim[j]) + 1;
  if (value <= len) {
    dict.set(sim[j], value);
    j++;
  } else {
    let value2 = dict.get(sim[i]) - 1;
    dict.set(sim[i], value2);
    i++;
  }
  if (j - i > maxLength) {
    maxLength = j - i;
    IRes = i + 1;
  }
}

result = `${maxLength} ${IRes}`;

fs.writeFileSync('output.txt', result.toString());