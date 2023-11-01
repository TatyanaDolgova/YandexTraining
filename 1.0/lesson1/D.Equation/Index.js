const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let lines = data.toString().split('\n');
let result = 0;
const [a, b, c] = lines;
if (((c ** 2 - b) === 0 && Number(a) !== 0)) {
  result = (c ** 2 - b) / a;
} else if ((c ** 2 - b) === 0 && Number(a) === 0) {
  result = 'MANY SOLUTIONS'
} else if (Number(c) < 0 || Number(a) === 0) {
  result = 'NO SOLUTION';
} else {
  result = (c ** 2 - b) / a;
  if (!Number.isInteger(result)) {
    result = 'NO SOLUTION';
  }
}

fs.writeFileSync('output.txt', result.toString());