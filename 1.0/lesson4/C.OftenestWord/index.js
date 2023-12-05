// Дан текст. Выведите слово, которое в этом тексте встречается чаще всего. Если таких слов 
// несколько, выведите то, которое меньше в лексикографическом порядке.
// 
// Формат ввода
// Вводится текст.
// 
// Формат вывода
// Выведите ответ на задачу.
// 
// Пример 1
// Ввод
// apple orange banana banana orange
// Вывод
// banana
// 
// Пример 2
// Ввод
// oh you touch my tralala mmm my ding ding dong
// Вывод
// ding
// 
// Пример 3
// Ввод
// q w e r t y u i o p
// a s d f g h j k l
// z x c v b n m
// Вывод
// a
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n').map(item => item.trim().split(' ')
  .map(elem => elem.trim())).flat();

let countWord = {};
let result = [];
let maxCount = 0;
for (let i = 0; i < list.length - 1; i++) {
  if (list[i]) {
    if (list[i] in countWord) {
      countWord[list[i]] += 1;
    } else {
      countWord[list[i]] = 0;
    }
  }
}

for (key in countWord) {
  if (countWord[key] > maxCount) {
    result = [];
    result.push(key);
    maxCount = countWord[key];
  } else if (countWord[key] === maxCount) {
    result.push(key);
  }
}

result.sort();

fs.writeFileSync('output.txt', result[0].toString());  