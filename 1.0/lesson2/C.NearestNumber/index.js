const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
let num = list[2];
let array = list[1].split(' ').map(item => Number(item));
let difference = Math.abs(array[0] - num);
let count = array[0];

for (let i = 1; i < array.length; i++) {
  if (Math.abs(array[i] - num) < difference) {
    difference = Math.abs(array[i] - num)
    count = array[i];
  }
}

fs.writeFileSync('output.txt', count.toString());