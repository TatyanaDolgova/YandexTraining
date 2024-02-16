// Экзамен по берляндскому языку проходит в узкой и длинной аудитории. На экзамен пришло N студентов. Все они посажены в ряд. Таким
// образом, позиция каждого человека задается координатой на оси Ox (эта ось ведет вдоль длинной аудитории). Два человека 
// разговаривать, если расстояние между ними меньше или равно D. Какое наименьшее количество типов билетов должен подготовить 
// преподаватель, чтобы никакие два студента с одинаковыми билетами не могли разговаривать? Выведите способ раздачи преподавателем
// билетов.

// Формат ввода
// В первой строке входного файла содержится два целых числа N, D (1 ≤ N ≤ 10000; 0 ≤ D ≤ 106). Вторая строка содержит последовательность
// различных целых чисел X1, X2, ..., XN, где Xi (0 ≤ Xi ≤ 106) обозначает координату вдоль оси Ox i-го студента

// Формат вывода
// В первую строчку выходного файла выведите количество вариантов, а во вторую, разделяя пробелами, номера вариантов студентов в том
// порядке, в каком они перечислены во входном файле.

// Пример 1
// Ввод	
// 4 1
// 11 1 12 2
// Вывод
// 2
// 1 1 2 2 

// Пример 2
// Ввод	
// 4 0
// 11 1 12 2
// Вывод
// 1
// 1 1 1 1 

const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const distance = +data.toString().trim().split('\n')[0].split(' ')[1];
const points = data.toString().trim().split('\n')[1].split(' ').map(Number);

const events = [];

for (let i = 0; i < points.length; i++) {
  events.push([points[i], -1, i]);
  events.push([points[i] + distance, 1, i]);
}
events.sort((a, b) => {
  if (+a[0] !== +b[0]) {
    return +a[0] - +b[0]
  }
  return +a[1] - +b[1]
});

let count = 0;
let max = 0;
const variants = new Array(points.length);
const numbers = [];

for (let i = points.length; i > 0; i--) {
  numbers.push(i);
}

for (let i = 0; i < events.length; i++) {
  if (+events[i][1] === -1) {
    count += 1;

    if (count > max) {
      max = count;
    }

    console.log(events[i][2], numbers)
    variants[events[i][2]] = numbers.pop();
  }

  if (+events[i][1] === 1) {
    numbers.push(variants[events[i][2]])
    count -= 1;
  }
}

const result = [];

result.push(max);

result.push(variants.join(' '));

fs.writeFileSync('output.txt', result.join('\n').toString());