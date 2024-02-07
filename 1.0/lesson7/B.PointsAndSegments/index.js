// Дано n отрезков на числовой прямой и m точек на этой же прямой.Для каждой из данных точек определите, скольким отрезкам они
// принадлежат.Точка x считается принадлежащей отрезку с концами a и b, если выполняется двойное неравенство min(a, b) ≤ x ≤ max(a, b).

// Формат ввода
// Первая строка содержит два целых числа n(1 ≤ n ≤ 105) – число отрезков и m(1 ≤ m ≤ 105) – число точек.В следующих n строках по
// два целых числи ai и bi – координаты концов соответствующего отрезка.В последней строке m целых чисел – координаты точек.Все числа
// по модулю не превосходят 109

// Формат вывода
// В выходной файл выведите m чисел – для каждой точки количество отрезков, в которых она содержится.

// Пример
// Ввод
// 3 2
// 0 5
//- 3 2
// 7 10
// 1 6
// Вывод
// 2 0
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const segments = data.toString().trim().split('\n').slice(1, -1).map(line => line.split(' ').map(Number));
const points = data.toString().trim().split('\n').slice(-1)[0].split(' ').map(Number);

const events = [];

for (let i = 0; i < segments.length; i++) {
  const start = Math.min(segments[i][0], segments[i][1]);
  const finish = Math.max(segments[i][0], segments[i][1]);
  events.push([start, -1]);
  events.push([finish, 1]);
}

for (let i = 0; i < points.length; i++) {
  events.push([points[i], 0, i]);
}

events.sort((a, b) => {
  if (+a[0] !== +b[0]) {
    return +a[0] - +b[0]
  }
  return +a[1] - +b[1]
});

const result = new Array(points.length - 1);
let count = 0;

for (let i = 0; i < events.length; i++) {
  if (+events[i][1] === 1) {
    count -= 1;
  } else if (+events[i][1] === -1) {
    count += 1;
  } else {
    result[+events[i][2]] = count;
  }
}

fs.writeFileSync('output.txt', result.join(' ').toString());