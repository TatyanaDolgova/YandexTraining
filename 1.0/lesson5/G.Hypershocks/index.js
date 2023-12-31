// Андрей работает судьей на чемпионате по гипершашкам. В каждой игре в гипершашки участвует три игрока.
// По ходу игры каждый из игроков набирает некоторое положительное целое число баллов. Если после
// окончания игры первый игрок набрал a баллов, второй — b, а третий c, то говорят, что игра
// закончилась со счетом a:b:c.

// Андрей знает, что правила игры гипершашек устроены таким образом, что в результате игры баллы любых
// двух игроков различаются не более чем в k раз.

// После матча Андрей показывает его результат, размещая три карточки с очками игроков на специальном
// табло. Для этого у него есть набор из n карточек, на которых написаны числа x1, x2, …, xn. Чтобы
// выяснить, насколько он готов к чемпионату, Андрей хочет понять, сколько различных вариантов счета
// он сможет показать на табло, используя имеющиеся карточки.

// Требуется написать программу, которая по числу k и значениям чисел на карточках, которые имеются
// у Андрея, определяет количество различных вариантов счета, которые Андрей может показать на табло.

// Формат ввода
// Первая строка входного файла содержит два целых числа: n и k (3 ≤ n ≤ 100000, 1 ≤ k ≤ 109).

// Вторая строка входного файла содержит n целых чисел x1, x2, …, xn (1 ≤ xi ≤ 109).

// Формат вывода
// Выходной файл должен содержать одно целое число — искомое количество различных вариантов счета.

// Пример
// Ввод
// 5 2
// 1 1 2 2 3
// Вывод
// 9
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split('\r\n');
let cards = list[1].split(' ').map(Number).sort((a, b) => a - b);
const num = +list[0].split(' ')[1];
const len = +list[0].split(' ')[0];
let result = 0;
const dict = new Map();

for (let i = 0; i < len; i++) {
  if (!dict.has(cards[i])) {
    dict.set(cards[i], 0);
  }
  let value = dict.get(cards[i]) + 1;
  dict.set(cards[i], value);
}

const keys = Array.from(dict.keys());
let i = 0;
let dubl = 0;

keys.forEach((item, l) => {
  while (i < dict.size && item * num >= keys[i]) {
    if (dict.get(keys[i]) >= 2) {
      dubl++;
    }
    i++;
  }
  const rangeLen = i - l;

  if (dict.get(item) >= 2) {
    result += (rangeLen - 1) * 3;
  }
  if (dict.get(item) >= 3) {
    result += 1;
  }
  result += (rangeLen - 1) * (rangeLen - 2) * 3;

  if (dict.get(item) >= 2) {
    dubl -= 1;
  }
  result += dubl * 3;
})

fs.writeFileSync('output.txt', result.toString());