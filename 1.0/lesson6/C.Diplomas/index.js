// Когда Петя учился в школе, он часто участвовал в олимпиадах по информатике, математике и физике. Так как он был
// достаточно способным мальчиком и усердно учился, то на многих из этих олимпиад он получал дипломы. К окончанию
// школы у него накопилось n дипломов, причём, как оказалось, все они имели одинаковые размеры: w — в ширину 
// и h — в высоту. Сейчас Петя учится в одном из лучших российских университетов и живёт в общежитии со своими 
// одногруппниками. Он решил украсить свою комнату, повесив на одну из стен свои дипломы за школьные олимпиады. 
// Так как к бетонной стене прикрепить дипломы достаточно трудно, то он решил купить специальную доску из 
// пробкового дерева, чтобы прикрепить её к стене, а к ней — дипломы. Для того чтобы эта конструкция выглядела 
// более красиво, Петя хочет, чтобы доска была квадратной и занимала как можно меньше места на стене. Каждый 
// диплом должен быть размещён строго в прямоугольнике размером w на h. Дипломы запрещается поворачивать на 90 
// градусов. Прямоугольники, соответствующие различным дипломам, не должны иметь общих внутренних точек. 
// Требуется написать программу, которая вычислит минимальный размер стороны доски, которая потребуется 
// Пете для размещения всех своих дипломов.

// Формат ввода
// Входной файл содержит три целых числа: w, h, n (1 ≤ w, h, n ≤ 109).

// Формат вывода
// В выходной файл необходимо вывести ответ на поставленную задачу.

// Пример
// Ввод	
// 2 3 10
// Вывод
// 9
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const list = data.toString().trim().split(' ');

const w = +list[0];
const h = +list[1];
const k = +list[2];

const binarySearch = () => {
  let right = Math.max(w, h) * k;
  let left = 0;
  let mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);
    console.log(right, mid, left);

    let countW = Math.floor(mid / w);
    let countH = Math.floor(mid / h);
    console.log(countH * countW, mid)
    // let allHeight = Math.ceil(k / count) * h;
    if(countH * countW >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

let result = binarySearch();
fs.writeFileSync('output.txt', result.toString());