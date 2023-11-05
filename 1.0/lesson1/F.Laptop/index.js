const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));
const [h1, w1, h2, w2] = list;
let result = '';
let min = 0;

if ((h1 + h2) * Math.max(w1, w2)) {
  min = (h1 + h2) * Math.max(w1, w2);
  result = `${h1 + h2} ${Math.max(w1, w2)}`;
}

if ((h1 + w2) * Math.max(w1, h2) < min) {
  min = (h1 + w2) * Math.max(w1, h2);
  result = `${h1 + w2} ${Math.max(w1, h2)}`;
}

if ((w1 + w2) * Math.max(h1, h2) < min) {
  min = (w1 + w2) * Math.max(h1, h2);
  result = `${w1 + w2} ${Math.max(h1, h2)}`;
}

if ((w1 + h2) * Math.max(h1, w2) < min) {
  min = (w1 + h2) * Math.max(h1, w2);
  result = `${w1 + h2} ${Math.max(h1, w2)}`;
}


fs.writeFileSync('output.txt', result.toString());