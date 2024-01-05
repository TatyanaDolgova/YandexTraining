// Студенты одного из вузов спроектировали робота для частичной автоматизации процесса сборки авиационного
// двигателя.

// В процессе сборки двигателя могут встречаться операции 26 типов, которые обозначаются строчными
// буквами латинского алфавита. Процесс сборки состоит из N операций.

// Предполагается использовать робота один раз для выполнения части подряд идущих операций из процесса
// сборки.

// Память робота состоит из K ячеек, каждая из которых содержит одну операцию. Операции выполняются
// последовательно, начиная с первой, в том порядке, в котором они расположены в памяти. Выполнив
// последнюю из них, робот продолжает работу с первой. Робота можно остановить после любой операции.
// Использование робота экономически целесообразно, если он выполнит хотя бы K + 1 операцию.

// Требуется написать программу, которая по заданному процессу сборки определит количество экономически
// целесообразных способов использования робота.

// Формат ввода
// В первой строке входного файла записано число K > 0 — количество операций, которые можно записать в
// память робота.

// Вторая строка состоит из N > K строчных латинских букв, обозначающих операции — процесс
// сборки двигателя. Операции одного и того же типа обозначаются одной и той же буквой. N ≤ 200000

// Формат вывода
// Выходной файл должен содержать единственное целое число — количество экономически целесообразных
// способов использования робота.

// Пример 1
// Ввод
// 2
// zabacabab
// Вывод
// 5
// Пример 2
// Ввод
// 2
// abc
// Вывод
// 0
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\r\n');
const memory = +list[0];
const action = list[1];
let result = 0;

let i = memory;
let prevLen = 0;

while (i < action.length) {
  if (action[i] === action[i - memory]) {
    prevLen++;
    result += prevLen
  }

  if (action[i] !== action[i - memory]) {
    prevLen = 0;
  }
  i++;
}

