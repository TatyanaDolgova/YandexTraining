const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.split('\n');
let nums = list[1].trim();
nums = nums.split(' ').map((item) => Number(item));
let elements = [];
let result = 0;

const isSymmetric = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
};

const findSimmetric = (arr) => {
  let result1 = 0;
  let result2 = 0;
  const str = arr.join('');
  for (let i = Math.floor(str.length / 2); i < str.length; i++) {
    const b = str.slice(i).split('').reverse().join('');
    let a = str.slice(0, i);
    a = a.slice(-(b.length));
    if (a === b) {
      result1 = str.length - (b.length + a.length);
      break;
    }
  }
  for (let i = Math.floor(str.length / 2); i < str.length; i++) {
    const b = str.slice(i + 1, str.length).split('').reverse().join('');
    let a = str.slice(0, i);
    a = a.slice(-(b.length));
    if (a === b) {
      result2 = str.length - (b.length + a.length) - 1;
      break;
    }
  }
  if (result1 && result2) {
    return Math.min(result1, result2);
  } else if (!result1 && !result2) {
    return str.length - 1;
  } else {
    return Math.max(result1, result2);
  }
}

if (isSymmetric(nums)) {
  result = 0;
} else {
  let length = findSimmetric(nums);
  elements = nums.slice(0, length).reverse();

  result = `${length}\n${elements.join(' ')}`
}

fs.writeFileSync('output.txt', result.toString());
