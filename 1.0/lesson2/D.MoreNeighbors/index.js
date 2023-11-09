const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));
let result = 0;
let prev = list[0];
let next = list[2];

for (let i = 1; i < list.length - 1; i++) {
  if (list[i] > prev && list[i] > next) {
    result += 1;
  }
  prev = list[i];
  next = list[i + 2];
}

fs.writeFileSync('output.txt', result.toString());