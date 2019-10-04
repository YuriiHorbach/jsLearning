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
