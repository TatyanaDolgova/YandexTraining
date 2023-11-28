// Широко известна следующая задача для младших школьников. Три черепахи ползут по дороге. Одна черепаха 
// говорит: “Впереди меня две черепахи”. Другая черепаха говорит: “Позади меня две черепахи”. Третья черепаха 
// говорит: “Впереди меня две черепахи и позади меня две черепахи”. Как такое может быть? Ответ: третья 
// черепаха врет! По дороге одна за другой движутся N черепах. Каждая черепаха говорит фразу вида: “Впереди 
// меня ai черепах, а позади меня bi черепах”. Ваша задача определить, сколько самое большее количество 
// черепах могут говорить правду.

// Формат ввода
// В первой строке вводится целое число N (1 ≤ N ≤ 10000) строк, содержащих целые числа ai и bi, по модулю 
// не превосходящие 10000, описывающие высказывание i-ой черепахи.

// Формат вывода
// Выведите целое число M – максимальное количество черепах, которые могут говорить правду.

// Пример 1
// Ввод	                                        Вывод
// 3                                               2
// 2 0       
// 0 2
// 2 2

// Пример 2
// Ввод	                                        Вывод
// 5                                               5
// 0 4
// 1 3
// 2 2
// 3 1
// 4 0

// Пример 3
// Ввод	                                         Вывод
// 10                                               4
// 9 1
// 8 1
// 7 2
// 6 2
// 5 3
// 4 4
// 3 6
// 2 7
// 1 9
// 0 8
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().trim().split('\n');
const numberOfTartles = +list[0];
const set = new Set();
let result = 0;
for (let i = 1; i < list.length; i += 1) {
  const numbers = list[i].split(' ');
  const count = +numbers[0] + +numbers[1];
  if (Math.abs(numbers[0]) === +numbers[0] && Math.abs(numbers[1]) === +numbers[1]) {
    if (count === numberOfTartles - 1) {
      set.add(numbers[0]);
    }
  }

}
result = set.size;

fs.writeFileSync('output.txt', result.toString());