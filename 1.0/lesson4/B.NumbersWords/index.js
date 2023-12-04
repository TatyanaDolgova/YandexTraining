// Во входном файле (вы можете читать данные из файла input.txt) записан текст. Словом считается 
// последовательность непробельных символов идущих подряд, слова разделены одним или большим числом 
// пробелов или символами конца строки. Для каждого слова из этого текста подсчитайте, сколько раз оно 
// встречалось в этом тексте ранее.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод	
// one two one tho three
// Вывод
// 0 0 1 0 0 
// 
// Пример 2
// Ввод	
// She sells sea shells on the sea shore;
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.
// Вывод
// 0 0 0 0 0 0 1 0 0 1 0 0 1 0 2 2 0 0 0 0 1 2 3 3 1 1 4 0 1 0 1 2 4 1 5 0 0 
// 
// Пример 3
// Ввод	
// aba aba; aba @?"
// Вывод
// 0 0 1 0 

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n').map(item => item.trim().split(' ')
  .map(elem => elem.trim())).flat();
let countWord = {};
let result = [];
for (let i = 0; i < list.length - 1; i++) {
  if (list[i]) {
    if (list[i] in countWord) {
      countWord[list[i]] += 1;
      result.push(countWord[list[i]]);
    } else {
      countWord[list[i]] = 0;
      result.push(countWord[list[i]]);
    }
  }
}
fs.writeFileSync('output.txt', result.join(' '));     