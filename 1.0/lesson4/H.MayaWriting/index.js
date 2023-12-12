const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let list = data.trim().toString().split('\r\n');
const string = list[2];
const word = list[1];
const wordObj = makeDict(word);
const subString = string.slice(0, word.length);
const stringObj = makeDict(subString)
let result = 0;

function makeDict(str) {
  const sDict = new Map();
  for (spell in str) {
    if (!sDict.has(str[spell])) {
      sDict.set(str[spell], 0);
    }
    let num = sDict.get(str[spell]);
    num += 1;
    sDict.set(str[spell], num);
  }
  return sDict;
}

function macingDicts(dict1, dict2) {
  mutches = 0;
  for (let spell of dict1.keys()) {
    if (dict2.has(spell) && dict1.get(spell) === dict2.get(spell)) {
      mutches += 1
    }
  }
  return mutches;
}

function modifyDict(stringObj, wordObj, symbol, countModifier) {
  let ans = 0;
  if (!stringObj.has(symbol)) {
    stringObj.set(symbol, 0);
  }
  if (wordObj.has(symbol) && stringObj.get(symbol) === wordObj.get(symbol)) {
    ans = -1;
  }
  let num = stringObj.get(symbol);
  num += countModifier;
  stringObj.set(symbol, num);
  if (wordObj.has(symbol) && stringObj.get(symbol) === wordObj.get(symbol)) {
    ans = 1;
  }
  return ans;
}

let macingLetters = macingDicts(wordObj, stringObj);
if (macingLetters === wordObj.size) {
  result += 1;
}

for (let i = word.length; i < string.length; i++) {
  let s = string[i - word.length];
  macingLetters += modifyDict(stringObj, wordObj, s, -1);
  macingLetters += modifyDict(stringObj, wordObj, string[i], +1);
  if (macingLetters === wordObj.size) {
    result += 1;
  }
}

fs.writeFileSync('output.txt', result.toString());


