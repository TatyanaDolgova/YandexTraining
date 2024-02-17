const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const distance = +data.toString().trim().split('\n')[0].split(' ')[1];
const points = data.toString().trim().split('\n')[1].split(' ').map(Number);

fs.writeFileSync('output.txt', result.join('\n').toString());