const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = '';
let [a, b, c, d, e, f] = list;

const determinant = (a * d) - (b * c);

if (determinant !== 0) {
  const determinantX = (e * d) - (f * b);
  const determinantY = (a * f) - (c * e);
  const x = determinantX / determinant;
  const y = determinantY / determinant;
  result = `2 ${x} ${y}`;
} else if (b === 0 && a === 0 && c === 0 && d === 0 && e === 0 && f === 0) {
  result = '5';
} else if ((a === c && b === d && e !== f) || (a !== c && b !== d && e === f && a !== d) ||
  (a === 0 && b === 0 && e !== 0) || (c === 0 && d === 0 && f !== 0)) {
  result = '0';
} else if (a === 0 && c === 0) {
  const y1 = e / b;
  const y2 = f / d;
  if (y1 === y2) {
    result = `4 ${y1}`;
  } else {
    result = '0';
  }
} else if (b === 0 && d === 0) {
  const x1 = e / a;
  const x2 = f / c;
  if (x1 === x2) {
    result = `3 ${x1}`;
  } else {
    result = '0';
  }

} else {
  const k = -a / b;
  const bValue = e / b;
  result = `1 ${k} ${bValue}`;
}

fs.writeFileSync('output.txt', result.toString());