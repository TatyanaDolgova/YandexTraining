// Во входном файле (вы можете читать данные из sys.stdin, подключив библиотеку sys) записан текст. Словом считается
// последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов
// или символами конца строки. Определите, сколько различных слов содержится в этом тексте.
//
// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод	                                                        Вывод
// She sells sea shells on the sea shore;                         19
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let word = '';
const set = new Set();


for (let i = 0; i < data.length; i += 1) {
  if (data[i] === ' ' || data[i] === '\n') {
    word = word.trim();
    if (word) {
      set.add(word);
      word = '';
    }
  } else {
    word += data[i];
  }
}

const result = set.size;

fs.writeFileSync('output.txt', result.toString());
