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

/*
Task 8. 
Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
Создает новый массив где нулевым элементом выступает первый элемент исходного массива
Выводит массив на страницу
*/

let btnShift = document.querySelector('.btnShift');
let out81 = document.querySelector('.out81');
let out82 = document.querySelector('.out82');

let arr81 =[1,2,3,4,5,6,7,8];
let arr82 =[];

out81.innerHTML = arr81;

function funcShift(){
    arr82[0] = arr81[0] ;
    out82.innerHTML = arr82;
}

btnShift.onclick = funcShift;

/* 
Task 9.
Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:

читает содержимое input в переменную
создает новый массив где нулевым элементов задает считанную из input строку
дописывает остальные значения старого массива в новый
Выводит массив на страницу
*/

let btnUnShift = document.querySelector('.btnUnShift');
let inp9 = document.querySelector('.inp9');
let out91 = document.querySelector('.out91');
let out92 = document.querySelector('.out92');

let arr91 =[1,2,3,4,5,6,7];
let arr92 =[];

out91.innerHTML = arr91;

function funcUnShift(){
    inpVal = inp9.value;
    arr92[0] = inpVal;
    arr92 += arr91;
    out92.innerHTML = arr92;
}

btnUnShift.onclick = funcUnShift;

/* 
Task 10.
Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.

let arr10 = [2,4, 6, 8, 10, 'hello'];
*/

let out10 = document.querySelector('.out-10');

let arr10 = [2,4, 6, 8, 10, 'hello'];

let newArr = arr10.reverse();

out10.innerHTML += newArr;

/* 
Task 11.
Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

let arr11 = [0, 2, 3, 7, 8, 5, 11];
*/

let inp11 = document.querySelector('.u-11__input');
let btn11 = document.querySelector('.u-11__button');
let out11 = document.querySelector('.out-11');
let res;
let arr11 = [0, 2, 3, 7, 8, 5, 11];
let u11;
btn11.onclick = () => {
    u11 = +inp11.value; 
    res = arr11.indexOf(u11);
    out11.innerHTML = res;
} 

/* 
Task 12.
Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:

читает содержимое input в переменную
Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
Если совпадения нет выводить -1.
*/
let inp12 = document.querySelector('.u-12__input');
let btn12 = document.querySelector('.u-12__button');
let out12 = document.querySelector('.out-12');
let arr12 = [0, 2, 3, 7, 8, 5, 11];
let u12;


function funcIndexOf(inp, arr){
    let num;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == inp){
            num = i;
            break;
        }
        else{
            num = -1;
        }
    }
    return num;
}

btn12.onclick = () => {
    u12 = +inp12.value; 
    out12.innerHTML = funcIndexOf(u12, arr12);
} 

/* 
Task 13.
Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:

Создать новый пустой массив
Перебирать старый массив с конца (массив создайте сами)
По очереди по элементу присвоить значения в новый массив.
Вывести новый массив.
*/
let btn13 = document.querySelector('.u-13__button');
let out131 = document.querySelector('.out-131');
let out132 = document.querySelector('.out-132');
let arr13 = [0, 2, 3, 7, 8, 5, 11];
let u13;


function funcReverse(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == inp){
            num = i;
            break;
        }
        else{
            num = -1;
        }
    }
    return num;
}

btn12.onclick = () => {
    u12 = +inp12.value; 
    out12.innerHTML = funcIndexOf(u12, arr12);
} 









