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

function t5(set){
  return set.size;
}

btn2.onclick = () => {
    set2.add(inp2.value);
    console.log(set2);
    out15_5.innerHTML = t5(set2);
}

btnDel.onclick = () => {
    set2.delete(inp2.value);
    console.log(set2);
    out15_5.innerHTML = t5(set2);
}

btnCheck.onclick = () => {
    console.log(set2.has(inp2.value));
    out15_5.innerHTML = t5(set2);
}


/*
Task 3.
Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).
*/



/*
Task 4.
Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4.
*/



/*
Task 5.
Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции. Действия должны запускаться при вызове функции t5.
*/

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