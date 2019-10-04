/* 
Task 1.
Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
    const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9],
];  
*/

const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9],
];  

let out12_1 = document.querySelector('.out-12-1');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        out12_1.innerHTML += a[i][k] + ' ';
    }
    out12_1.innerHTML += '<br>';
}

/* 
Task 2.
Выведите на страницу символ 3 из массива a.  
*/

let out12_2 = document.querySelector('.out-12-2');

out12_2.innerHTML += a[0][2];

/* 
Task 3.
Выведите на страницу символ e из массива a.  
*/

let out12_3 = document.querySelector('.out-12-3');

out12_3.innerHTML += a[3][1];

/* 
Task 4.
Выведите на страницу содержимое третьего вложенного массива в массиве a.
*/

let out12_4 = document.querySelector('.out-12-4');

out12_4.innerHTML += a[2];

/* 
Task 5.
Выведите на страницу только первые элементы вложенных массивов массива a.
*/

let out12_5 = document.querySelector('.out-12-5');


for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
    }
    out12_5.innerHTML += a[i][0] + ' ';
    out12_5.innerHTML += '<br>';
}

/* 
Task 6.
Выведите на страницу только четные вложенные массивы массива a.
*/

let out12_6 = document.querySelector('.out-12-6');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        if(i % 2 == 0){
            out12_6.innerHTML += a[i][k] + ' ';
    
        }
    }
     out12_6.innerHTML += '<br>';
}

/* 
Task 7.
Выведите на страницу только числа из массива a.
*/

let out12_7 = document.querySelector('.out-12-7');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        if(!isNaN(a[i][k])){
            out12_7.innerHTML += a[i][k] + ' ';
        }
    }
     out12_7.innerHTML += '<br>';
}
/* 
Task 8.
Выведите на страницу только числа из массива a.
*/

let out12_8 = document.querySelector('.out-12-8');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
       
    }
    out12_8.innerHTML += a[i].length;
    out12_8.innerHTML += '<br>';
}

/* 
Task 9.
Выведите на страницу элементы массива a в обратном порядке, т.е.
    9 8 7 f e ...
*/

let out12_9 = document.querySelector('.out-12-9');

for(let i = a.length - 1; i > 0 ; i--){
    for(let k = a[i].length - 1 ; k >= 0; k--){
        out12_9.innerHTML += a[i][k] + ' ';
    }
}

/* 
Task 10.
        Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
            3 2 1
            c b a
            6 5 4   
*/

let out12_10 = document.querySelector('.out-12-10');

for(let i = 0; i < a.length; i++){
    for(let k = a[i].length - 1 ; k >= 0; k--){
        out12_10.innerHTML += a[i][k] + ' ';
    }
    out12_10.innerHTML += '<br>';
}

/* 
Task 11.
        Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
*/

let out12_11 = document.querySelector('.out-12-11');

const b = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

for(let i = 0; i < b.length; i++){
    for(let k = 0; k < b[i].length; k++){
        out12_11.innerHTML += b[i][k] + ' ';
    }
    out12_11.innerHTML += '<br>';
}
/* 
Task 12.
Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.
*/

let out12_12 = document.querySelector('.out-12-12');

for(let i = 0; i < b.length; i++){
    for(let k = 0; k < b[i].length; k++){
        out12_12.innerHTML += b[i][k] + ' ';
    }
    out12_12.innerHTML += '<br>';
}

function chessBoard(arr){
    
}