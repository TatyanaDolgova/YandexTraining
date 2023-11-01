const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const lines = data.toString().split('\n');
const arr = lines.map((item) => Number(item));
let result = '';

if (arr[0] + arr[1] > arr[2] && arr[1] + arr[2] > arr[0] &&
  arr[0] + arr[2] > arr[1]) {
  result = 'YES';
} else {
  result = 'NO';
}

fs.writeFileSync('output.txt', result.toString());