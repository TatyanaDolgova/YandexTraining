// По последовательности чисел во входных данных определите ее вид:

// CONSTANT – последовательность состоит из одинаковых значений
// ASCENDING – последовательность является строго возрастающей
// WEAKLY ASCENDING – последовательность является нестрого возрастающей
// DESCENDING – последовательность является строго убывающей
// WEAKLY DESCENDING – последовательность является нестрого убывающей
// RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов
// Формат ввода
// По одному на строке поступают числа последовательности ai, |ai| ≤ 109.

// Признаком окончания последовательности является число -2× 109. Оно в последовательность не входит.

// Формат вывода
// В единственной строке выведите тип последовательности.

// Пример
// Ввод	                                         Вывод
// -530                                         CONSTANT
// -530
// -530
// -530
// -530
// -530
// -2000000000
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));

let result = 'CONSTANT';
let current = list[0];

for (let i = 1; i < list.length - 2; i++) {
  if (current === list[i] && result === 'CONSTANT') {
  } else if (current < list[i] && i === 1 && (result === 'CONSTANT' || result === 'ASCENDING')) {
    result = 'ASCENDING';
  } else if (current > list[i] && i === 1 && (result === 'CONSTANT' || result === 'DESCENDING')) {
    result = 'DESCENDING';
  } else if (i > 1 && current < list[i] && result === 'CONSTANT') {
    result = 'WEAKLY ASCENDING';
  } else if (i > 1 && current > list[i] && result === 'CONSTANT') {
    result = 'WEAKLY DESCENDING';
  } else if (current === list[i] && (result === 'DESCENDING')) {
    result = 'WEAKLY DESCENDING';
  } else if (current === list[i] && result === 'ASCENDING') {
    result = 'WEAKLY ASCENDING';
  } else if ((current < list[i] && (result === 'DESCENDING' || result === 'WEAKLY DESCENDING'))
    || (current > list[i] && (result === 'ASCENDING' || result === 'WEAKLY ASCENDING'))) {
    result = 'RANDOM';
  }
  current = list[i];
}

fs.writeFileSync('output.txt', result.toString());
