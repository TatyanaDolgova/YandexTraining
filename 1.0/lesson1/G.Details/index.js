const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
list = list.map(item => Number(item));
let [n, k, m] = list;
let result = 0;


const countDetails = (alloy, blanks, details) => {
  if (m > k) {
    return result = 0;
  }
  const countBlanks = Math.floor(alloy / blanks);
  n = n - (countBlanks * blanks);
  for (let i = 0; i < countBlanks; i++) {
    result += Math.floor(k / m);
    n += k % m;
  }
  if (n >= k) {
    countDetails(n, k, m);
  }
}

countDetails(n, k, m);

fs.writeFileSync('output.txt', result.toString());