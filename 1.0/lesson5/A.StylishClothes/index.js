const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\n');
const shirts = list[1].split(' ').map(Number);
const trousers = list[3].split(' ').map(Number);
let sum = Math.abs(shirts[0] - trousers[0]);
let a = shirts[0];
let b = trousers[0];
let i = 0
let j = 0;

loop: while (i < shirts.length && j < trousers.length) {
  if (Math.abs(shirts[i] - trousers[j]) < sum) {
    sum = Math.abs(shirts[i] - trousers[j])
    a = shirts[i];
    b = trousers[j];

    if (sum === 0) {
      break loop;
    }
  }
  if (shirts[i] > trousers[j]) {
    j++;
  } else {
    i++;
  }
}

const result = `${a} ${b}`;
fs.writeFileSync('output.txt', result.toString());    