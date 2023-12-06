// В данном списке из n ≤ 10^5 целых чисел найдите три числа,произведение которых максимально.

// Решение должно иметь сложность O(n), где n - размер списка.

// Выведите три искомых числа в любом порядке.

// Пример 1
// Ввод	
// 3 5 1 7 9 0 9 -3 10
// Вывод
// 10 9 9

// Пример 2
// Ввод	
// -5 -30000 -12
// Вывод
// -5 -12 -30000

// Пример 3
// Ввод	
// 1 2 3
// Вывод
// 3 2 1
const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let nums = data.trim().split(' ');
nums = nums.map((item) => Number(item.trim()));
let result = '';
let max1 = 0;
let max2 = 0;
let max3 = 0;
let negativeMax1 = 0;
let negativeMax2 = 0;


if (nums[0] > nums[1] && nums[0] > nums[2]) {
  max1 = nums[0];
  if (nums[1] > nums[2]) {
    max2 = nums[1];
    max3 = nums[2];
    negativeMax2 = nums[2];
    negativeMax1 = nums[1];
  } else {
    max2 = nums[2];
    max3 = nums[1];
    negativeMax2 = nums[2];
    negativeMax1 = nums[1];
  }
} else if (nums[1] > nums[0] && nums[1] > nums[2]) {
  max1 = nums[1];
  if (nums[0] > nums[2]) {
    max2 = nums[0];
    max3 = nums[2];
    negativeMax2 = nums[0];
    negativeMax1 = nums[2];
  } else {
    max2 = nums[2];
    max3 = nums[0];
    negativeMax2 = nums[2];
    negativeMax1 = nums[0];
  }
} else {
  max1 = nums[2];
  if (nums[0] > nums[1]) {
    max2 = nums[0];
    max3 = nums[1];
    negativeMax2 = nums[0];
    negativeMax1 = nums[1];
  } else {
    max2 = nums[1];
    max3 = nums[0];
    negativeMax2 = nums[1];
    negativeMax1 = nums[0];
  }
}
for (let i = 3; i < nums.length; i += 1) {

  if (nums[i] >= max1) {
    max3 = max2;
    max2 = max1;
    max1 = nums[i];
  } else if (nums[i] > max2) {
    max3 = max2;
    max2 = nums[i];
  } else if (nums[i] > max3) {
    max3 = nums[i];
  } else if (nums[i] <= negativeMax1) {
    negativeMax2 = negativeMax1;
    negativeMax1 = nums[i];
  } else if (nums[i] < negativeMax2) {
    negativeMax2 = nums[i];
  }
}

const max = max1 * max2 * max3;
const min = negativeMax1 * negativeMax2 * max1;

if (max >= min) {
  result = `${max2} ${max1} ${max3}`
} else {
  result = `${negativeMax1} ${negativeMax2} ${max1}`
}

fs.writeFileSync('output.txt', result.toString());