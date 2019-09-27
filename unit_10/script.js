/*
Task 1.
Создайте массив содержащий строки, числа, булевы значения. 
Выведите его в консоль.
*/

let arr = ['text','Name', 1, 5, 90, true, false];
console.log(arr);

/*
Task 2.
Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.
*/

let out10_2 = document.querySelector('.out10_2');

let arr2 = ['text', 'Name', 1, 5, 90, true, false];

out10_2.innerHTML = arr2;

/*
Task 3.
Создайте массив a. Выведите длину массива a.

const a = [2, 'hello', 17, 34, 'privet']
*/
let out10_3 = document.querySelector('.out10_3');
const a = [2, 'hello', 17, 34, 'privet'];
out10_3.innerHTML = a.length;

/*
Task 4.
Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. Сделайте вывод о 8-м элементе.

const a = [2, 'hello', 17, 34, 'privet']
*/

const a4 = [2, 'hello', 17, 34, 'privet'];

console.log(a4[0],a4[3],a4[8]);
// out10_4.innerHTML = a4[0] + a4[2] + a4[3];
