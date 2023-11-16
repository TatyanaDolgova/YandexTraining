// За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D × E. Замок Иф сложен из 
// кирпичей, размером A × B × C. Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие, если стороны 
// кирпича должны быть параллельны сторонам отверстия.

// Формат ввода
// Программа получает на вход числа A, B, C, D, E.

// Формат вывода
// Программа должна вывести слово YES или NO.

// Пример 1
// Ввод	                                Вывод
// 1                                     YES
// 1
// 1
// 1
// 1

// Пример 2
// Ввод	                                Вывод
// 2                                     NO
// 2
// 2
// 1
// 1

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = '';
let [a, b, c, d, e] = list;

if (a <= d && b <= e) {
  result = "YES";
} else if (a <= e && b <= d) {
  result = "YES";
} else if (a <= d && c <= e) {
  result = "YES";
} else if (a <= e && c <= d) {
  result = "YES";
} else if (b <= d && c <= e) {
  result = "YES";
} else if (b <= e && c <= d) {
  result = "YES";
} else {
  result = "NO";
}

fs.writeFileSync('output.txt', result.toString());