// Каждый из N школьников некоторой школы знает Mi языков. Определите, какие языки знают все школьники и 
// языки, которые знает хотя бы один из школьников.

// Формат ввода
// Первая строка входных данных содержит количество школьников N. Далее идет N чисел Mi, после каждого из 
// чисел идет Mi строк, содержащих названия языков, которые знает i-й школьник. Длина названий языков не 
// превышает 1000 символов, количество различных языков не более 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.

// Формат вывода
// В первой строке выведите количество языков, которые знают все школьники. Начиная со второй строки - 
// список таких языков. Затем - количество языков, которые знает хотя бы один школьник, на следующих 
// строках - список таких языков.

// Пример
// Ввод	                                   Вывод
// 3                                        1
// 3                                      English
// Russian                                  3
// English                                Russian
// Japanese                               Japanese
// 2                                      English
// Russian
// English
// 1
// English
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().trim().split('\r\n');
const map = new Map();

for (let i = 2; i < list.length; i += 1) {
  if (isNaN(list[i])) {
    if (!map.has(list[i])) {
      map.set(list[i], 1)
    } else {
      const count = map.get(list[i]) + 1;
      map.set(list[i], count);
    }
  }
}

const allLang = [];
const lang = [];

for (let items of map) {
  if (+items[1] === +list[0]) {
    allLang.push(items[0]);
    lang.push(items[0]);
  } else {
    lang.push(items[0]);
  }
}
result = `${allLang.length}
${allLang.join('\n')}
${lang.length}
${lang.join('\n')}`;
fs.writeFileSync('output.txt', result.toString());






