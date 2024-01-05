const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\n');

const array1 = list[1].trim().split(' ').map(Number).sort((a, b) => a - b);
const array2 = list[2].trim().split(' ').map(Number);
let result = [];

function binarySearch(index) {
  let left = 0;
  let right = array1.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (array1[mid] === array2[index]) {
      return 'YES'
    } else if (array1[mid] > array2[index]) {
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }
  return 'NO';
}

for (let i = 0; i < array2.length; i++) {
  result.push(binarySearch(i));
}

result = result.join('\n')
fs.writeFileSync('output.txt', result.toString());