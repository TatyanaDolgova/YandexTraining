const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));
let result = 'YES';
let currentItem = list[0];
for (let i = 1; i < list.length; i += 1) {
  if (list[i] <= currentItem) {
    result = 'NO';
  }
  currentItem = list[i];
}

fs.writeFileSync('output.txt', result.toString());