const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split('\r\n');
list = list.map(item => Number(item));
let result = '';
let [a, b, c, d, e] = list;

if (a <= d && b <= e) {
  result = "YES";
} else if (a <= e && b <= d) {
  result = "YES";
} else if (a <= d && c <= e) {
  result = "YES";
} else if (a <= e && c <= d) {
  result = "YES";
} else if (b <= d && c <= e) {
  result = "YES";
} else if (b <= e && c <= d) {
  result = "YES";
} else {
  result = "NO";
}

fs.writeFileSync('output.txt', result.toString());