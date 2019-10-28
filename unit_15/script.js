/* 
Task 1.
Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.
*/

let set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add('f');
set1.add('7');
set1.add(8);

console.log(set1);

/*
Task 2.
Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.
*/

let inp2 = document.querySelector('.inp-15-2');
let btn2 = document.querySelector('.btn15-2');
let btnDel = document.querySelector('.btn15-2del');
let btnCheck = document.querySelector('.btn15-2check');
let out15_5 = document.querySelector('.out15-5');

let set2 = new Set();



/*
Task 3.
Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).
*/

btnDel.onclick = () => {
    set2.delete(inp2.value);
    console.log(set2);
    out15_5.innerHTML = t5(set2);
}

/*
Task 4.
Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4.
*/

btnCheck.onclick = () => {
    console.log(set2.has(inp2.value));
    out15_5.innerHTML = t5(set2);
}


/*
Task 5.
Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции. Действия должны запускаться при вызове функции t5.
*/

function t5(set){
    return set.size;
  }
  
  btn2.onclick = () => {
      set2.add(inp2.value);
      console.log(set2);
      out15_5.innerHTML ='Size(task 5 )' + ' ' + t5(set2);
  }

/*
Task 6.
Есть массив a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set. Действия должны запускаться при вызове функции t6.
*/

let out15_6 = document.querySelector('.out15_6');

let a6 = [3,4,3,2,4,56,1,23];

function getUniqValue(arr){
    mySet = new Set(arr);
    return mySet.size;
}

out15_6.innerHTML = getUniqValue(a6);

/*
Task 7.
Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split(')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set.
*/

let inp7 = document.querySelector('.inp15_7');
let btn7 = document.querySelector('.btn15_7');
let out15_7 = document.querySelector('.out15_7');

btn7.onclick = () => {
    let arr = inp7.value.split('');
    let arrLen = arr.length;
    let set7 = new Set(arr);
    let setSize = set7.size;
    if(arrLen == setSize){
        out15_7.innerHTML = 'Unique password';
    }
    else{
        out15_7.innerHTML = 'Not unique password';
    }

}

/*
Task 8.
Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8.
*/
let btn8 = document.querySelector('.btn15_8');
let out15_8 = document.querySelector('.out15_8');

let a8 = new Set();

a8.add(1);
a8.add(21);
a8.add(2);
a8.add(4);
a8.add('t');
a8.add('f');

// let arr = [];


function forTask8(set){
    let arr = [];
    for(let item of set){
        if(item % 2 == 0){
            arr.push(item);
        }
    }
    return arr;
}


btn8.onclick = () => {
    out15_8.innerHTML = forTask8(a8);
}

/*
Task 9.
Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.
*/
let btn9 = document.querySelector('.btn15_9');
let out15_9 = document.querySelector('.out15_9');


let a9 = new Set([1, 2, 3, 4, 5]);


function t9(set){
    let arr = Array.from(set);
    let newSet = new Set(arr.reverse());
    return newSet;
}

let a9_res;
btn9.onclick = () => {
    let a9_res = t9(a9);
    for(let i of a9_res){
        out15_9.innerHTML += i + ' ';
    }
}

/*
Task 10.
Cложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res. Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик. a10_res = { "3" : 5, "1" : 1, }
*/
let out15_10 = document.querySelector('.out15_10');

let a10 = [1,2,33,4,5,667,78,8,1,2];
let a10_res = {};

for(let i = 0 ; i < a10.length; i++){
    if(a10_res[a10[i]] != undefined){
        a10_res[a10[i]]++;
    }
    else{
        a10_res[a10[i]] = 1;
    }
}

for(let key in a10_res){
    out15_10.innerHTML += key + ' ------ ' + a10_res[key] + '<br>';
}


/*
Task 11.
Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.
*/

/*подскажите, пожалуйста, как сделать проще если можно проще сделать*/

let inp11 = document.querySelector('.i-11');
let btn11 = document.querySelector('.b-11');
let out15_11 = document.querySelector('.out15_11');

let a11_res = [];

function t11(arr, input){

    let temp = '';

    if( arr.length === 0){
        arr.push(input.value);
    }else{
        for(let i = 0 ; i < arr.length; i++){
            if(arr[i] === input.value){
                arr.pop(input.value);
            }
            else{
                temp = input.value;
            }
        }
        arr.push(temp);
        arr = arr.filter(Boolean);
    }
    return arr;
}

btn11.onclick = () =>{
    out15_11.innerHTML = t11(a11_res, inp11);
}

/*  
Task 12.
Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
*/

let mySet12 = new Set([1,2,3,4,5,'r']);
let out15_12 = document.querySelector('.out15_12');


function t12(set){
    let arr = Array.from(set);
    return arr;
}

a12_res = t12(mySet12);

out15_12.innerHTML = a12_res;

/*
Task 13.
Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Действия должны запускаться при вызове функции t13.
*/

let mySet13 = new Set([1,2,3,4,5,'r']);
let out15_13 = document.querySelector('.out15_13');

function t13(set, elem){
    let arr = Array.from(set);
    return elem.innerHTML = arr;
}

t13(mySet13, out15_13);

/*
Task 14.
Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. Действия должны запускаться при вызове функции t14. Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).
*/

let mySet14 = new Set([1,2,3,4,5,'r']);
let out15_14 = document.querySelector('.out15_14');


function t14(set, elem, separator){
    let var1 = ' ';
    let arr = Array.from(set);
    for(let i = 0; i < arr.length; i++ ){
        var1 += arr[i] + separator;
    }
    return elem.innerHTML = var1;
}

t14(mySet14, out15_14,'-');

/*
Task 15.
Дан массив arr15 = [ [1,0], [1,0], [2,0] ] . Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор a15_res выведите на страницу. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
*/

let arr15 = [ [1,0], [1,0], [2,0] ];
let out15_15 = document.querySelector('.out15_15');


function t15(arr, elem){
    let tempVar = '';
    let mySet = new Set();
    for(let i = 0; i < arr.length; i++ ){
        tempVar = mySet.add(arr[i]);
    }
    for(let key of tempVar ){
        for(let i of key){
            elem.innerHTML += i + ' ';
        }
        elem.innerHTML += ', ';
    }
}

t15(arr15, out15_15);

/*
Task 16.
Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор выведите в консоль. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a16_res.
*/

let a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ];

function t16(arr){
    let mySet = new Set();
    for(let i = 0; i < arr.length; i ++){
        mySet.add(arr[i]);
    }  
    return mySet;
}

let a16_res = t16(a16);
console.log(a16_res);

/*
Task 17.
Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат. Действия должны запускаться при вызове функции t17.
*/

let u17 = 'Primer';

function t17(str){
    let set1 = new Set(str);
    return set1;
}

console.log(t17(u17));

/*set удалил букву r, поскольку в слове их 2 и создался новый набор с уникальными значениями*/

/*
Task 18.
Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18.
*/
let out15_18 = document.querySelector('.out15_18');
let a18 = [5, 7, 9, 11, 13, 15];
let set18 = new Set(a18);



function t18(arr){
    let count = 0;
    
    for(let item of a18){
        console.log(count +' - '+ item);
        out15_18.innerHTML += count +' - '+ item + '<br>' ;
        count++;
    }
    return out15_18.innerHTML ;
}

t18(a18);

/*
Task 19.
Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора. Действия должны запускаться при вызове функции t19.
*/

// let a19 = new Set([1,2,3,4,5,6,7,8]);

// console.log(a19);

// for(let key in a19){
//     if(key %2 ==0 ){
//      con   
//     }
// }