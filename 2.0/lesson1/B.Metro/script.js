const fs = require('fs');
const data = fs.readFileSync("input.txt", { encoding: 'utf8' });
const lines = data.toString().split(' ');

const allStation = Number(lines[0]);
const start = Number(lines[1]);
const finish = Number(lines[2]);

const clockwise = Math.max(finish, start) - Math.min(finish, start) - 1;
const counterclockwise = allStation - Math.max(finish, start) + Math.min(finish, start) - 1;

fs.writeFileSync("output.txt", String(Math.min(clockwise, counterclockwise))); 