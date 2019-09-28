<<<<<<< HEAD
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







=======
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

/*
  Task 5.
  Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.
  
  const a = [2, 'hello', 17, 34, 'privet']
*/
let out10_5 = document.querySelector('.out10_5');
const a5 = [2, 'hello', 17, 34, 'privet'];

// console.log(a4[0],a4[3],a4[8]);
out10_5.innerHTML = a5[0] + a5[2] + a5[3];

/*
    Task 6.
    Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.
*/
let out10_6 = document.querySelector('.out10_6');

let arr6 = ['Yurii', 'Cancer', 'Monday', 'July'];

out10_6.innerHTML = arr6;

/*
    Task 7.
    Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. Вывести массив на страницу в элемент div.
*/
let out10_7 = document.querySelector('.out10_7');

let b = ['hi', 'foo', 'bar'];

out10_7.innerHTML = b;

/*
    Task 8.
    Создайте массив b. Добавьте в него третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. Выведите массив и в консоль и на страницу. Обратите внимание, как выводятся элементы значения которых не заданы. Также выведите значение длины массива.

    let b = ['one', 1, 2, 'two'];
*/
let out10_8 = document.querySelector('.out10_8');

let b8 = ['one', 1, 2, 3.14, 17, 'two', 5];
console.log(b8);
console.log(b8.length);
out10_8.innerHTML = b8;

/*
    Task 9.
    Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.
*/
let out10_9 = document.querySelector('.out10_9');

let arr9 = [1, 2, 3, 4, 5, 6, 7, 89, 12, 'gg', 55];

out10_9.innerHTML = arr9[3] + ' ' + arr9[7];
console.log(arr9);

/*
    Task 10.
    Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.
*/
let out10_10 = document.querySelector('.out10_10');

let arr10 = ['', 2, '', '', '', 6, '', '', '', 'gg'];

out10_10.innerHTML = arr10;
console.log(arr10);
console.log(arr10.length);

/*
    Task 11.
    Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.

    const c = [77, 88, 99, 66];
*/
let out10_11 = document.querySelector('.out10_11');

let c = [77, 88, 99, 66];

function changeArr(arr){
    let a;
    a = arr[1];
    arr[1] = arr[3];
    arr[3] = a;
    return arr;
}

out10_11.innerHTML = changeArr(c);

/*
    Task 12.
    Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. После чего выводит массив в консоль. Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.
*/
let out10_12 = document.querySelector('.out10_12');

let arr12 = [77, 88, 99, 66];

function changeArr12(arr){
    let a;
    a = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = a;
    return arr;
}
console.log(changeArr12(arr12));

/*
    Task 13.
    Используя цикл выведите элемента массива d на страницу. Разделитель - пробел.
    
    d = ['y', 4, 22, 'o'];
*/
let out10_13 = document.querySelector('.out10_13');

let d = ['y', 4, 22, 'o'];

for (let i = 0; i < d.length; i++ ){
    out10_13.innerHTML += d[i] + ' ';
}

/*
    Task 14.
    Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.
    
    e = [1, 2, 3, 'hello', 66];
*/
let out10_14 = document.querySelector('.out10_14');

let e = [1, 2, 3, 'hello', 66];

for (let i = e.length-1; i > 0; i-- ){
    out10_14.innerHTML += e[i] + ' ';
}


/*
    Task 15.
    Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.
    
    d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
*/
let out10_15 = document.querySelector('.out10_15');

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];


for (let i = 0; i < d15.length; i++ ){
    if(d15[i] > 0){
        out10_15.innerHTML += d15[i] + ' ';
    }
}

/*
    Task 16.
    Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.
*/
let out10_16_1 = document.querySelector('.out10_16-1');
let out10_16_2 = document.querySelector('.out10_16-2');
let a1_even = [];
let a2_odd = [];
for (let i = 0; i < d15.length; i++ ){
    if(d15[i] % 2 == 0){
        a1_even += d15[i] + ' ';
    }
    else{
        a2_odd += d15[i] + ' ';
    }
}

out10_16_1.innerHTML = a1_even;
out10_16_2.innerHTML = a2_odd;

/*
    Task 17.
    Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.
*/
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let out10_17 = document.querySelector('.out10_17');

let count = 0;
for (let i = 0; i < e17.length; i++ ){
    if(e17[i] == 0){
        count += 1;
    }
}

out10_17.innerHTML = count;

/*
    Task 18.
    Используя предыдущий массив e и цикл - выведите максимальное значение из массива.
*/
let out10_18 = document.querySelector('.out10_18');

let max = 0;
for (let i = 0; i < e17.length; i++ ){
    if(e17[i] > max){
        max = e17[i];
    }
}

out10_18.innerHTML = max;

/*
    Task 19.
    Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.

    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
*/
let out10_19 = document.querySelector('.out10_19');

let maxIndex = 0;
for (let i = 0; i < e17.length; i++ ){
    if(e17[i] > maxIndex){
        maxIndex = i;
    }
}

out10_19.innerHTML = maxIndex;

/*
    Task 20.
    Используйте массив f. Используя цикл, посчитайте сумму элементов массива.
*/
let out10_20 = document.querySelector('.out10_20');

let sum = 0;
for (let i = 0; i < e17.length; i++ ){
        sum += e17[i];
}

out10_20.innerHTML = sum;
>>>>>>> 6e69861c452a29be2c9ad3bfac0bcffc253acb3a
