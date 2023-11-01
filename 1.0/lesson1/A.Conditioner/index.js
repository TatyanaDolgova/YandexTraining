const fs = require('fs');

const data = fs.readFileSync("input.txt", { encoding: 'utf8' });

const lines = data.toString().split('\n');
const arr = [];
lines.forEach((item, i) => {
  if (i === 0) {
    let temp = item.split(' ');
    temp.forEach(elem => arr.push(Number(elem)));
  } else {
    arr.push(item);
  }
})

const [troom, tcond, mode] = arr;

let total = '';

if (mode === 'freeze') {
  total = Math.min(troom, tcond);
}

if (mode === 'heat') {
  total = Math.max(troom, tcond);
}

if (mode === 'auto') {
  total = tcond;
}

if (mode === 'fan') {
  total = troom;
}

fs.writeFileSync("output.txt", String(total));