// Александр недавно увлекся горным туризмом. Ему уже надоело покорять отдельные горные пики, и он 
// собирается покорить самую настоящую горную цепь!

// Напомним, что Александр живет в плоском мире. Горная цепь состоит из отрезков, соединяющих точки на
// плоскости, каждая из которых находится строго правее предыдущей (x-координата следующей точки больше, 
// чем у предыдущей). Трассой на горной цепи называется её часть между двумя фиксированными 
// концами отрезков.

// Участок, на котором при движении по трассе координата y (высота) всегда возрастает, называется подъемом, 
// величиной подъема называется разность высот между начальной и конечной точками участка.

// Туристическая компания предлагает на выбор несколько трасс на одной горной цепи. Александр из-за 
// финансовых трудностей может выбрать для поездки только одну из этих трасс. Вы решили помочь ему с 
// выбором. Александру важно для каждой трассы определить суммарную высоту подъемов на ней. Обратите 
// внимание, что трасса может идти как слева-направо, так и справа-налево.

// Формат ввода
// В первой строке входного файла содержится единственное число N — количество точек ломаной, задающей 
// горную цепь (1 ≤ N ≤ 30 000). Далее в N строках содержатся описания точек, каждое из которых состоит 
// из двух целых чисел, xi и yi (1 ≤ xi, yi ≤ 30 000).

// В следующей строке находится число M — количество трасс (1 ≤ M ≤ 30 000).

// Далее в M строках содержатся описания трасс. Каждое описание представляет собой два целых числа, 
// si и fi, они обозначают номера вершин начала и конца трассы, соответственно (1 ≤ si ≤ N, 1 ≤ fi ≤ N).
// Начало и конец трассы могут совпадать.

// Гарантируется, что во входном файле задана именно горная цепь.

// Формат вывода
// Для каждой трассы выведите одно число — суммарную высоту подъемов на данной трассе.

// Пример 1
// Ввод	
// 7
// 2 1
// 4 5
// 7 4
// 8 2
// 9 6
// 11 3
// 15 3
// 1
// 2 6
// Вывод
// 4
// Пример 2
// Ввод	
// 6
// 1 1
// 3 2
// 5 6
// 7 2
// 10 4
// 11 1
// 3
// 5 6
// 1 4
// 4 2
// Вывод
// 0
// 5
// 4
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\n');

let result = [];
const arrClimbs = [0];
const arrRise = [0]
const trails = list.slice(+list[0] + 2).map(item => item.trim());
let climbs = 0;
let rise = 0;


for (let i = 2; i <= +list[0]; i++) {
  let prevXC = +list[i - 1].split(' ')[1];
  const x = +list[i].split(' ')[1];
  if (prevXC < x) {
    climbs += x - prevXC;
    prevXC = x;
  }
  arrClimbs.push(climbs);
}

for (let i = +list[0] - 1; i >= 1; i--) {
  let prevXR = +list[i + 1].split(' ')[1];
  const x = +list[i].split(' ')[1];
  if (prevXR < x) {
    rise += x - prevXR;
    prevXR = x;
  }

  arrRise.push(rise);
}

arrRise.reverse();

for (let i = 0; i < trails.length; i++) {
  const start = +trails[i].split(' ')[0];
  const finish = +trails[i].split(' ')[1];
  if (start < finish) {
    const count = arrClimbs[finish - 1] - arrClimbs[start - 1];
    result.push(count);
  }
  if (start > finish) {
    const count = arrRise[finish - 1] - arrRise[start - 1];
    result.push(count);
  }
  if (start === finish) {
    result.push(0);
  }
}

result = result.join('\n');
fs.writeFileSync('output.txt', result.toString());