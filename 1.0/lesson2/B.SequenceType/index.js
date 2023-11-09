const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = 'CONSTANT';
let current = list[0];

for (let i = 1; i < list.length - 2; i++) {
  if (current === list[i] && result === 'CONSTANT') {
  } else if (current < list[i] && i === 1 && (result === 'CONSTANT' || result === 'ASCENDING')) {
    result = 'ASCENDING';
  } else if (current > list[i] && i === 1 && (result === 'CONSTANT' || result === 'DESCENDING')) {
    result = 'DESCENDING';
  } else if (i > 1 && current < list[i] && result === 'CONSTANT') {
    result = 'WEAKLY ASCENDING';
  } else if (i > 1 && current > list[i] && result === 'CONSTANT') {
    result = 'WEAKLY DESCENDING';
  } else if (current === list[i] && (result === 'DESCENDING')) {
    result = 'WEAKLY DESCENDING';
  } else if (current === list[i] && result === 'ASCENDING') {
    result = 'WEAKLY ASCENDING';
  } else if ((current < list[i] && (result === 'DESCENDING' || result === 'WEAKLY DESCENDING'))
    || (current > list[i] && (result === 'ASCENDING' || result === 'WEAKLY ASCENDING'))) {
    result = 'RANDOM';
  }
  current = list[i];
}

fs.writeFileSync('output.txt', result.toString());
