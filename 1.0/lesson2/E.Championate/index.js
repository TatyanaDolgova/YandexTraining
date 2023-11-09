const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.split('\n');
let nums = list[1];
nums = nums.split(' ').map((item) => Number(item));
let result = 0;
let max = +nums[0];
let index = 0;
let currRes = 0;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
    index = i;
  }
}
let minResult = 0;
for (let a = index + 1; a < nums.length - 1; a++) {
  if ((nums[a] % 10 === 5) && (nums[a + 1] < nums[a])) {
    if (minResult === 0 || nums[a] >= minResult) {
      minResult = nums[a];
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] > nums[a]) {
          currRes += 1;
          if (currRes >= result && result !== 0) {
            break;
          }
        }
      }
      currRes += 1;
      if (currRes < result || result === 0) {
        result = currRes;
      }
      currRes = 0;
    }

  }
}

fs.writeFileSync('output.txt', result.toString());