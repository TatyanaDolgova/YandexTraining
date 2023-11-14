const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.trim().split('\r\n');
const [rows, columns] = list[0].split(' ');
const coordinates = list.splice(1);
const arr = [];
let result = [];

for (let i = 0; i < +rows; i += 1) {
  const arr2 = new Array(+columns).fill(0);
  arr.push(arr2);
}

for (let i = 0; i < coordinates.length; i += 1) {
  let coordinate = coordinates[i].split(' ');
  const x = +coordinate[0];
  const y = +coordinate[1];
  arr[x - 1][y - 1] = '*';
  if (y < columns && arr[x - 1][y] !== '*') {
    arr[x - 1][y] += 1;
  }
  if (x < rows && arr[x][y - 1] !== '*') {
    arr[x][y - 1] += 1;
  }
  if (y > 1 && arr[x - 1][y - 2] !== '*') {
    arr[x - 1][y - 2] += 1;
  }
  if (x > 1 && arr[x - 2][y - 1] !== '*') {
    arr[x - 2][y - 1] += 1;
  }
  if (y < columns && x < rows && arr[x][y] !== '*') {
    arr[x][y] += 1;
  }
  if (y > 1 && x < rows && arr[x][y - 2] !== '*') {
    arr[x][y - 2] += 1;
  }
  if (y > 1 && x > 1 && arr[x - 2][y - 2] !== '*') {
    arr[x - 2][y - 2] += 1;
  }
  if (y < columns && x > 1 && arr[x - 2][y] !== '*') {
    arr[x - 2][y] += 1;
  }
}

for (let i = 0; i < arr.length; i += 1) {
  result.push(arr[i].join(' '));
}
result = result.join('\n');
fs.writeFileSync('output.txt', result.toString());