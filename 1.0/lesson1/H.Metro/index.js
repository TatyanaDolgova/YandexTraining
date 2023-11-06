const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = '';
let [a, b, n, m] = list;

const minA = n + (a * (n - 1));
const maxA = n + (a * (n + 1));
const minB = m + (b * (m - 1));
const maxB = m + (b * (m + 1));

const min = Math.max(minA, minB);
const max = Math.min(maxA, maxB);

if (min > max) {
  result = '-1';
} else {
  result = `${min} ${max}`;
}

fs.writeFileSync('output.txt', result.toString());