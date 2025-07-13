const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: 'utf8' });
const lines = data.toString().split('\n');

const first = Math.abs(lines[1].split(' ')[0]);
const last = Math.abs(lines[1].split(' ')[lines[1].split(' ').length - 1]);

const medium = Math.round((last + first) / 2);

fs.writeFileSync("output.txt", String(medium + +lines[1].split(' ')[0])); 