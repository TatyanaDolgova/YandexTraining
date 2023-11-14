const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.trim().split('\r\n');
let notes = list.splice(1).map((item,) => item = item.split(' '));
let result = [];
let min = 30.0;
let max = 4000.0;

for (let i = 1; i < notes.length; i += 1) {
  const num = +notes[i][0];
  const prev = +notes[i - 1][0];
  if (num < prev) {
    if (notes[i][1] === 'closer') {
      if (max > (prev + num) / 2) {
        max = (prev + num) / 2;
      }
    }
    if (notes[i][1] === 'further') {
      if (min < (prev + num) / 2) {
        min = (prev + num) / 2;
      }
    }
  }
  if (num > prev) {
    if (notes[i][1] === 'closer') {
      if (min < (prev + num) / 2) {
        min = (prev + num) / 2;
      }
    }
    if (notes[i][1] === 'further') {
      if (max > (prev + num) / 2) {
        max = (prev + num) / 2;
      }
    }
  }

  // console.log(min, max);
  // console.log(num, prev, notes[i][1]);
}

result = `${min} ${max}`;
fs.writeFileSync('output.txt', result.toString());