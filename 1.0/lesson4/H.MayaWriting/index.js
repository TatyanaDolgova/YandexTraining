// Расшифровка письменности Майя оказалась более сложной задачей, чем предполагалось ранними исследованиями. 
// На протяжении более чем двух сотен лет удалось узнать не так уж много.Основные результаты были получены 
// за последние 30 лет.

// Письменность Майя основывается на маленьких рисунках, известных как значки, которые обозначают звуки. 
// Слова языка Майя обычно записываются с помощью этих значков, которые располагаются рядом друг с другом 
// в некотором порядке.

// Одна из проблем расшифровки письменности Майя заключается в определении этого порядка.Рисуя значки некоторого
// слова, писатели Майя иногда выбирали позиции для значков, исходя скорее из эстетических взглядов, а не 
// определенных правил.Это привело к тому, что, хотя звуки для многих значков известны, археологи не 
// всегда уверены, как должно произноситься записанное слово.

// Археологи ищут некоторое слово W.Они знают значки для него, но не знают все возможные способы их
// расположения.Поскольку они знают, что Вы приедете на IOI ’06, они просят Вас о помощи.Они дадут Вам 
// g значков, составляющих слово W, и последовательность S всех значков в надписи, которую они изучают, в 
// порядке их появления.Помогите им, подсчитав количество возможных появлений слова W.

// Задание Напишите программу, которая по значкам слова W и по последовательности S значков надписи 
// подсчитывает количество всех возможных вхождений слова W в S, то есть количество всех различных 
// позиций идущих подряд g значков в последовательности S, которые являются какой - либо перестановкой 
// значков слова W.

// Формат ввода
// 1 ≤ g ≤ 3 000, g – количество значков в слове W

// g ≤ | S | ≤ 3 000 000 где | S | – количество значков в последовательности S

// На вход программы поступают данные в следующем формате:

// СТРОКА 1: Содержит два числа, разделенных пробелом – g и | S |.СТРОКА 2: Содержит g последовательных 
// символов, с помощью которых записывается слово W.Допустимы символы: ‘a’-‘z’ и ‘A’-‘Z’; большие и маленькие 
// буквы считаются различными.СТРОКА 3: Содержит | S | последовательных символов, которые представляют 
// значки в надписи.Допустимы символы: ‘a’-‘z’ и ‘A’-‘Z’; большие и маленькие буквы считаются различными.

// Формат вывода
// Единственная строка выходных данных программы должна содержать количество возможных вхождений слова W 
// в S.

// Пример
// Ввод
// 4 11
// cAda
// AbrAcadAbRa
// Вывод
// 2
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


