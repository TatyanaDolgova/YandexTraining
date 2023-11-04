const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
let result = [];

const [h1, w1, h2, w2] = list;

fs.writeFileSync('output.txt', result.toString());