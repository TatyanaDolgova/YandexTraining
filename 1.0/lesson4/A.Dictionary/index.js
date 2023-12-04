const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().trim().split('\r\n');
const dictionary = {};
const dictionary2 = {};
let result = '';

for (let i = 1; i < list.length - 1; i++) {
  const words = list[i].split(' ');
  dictionary[words[0]] = words[1];
}

for (let i = 1; i < list.length - 1; i++) {
  const words = list[i].split(' ');
  dictionary2[words[1]] = words[0];
}

result = (dictionary[list[list.length - 1]] || dictionary2[list[list.length - 1]]);
console.log(list.length - 1);
fs.writeFileSync('output.txt', result.toString());                                                                                