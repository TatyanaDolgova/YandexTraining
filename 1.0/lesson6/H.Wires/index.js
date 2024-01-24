// Дано N отрезков провода длиной L1, L2, ..., LN сантиметров. Требуется с помощью разрезания получить из них K
// равных отрезков как можно большей длины, выражающейся целым числом сантиметров. Если нельзя получить K отрезков
// длиной даже 1 см, вывести 0.

// Формат ввода
// В первой строке находятся числа N и К. В следующих N строках - L1, L2, ..., LN, по одному числу в строке.

// Ограничения: 1 ≤ N, K ≤ 10 000, 100 ≤ Li ≤ 10 000 000, все числа целые.

// Формат вывода
// Вывести одно число - полученную длину отрезков.

// Пример
// Ввод
// 4 11
// 802
// 743
// 457
// 539
// Вывод
// 200

const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const k = +data.toString().trim().split('\n')[0].split(' ')[1];
const arrL = data.toString().trim().split('\n').slice(1).map(Number);

const binarySearch = (k, arrL) => {
  let max = arrL[0];

  for (let i = 1; i < arrL.length; i++) {
    if (arrL[i] > max) {
      max = arrL[i];
    }
  }

  let right = max + 1;
  let left = -1;
  let mid;

  while (right - left > 1) {
    mid = Math.floor((right + left) / 2);

    let count = 0;

    arrL.forEach(element => {
      count += Math.floor(element / mid)
    });

    if (count < k) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left
}

let result = binarySearch(k, arrL);
fs.writeFileSync('output.txt', result.toString());