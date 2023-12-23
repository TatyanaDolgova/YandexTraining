// Преподаватель курса ОиМП заказал у одного известного психолога полное психологическое
// обследование всех студентов, поступивших на ФНК с целью выяснить их склонность к
// списыванию еще до начала занятий и отчислить их за списывание еще до того как они
// приступят к занятиям и смогут позорить ФНК своими преступлениями. Психолог, привлеченный
// для проведения обследования, известен своим инновационным методом, позволяющим понять
// склонность к списыванию студента по наиболее часто используемому им в программах
// идентификатору. Помогите известному психологу определить, какие из студентов потенциально
// являются преступниками. Напишите программу, которая по приведенной программе выяснит
// наиболее часто используемый в ней идентификатор.

// Поскольку разные студенты на тестировании пишут программы на разных языках программирования,
// ваша программа должна уметь работать с произвольным языком. Поскольку в разных языках
// используются различные ключевые слова, то список ключевых слов в анализируемом языке
// предоставляется на вход программе. Все последовательности из латинских букв, цифр и знаков
// подчеркивания, которые не являются ключевыми словами и содержат хотя бы один символ, не
// являющийся цифрой, могут быть идентификаторами. При этом в некоторых языках идентификаторы
// могут начинаться с цифры, а в некоторых - нет. Если идентификатор не может начинаться с цифры,
// то последовательность, начинающаяся с цифры, идентификатором не является. Кроме этого, задано,
// является ли язык чувствительным к регистру символов, используемых в идентификаторах и ключевых
// словах.

// Формат ввода
// В первой строке вводятся число n - количество ключевых слов в языке (0 <= n <= 50) и два слова
// C и D, каждое из которых равно либо "yes", либо "no". Слово C равно "yes", если идентификаторы
// и ключевые слова в языке чувствительны к регистру символов, и "no", если нет. Слово D равно
// "yes",если идентификаторы в языке могут начинаться с цифры, и "no", если нет.

// Следующие n строк содержат по одному слову, состоящему из букв латинского алфавита и символов
// подчеркивания - ключевые слова. Все ключевые слова непусты, различны, при этом, если язык не
// чувствителен к регистру, то различны и без учета регистра. Длина каждого ключевого слова не
// превышает 50 символов.

// Далее до конца входных данных идет текст программы. Он содержит только символы с ASCII-кодами
// от 32 до 126 и переводы строки.

// Размер входных данных не превышает 10 килобайт. В программе есть хотя бы один идентификатор.

// Формат вывода
// Выведите идентификатор, встречающийся в программе максимальное число раз. Если таких
// идентификаторов несколько, следует вывести тот, который встречается в первый раз раньше.
// Если язык во входных данных не чувствителен к регистру, то можно выводить идентификатор в
// любом регистре.
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.trim().toString().split('\r\n');
const countKeyWords = +list[0].split(' ')[0];
const isRegister = list[0].split(' ')[1];
const isNumber = list[0].split(' ')[2];
let program = list.splice(countKeyWords + 1).join(' ');
const keyWords = new Set();
const dict = new Map();

for (let i = 0; i < countKeyWords; i += 1) {
  if (isRegister === 'no') {
    keyWords.add(list[i + 1].toLowerCase());
  } else {
    keyWords.add(list[i + 1]);
  }
}

program = program.replace(/\W/g, ' ');
const programWord = program.split(' ');
for (let i = 0; i < programWord.length; i += 1) {
  let w = programWord[i];
  if (isRegister === 'no') {
    w = w.toLowerCase();
  }

  if (!keyWords.has(w) && programWord[i] !== '') {
    if (!dict.has(w)) {
      dict.set(w, 0);
    }
    let num = dict.get(w);
    num += 1;
    dict.set(w, num);
  }
}

let result = '';
let count = '';

for (const word of dict.keys()) {
  if (!keyWords.has(word) && ((isNumber === 'no' && Number.isNaN(+word[0]))
    || (isNumber === 'yes' && Number.isNaN(+word)))) {
    if (dict.get(word) > count) {
      count = dict.get(word);
      result = word;
    }
  }
}
fs.writeFileSync('output.txt', result.toString());