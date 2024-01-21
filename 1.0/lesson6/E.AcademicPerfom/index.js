// В лицее на уроках информатики ответы учеников оцениваются целым числом баллов от 2 до 5 . Итоговая оценка по
// информатике выставляется как среднее арифметическое оценок на всех уроках, округленное до ближайшего целого
//   числа. Если среднее значение находится ровно посередине между двумя целыми числами, то оценка округляется
// вверх.

// Примеры округления оценок приведены в таблице.


// Все ученики лицея стремятся получить итоговую оценку по информатике не ниже 4 баллов. К сожалению, один из
// учеников получил на уроках a двоек, b троек и c четверок. Теперь он планирует получить несколько пятерок,
// причем хочет, чтобы итоговая оценка была не меньше 4 баллов. Ему надо понять, какое минимальное количество
// пятерок ему необходимо получить, чтобы добиться своей цели.

// Требуется написать программу, которая по заданным целым неотрицательные числам a , b и c определяет минимальное
// количество пятерок, которое необходимо получить ученику, чтобы его итоговая оценка по информатике была не
// меньше 4 баллов.

// Формат ввода
// Входные данные содержат три строки. Первая строка содержит целое неотрицательное число a , вторая строка
// содержит целое неотрицательное число b , третья строка содержит целое неотрицательное число c
// (0 ≤ a, b, c ≤ 1015, a + b + c ≥ 1).

// Формат вывода
// Выходные данные должны содержать одно число: минимальное число пятерок, которое необходимо получить
// ученику, чтобы итоговая оценка была не меньше 4 баллов.

// Пример
// Ввод
// 2
// 0
// 0
// Вывод
// 2
const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const [two, three, four] = data.toString().trim().split('\n').map(BigInt);

const binarySearch = (two, three, four) => {
  let right = two + three + four + 1n;
  let left = -1n;
  let mid;

  while (right - left > 1n) {
    mid = (right + left) / 2n;

    const count = two + three + four + mid;
    const mean = two * 2n + three * 3n + four * 4n + mid * 5n;

    if (mean * 2n >= 7n * count) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
}
let result = binarySearch(two, three, four);
fs.writeFileSync('output.txt', result.toString());