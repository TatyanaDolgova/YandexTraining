const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let nums = data.trim().split(' ');
nums = nums.map((item) => Number(item.trim()));
let result = '';
let max1 = 0;
let max2 = 0;
let negativeMax1 = 0;
let negativeMax2 = 0;


if (nums[0] > nums[1]) {
  max1 = nums[0];
  max2 = nums[1];
  negativeMax2 = nums[0];
  negativeMax1 = nums[1];
} else {
  max1 = nums[1];
  max2 = nums[0];
  negativeMax2 = nums[1];
  negativeMax1 = nums[0];
}
for (let i = 2; i < nums.length; i += 1) {

  if (nums[i] >= max1) {
    max2 = max1;
    max1 = nums[i];
  } else if (nums[i] > max2) {
    max2 = nums[i];
  } else if (nums[i] <= negativeMax1) {
    negativeMax2 = negativeMax1;
    negativeMax1 = nums[i];
  } else if (nums[i] < negativeMax2) {
    negativeMax2 = nums[i];
  }
}

const max = max1 * max2;
const min = negativeMax1 * negativeMax2;

if (max >= min) {
  if (max1 >= max2) {
    result = `${max2} ${max1}`
  } else {
    result = `${max1} ${max2}`
  }
} else {
  if (negativeMax1 >= negativeMax2) {
    result = `${negativeMax2} ${negativeMax1}`
  } else {
    result = `${negativeMax1} ${negativeMax2}`
  }
}

fs.writeFileSync('output.txt', result.toString());