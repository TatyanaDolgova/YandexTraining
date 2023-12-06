// Дана база данных о продажах некоторого интернет-магазина. Каждая строка входного файла представляет 
// собой запись вида Покупатель товар количество, где Покупатель — имя покупателя (строка без пробелов), 
// товар — название товара (строка без пробелов), количество — количество приобретенных единиц товара. 
// Создайте список всех покупателей, а для каждого покупателя подсчитайте количество приобретенных им 
// единиц каждого вида товаров.

// Формат ввода
// Вводятся сведения о покупках в указанном формате.

// Формат вывода
// Выведите список всех покупателей в лексикографическом порядке, после имени каждого покупателя выведите 
// двоеточие, затем выведите список названий всех приобретенных данным покупателем товаров в лексикографическом 
// порядке, после названия каждого товара выведите количество единиц товара, приобретенных данным покупателем. 
// Информация о каждом товаре выводится в отдельной строке.

// Пример 1
// Ввод	
// Ivanov paper 10
// Petrov pens 5
// Ivanov marker 3
// Ivanov paper 7
// Petrov envelope 20
// Ivanov envelope 5
// Вывод
// Ivanov:
// envelope 5
// marker 3
// paper 17
// Petrov:
// envelope 20
// pens 5
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.trim().toString().split('\r\n');
const obj = {};
let result = '';

for (let i = 0; i < list.length; i++) {
  const item = list[i].split(' ');
  const product = `${item[0]} ${item[1]}`
  if (!obj[product]) {
    obj[product] = +item[2];
  } else {
    obj[product] += +item[2];
  }
}

let person = '';
for (const key of Object.keys(obj).sort()) {
  const item = key.split(' ');
  if (item[0] === person) {
    result += `${item[1]} ${obj[key]}\n`
  } else {
    person = item[0];
    result += `${person}:\n${item[1]} ${obj[key]}\n`;
  }
}
fs.writeFileSync('output.txt', result.toString());
