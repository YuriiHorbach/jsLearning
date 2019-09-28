/* 
Task 1.
Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.
*/

let input11_1 = document.querySelector('.u-11-1');
let btn11_1 = document.querySelector('.u-11-1__push');
let btn11_pop = document.querySelector('.u-2__pop');
let btn11_shift = document.querySelector('.u-3__shift');
let btn11_unshift = document.querySelector('.u-4__unshift');
let out11_1 = document.querySelector('.out-11-1');
let arr11_1= [];

function arrAdd(){
    arr11_1.push(input11_1.value);
    out11_1.innerHTML = arr11_1;
}

function arrRemove(){
    arr11_1.pop();
    out11_1.innerHTML = arr11_1;
}

function arrShift(){
    arr11_1.shift();
    out11_1.innerHTML = arr11_1;
}

function arrUnshift(){
    arr11_1.unshift(input11_1.value);
    out11_1.innerHTML = arr11_1;
}


btn11_1.onclick = arrAdd;
btn11_pop.onclick = arrRemove;
btn11_shift.onclick = arrShift;
btn11_unshift.onclick = arrUnshift;


/* 
Task 2.
Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1
*/

/* 
Task 3.
Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.
*/

/* 
Task 4.
Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
*/

/* 
Task 5.
Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. Результат применения выводите в div.out-5.
*/

let inp5_1 = document.querySelector('.inp5_1');
let inp5_2 = document.querySelector('.inp5_2');
let btn5 = document.querySelector('.btn5');
let out5 = document.querySelector('.out-5');

let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

btn5.onclick = () => {
    out5.innerHTML = arr5.splice(inp5_1.value, inp5_2.value);
}

/* 
Task 6.
Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:

читает содержимое input в переменную
вычисляет длину массива
присваивает массиву новый элемент, а в качестве индекса указывает длину массива
Выводит массив на страницу
*/

let inp6 = document.querySelector('.inp6');
let btn6 = document.querySelector('.btn6');
let out6 = document.querySelector('.out-6');

let arr6 =[];

function funcPush(){
    let inp = inp6.value;
    arr6[arr6.length] = inp;
    out6.innerHTML = arr6;
}

btn6.onclick = funcPush;

/* 
Task 7.
Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:

удаляет последний элемент массива
Выводит массив на страницу
*/

let inp7 = document.querySelector('.inp7');
let btn7 = document.querySelector('.btn7');
let btnPop = document.querySelector('.btnPop');
let out7 = document.querySelector('.out-7');

let arr7 =[];

function funcPush(){
    let inp = inp7.value;
    arr7[arr7.length] = inp;
    out7.innerHTML = arr7;
}

function funcPop(){
    let inp = inp7.value;
    arr7 = arr7.slice(0, -1);
    out7.innerHTML = arr7;
}
   
btn7.onclick = funcPush;
btnPop.onclick = funcPop;







