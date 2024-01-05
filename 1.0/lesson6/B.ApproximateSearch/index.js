const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\n');

const array1 = list[1].trim().split(' ').map(Number);
const array2 = list[2].trim().split(' ').map(Number);
let result = [];

function binarySearch(index) {
  let left = 0;
  let right = array1.length - 1;
  let mid;
  let number = Math.abs(array2[index] - array1[Math.floor((right + left) / 2)]);
  let nums = array1[Math.floor((right + left) / 2)]
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if(Math.abs(array2[index] - array1[mid]) < number || (Math.abs(array2[index] - array1[mid]) === number
    && array1[mid] < nums)) {
      number = Math.abs(array2[index] - array1[mid]);
      nums = array1[mid];
    }

    if (array1[mid] === array2[index]) {
      return array1[mid]
    } else if (array1[mid] > array2[index]) {
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }
  return nums;
}

for (let i = 0; i < array2.length; i++) {
  result.push(binarySearch(i));
}

result = result.join('\n')
fs.writeFileSync('output.txt', result.toString());