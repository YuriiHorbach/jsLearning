
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11);
    let val = localStorage.getItem('5');
    console.log(val);
}

// ваше событие здесь!!!

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
let a2 = [7,6,5];

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let out3 = document.querySelector('.out-3');
    // console.log(localStorage.getItem('a2'));
    let val = localStorage.getItem('a2');
    val = JSON.parse(val);
    console.log(val);
    for(let i in val){
        out3.innerHTML += i +' '+ val[i] +'<br>';
    }
}
// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = {'hello': 'world', 'hi':'mahai'};

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let out5 = document.querySelector('.out-5');
    let val = localStorage.getItem('a4');
    val = JSON.parse(val);
    for(let i in val){
        out5.innerHTML += i +' '+ val[i] +'<br>';
    }
}

// ваше событие здесь!!!

document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let input = document.querySelector('.i-7');
let a7 = [];
function t7() {
    a7.push(input.value);
    localStorage.setItem('a7', JSON.stringify(a7));
    console.log(a7);
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let val = localStorage.getItem('a7');
    val = JSON.parse(val);
    val.pop();
    localStorage.setItem('a7', JSON.stringify(val));
    console.log(val);
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */



window.addEventListener('storage', function(e){
    document.querySelector('fieldset').style.backgroundColor = localStorage.getItem('bg');
document.querySelector('.out91').innerHTML = localStorage.getItem('bg');
});







// ваше событие здесь!!!
// t9();

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {
    let btn = document.querySelector('.b-10');
    localStorage.setItem('card', JSON.stringify(card));
}

t10();
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */


function t11() {
    let card = localStorage.getItem('card');

    val = JSON.parse(card);
    console.log(val);

    let out = '';

    for(let i in val){
        
        out += `<div class="minCart">`;
        out += `<button class="button-primary plus" data-prodplus = "${i}" >+</button>`; 
        

        out += `<p class = "prod" data-prod = "${i}">  ${i} </p>`;

        out += `<button class="button-primary minus"  data-prodminus = "${i}">-</button>`;
        
        out += `<p class = "quantity" data-prodquant = "${i}"> &nbsp ${val[i]} </p>`;
        out += `<br>`;

        out += `</div>`;
        out += `<br>`;
    }

    document.querySelector('.out-10').innerHTML += out;
}

// ваше событие здесь!!!
t11();

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {

    // for (var j = 0; i < prod.length; j++){
//     console.log(prod[j]);
//     console.log(prod);
//         let btnPlus = document.createElement('button');
//         btnPlus.className = 'button-primary btnPlus';
//         btnPlus.innerHTML = '+';
//         btnPlus.setAttribute('data', 'prod');
//         let btnMinus = document.createElement('button');
//         btnMinus.className = 'button-primary btnMinus';
//         btnMinus.innerHTML = '-';
//         btnMinus.setAttribute('data', 'quant');
//         prod[i].prepend(btnPlus);
//         prod[i].append(btnMinus);
// } 



let allButtonsPlus = document.querySelectorAll('.plus');
let allButtonsMinus = document.querySelectorAll('.minus');
let allProds = document.querySelectorAll('.prod');
let allMinicards = document.getElementsByClassName('minCart');


console.log(allMinicards);
console.log(allMinicards.children.length);
/*-------------------------------------*/
for(let i = 0; i < allButtonsPlus.length; i++){
    allButtonsPlus[i].onclick = function(){

        for(let j in allProds){
            if(this.dataset.prodplus == allProds[j].innerHTML){
            }
        }
        let dataAtrPlus = this.dataset.prodplus;
        
        
        // if(dataAtr == ){}

    }
}

let product = document.querySelectorAll('.prod');
for(let j = 0; j < product.length; j++ ){
    console.log(this.innerHTML);
}


}

// ваше событие здесь!!!
t12();





// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!

let probaBtns = document.querySelectorAll('.ww');
console.log(probaBtns.innerHTML);

for(let i = 0; i < probaBtns.length; i++){
    probaBtns[i].onclick = function(){
        console.log(this.innerHTML);
    }
}

