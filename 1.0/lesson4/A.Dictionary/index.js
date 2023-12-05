// Вам дан словарь, состоящий из пар слов.Каждое слово является синонимом к парному ему
// слову.Все слова в словаре различны.Для одного данного слова определите его синоним.

// Формат ввода
// Программа получает на вход количество пар синонимов N.Далее следует N строк, каждая 
// строка содержит ровно два слова - синонима.После этого следует одно слово.

// Формат вывода
// Программа должна вывести синоним к данному слову.

//   Пример 1
// Ввод	
// 3
// Hello Hi
// Bye Goodbye
// List Array
// Goodbye
// Вывод
// Bye

// Пример 2
// Ввод	
// 1
// beep Car
// Car
// Вывод
// beep

// Пример 3
// Ввод	
// 2
// Ololo Ololo
// Numbers 1234567890
// Numbers
// Вывод
// 1234567890
// Примечания
// Эту задачу можно решить и без словарей(сохранив все входные данные в списке), но 
// решение со словарем будет более простым.
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().trim().split('\n');
const dictionary = {};
let result = '';

for (let i = 1; i < list.length - 1; i++) {
  const words = list[i].split(' ');
  dictionary[words[0]] = words[1];
  dictionary[words[1]] = words[0];
}
result = dictionary[list[list.length - 1]];
fs.writeFileSync('output.txt', result.toString());                                                                                 