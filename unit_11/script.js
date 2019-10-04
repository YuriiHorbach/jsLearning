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


function funcReverse(arr){
    let arr2 = [];
    for(let i = arr.length-1; i > -1; i--){
        arr2 += arr[i] + ' ';
    }
    return arr2;
}

out131.innerHTML = arr13;

btn13.onclick = () => {
    out132.innerHTML = funcReverse(arr13);
} 

/* 
Task 14.
Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.
*/
let btn14 = document.querySelector('.u-14__button');
let inp14 = document.querySelector('.u-14__inp');
let out14 = document.querySelector('.out-14');
let out141 = document.querySelector('.out-141');

function createArr(inp){
    let arr = [];
    let min = 0;
    let max = 100;

    for(let i = 0; i < inp; i++){
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        arr += rand + ' ';
    }
    return arr;
}

btn14.onclick = () => {
    out14.innerHTML = createArr(inp14.value);
} 

/* 
Task 15.
Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.
*/
let btn15 = document.querySelector('.u-15__button');
let out151 = document.querySelector('.out-151');
let out152 = document.querySelector('.out-152');
let arr15 = [1,2,3,4,5,6,7,8,9];



function createArrEven(arr){
    let arr2 = [];
        for(let i = 0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                arr2 += arr[i] + ' ';
            }
        }
    return arr2;
}

out151.innerHTML = arr15;

btn15.onclick = () => {
    out152.innerHTML = createArrEven(arr15);
} 


/* 
Task 16.
Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
            let arr16_1 = [3, 5, 7 ];
            let arr16_2 = [2, 4, 6 ];
*/

let btn16 = document.querySelector('.u-16__button');
let out16 = document.querySelector('.out-16');
let arr16_1 = [3, 5, 7 ];
let arr16_2 = [2, 4, 6 ];


btn16.onclick = () => {
    out16.innerHTML = arr16_1.concat(arr16_2);
} 

/* 
Task 17.
Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:

Перебирает второй массив и его элементы добавляет в первый массив.
Выводит массив на страницу.
*/

let btn17 = document.querySelector('.u-17__button');
let out17_1 = document.querySelector('.out-17-1');
let out17_2 = document.querySelector('.out-17-2');
let out17_3 = document.querySelector('.out-17-3');
let arr17_1 = [3, 5, 7 ];
let arr17_2 = [2, 4, 6 ];

out17_1.innerHTML  = arr17_1;
out17_2.innerHTML  = arr17_2;

function concatDemo(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1 += ','+arr2[i];
    }
    return arr1;
}

btn17.onclick = () => {
    out17_3.innerHTML = concatDemo(arr17_1, arr17_2);
} 

/* 
Task 18.
Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите на страницу в div.out-18.
    let arr16_1 = [3, 5, 7, 11, 12, 13, 14 ];
*/

let btn18 = document.querySelector('.u-18__button');
let out18 = document.querySelector('.out-18');
let inp18 = document.querySelector('.u-18__input');
let arr18 = [3, 5, 7, 11, 12, 13, 14 ];

btn18.onclick = () => {
    out18.innerHTML = arr18.includes(parseInt(inp18.value));
} 

/* 
Task 19.
Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:

1. Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
2. Если совпадений нет - false.
*/

let btn19 = document.querySelector('.u-19__button');
let out191 = document.querySelector('.out-191');
let out192 = document.querySelector('.out-192');
let inp19 = document.querySelector('.u-19__input');
let arr19 = [3, 5, 7, 11];

out191.innerHTML = arr19;

function includesDemo(inp, arr){
    let changeInpType = parseInt(inp);
    
    let res = false;
    for(let i = 0; i < arr.length; i++){
        
        if( arr[i] == changeInpType){
            res += true;
        }
        else{
            res += false;
        }
    }
    return res;
}


btn19.onclick = () => {
    out192.innerHTML = includesDemo(inp19.value, arr19);
} 

/* 
Task 20.
Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). Результа выведите на страницу.
*/

let btn20 = document.querySelector('.u-20__button');
let out20 = document.querySelector('.out-20');
let arr20 = [3, 'zebra', 'jjjjjj', 11];

btn20.onclick = () => {
    out20.innerHTML = arr20.join('');
} 









