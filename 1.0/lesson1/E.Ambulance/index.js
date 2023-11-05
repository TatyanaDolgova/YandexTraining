const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.toString().split(' ');
let result = [];
const [k1, m, k2, p2, n2] = list;
const numApart = Math.ceil(k2 / (n2 * p2));

const kMax = Math.floor((+k2 - 1) / (+m * (+p2 - 1) + +n2 - 1));
const kMin = Math.ceil(+k2 / (+m * (+p2 - 1) + +n2));
const numApartInP = kMin * +m;
console.log(kMax, kMin);

const nAll = (m * p2) + +n2;

if (kMin === kMax) {
  const p1 = Math.ceil(k1 / numApartInP);
  let n1 = Math.ceil((k1 % numApartInP) / kMax);
  console.log((k1 % numApartInP) / kMax)

  if (n1 === 0) {
    n1 = m;
  }

  result.push(p1.toString());
  result.push(n1.toString());
  result = result.join(' ');
} else {
  const p1Max = Math.ceil(k1 / (kMax * m));
  const p1Min = Math.ceil(k1 / (kMin * m));
  if (p1Max !== p1Min) {
    result += '0'
  } else {
    result += p1Max;
  }
  const n1Max = Math.ceil((k1 % (kMax * m)) / kMax);
  const n1Min = Math.ceil((k1 % (kMin * m)) / kMin);
  if (n1Max !== n1Min) {
    result += ' 0';
  } else {
    result += ' ' + n1Max;
  }
}

if (+n2 === 1) {
  if (+m >= +k1) {
    result = '1 0';
  } else if (+m === 1) {
    result = '0 1';
  } else {
    if (k1 - k2 < kMin) {
      result = '0';
      result += ' ' + p2;
    }
    if (kMax !== kMin) {
      const p1Max = Math.ceil(k1 / (kMax * m));
      const p1Min = Math.ceil(k1 / (kMin * m));
      const n1Max = Math.ceil((k1 % (kMax * m)) / kMax);
      const n1Min = Math.ceil((k1 % (kMin * m)) / kMin);
      if (p1Max === p1Min) {
        result = p1Max + ' ';
        if (n1Max !== n1Min) {
          result += '0';
        }
      } else {
        result = '0';
        if (n1Max !== n1Min) {
          result += ' 0';
        } else {
          result += n1Max;
        }
      }
    }
  }
}

if (+p2 === 1 && +n2 === 1 && +k1 < +k2) {
  result = '1 1';
}

if (+k2 === +p2 && +m === 1 && +p2 > 1) {
  result = k1 + ' 1';
}

if (p2 > 1) {
  if (nAll - 1 > +k2) {
    result = '-1 -1';
  }
}

if (+n2 > +m) {
  result = '-1 -1'
}

if (+k2 < +n2) {
  result = '-1 -1'
}

if (kMin > kMax) {
  result = '-1 -1';
}

fs.writeFileSync('output.txt', result.toString());