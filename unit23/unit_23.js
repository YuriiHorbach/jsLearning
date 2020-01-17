
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


function t9(){
   
    let elem = document.getElementsByName('rb-9');

    for(i = 0; i < elem.length; i++) { 
        elem[i].onchange = testR;
    } 

    function testR(){
        localStorage.setItem('bg',this.value);
        document.querySelector('.out91').innerHTML = localStorage.getItem('bg');
        document.querySelector('fieldset').style.backgroundColor = localStorage.getItem('bg');
        
    }
    // window.addEventListener('storage', function(e){
    //     document.querySelector('fieldset').style.backgroundColor = localStorage.getItem('bg');
    // });

    // testR();
    // window.addEventListener('storage', function(e){
    //     document.querySelector('fieldset').style.backgroundColor = localStorage.getItem('bg');
    // document.querySelector('.out91').innerHTML = localStorage.getItem('bg');
    // });
}


// ваше событие здесь!!!
 t9();

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const cart = {
    'apple' : 3,
    'grape' : 2
}

function t10() {
    
     localStorage.setItem('cart', JSON.stringify(cart));

    t14();

    document.querySelector('.b-10').disabled = true;
   
}
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11(){
    // let card = localStorage.getItem('card');

    // val = JSON.parse(card);

    let table = document.createElement('table');
    let out = document.querySelector('.out-10');
    parentElement = out.parentElement;

    out.append(table);

    let btnPlus = document.createElement('button');
    btnPlus.className = 'plus';
    let sum = 0;
   
    if(cart){
        table.innerHTML += `
            <thead>
                <tr>
                    <th colspan = "3">Name</th>
                    <th colspan = "3">Quantity</th>
                </tr>
            </thead>`;
        let sum = 0;
        for(let i in cart){
        
            table.innerHTML += `
                <tr>
                    <td>
                        <button class = "plus">+</button>
                    </td>
                    <td class = "goods" data = "${i}">
                        ${i}
                    </td>
                    <td>
                        <button class = "minus">-</button>
                    </td>
                    <td class = "quantity">
                        ${cart[i]}
                    </td>
                </tr>
            `;
            sum += cart[i];
            t12();
        }
    }
    table.innerHTML += `
    <tr>
        <td colspan = "3">Total</td>
        <td class = "totalSum">
            ${sum}
         </td>
    </tr>
`;
}
// ваше событие здесь!!!


// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12(){
   
    let btnPlus = document.querySelectorAll('.plus'); 
    for(let j = 0; j < btnPlus.length; j++){

        btnPlus[j].onclick = function(e){
            console.log(cart);
            let content = e.target.parentNode.parentNode.querySelector('.goods').innerText;
            console.log(content);
            console.log(cart[content]);
            let content2 = e.target.parentNode.parentNode.querySelector('.quantity');
            console.log(content2);
            content2.innerHTML = ++cart[content];
            localStorage.setItem('cart', JSON.stringify(cart));
            t13();
        }
    }
    

    let btnMinus = document.querySelectorAll('.minus'); 
    for(let j = 0; j < btnMinus.length; j++){

        btnMinus[j].onclick = function(e){
            console.log(cart);
            let content = e.target.parentNode.parentNode.querySelector('.goods').innerText;
            console.log(content);
            console.log(cart[content]);
            let content2 = e.target.parentNode.parentNode.querySelector('.quantity');
            console.log(content2);
            let  numberQuantity = parseInt(content2.innerHTML);
            content2.innerHTML = cart[content] -=1;
            if(cart[content] < 1){
                content2.innerHTML = 1;
                cart[content] = 1;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            t13();
        }
    }

}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {
    let totalCells = document.querySelectorAll('.quantity');
    let totalSum = document.querySelector('.totalSum');

    let sum = 0;

    for(let i = 0; i < totalCells.length; i++){
        sum += parseInt(totalCells[i].innerText);
        console.log(sum);
        totalSum.innerText = sum;
    };
}
// ваше событие здесь!!!
// t13();
// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t14(){
    let cart = localStorage.getItem('cart');
    if(cart !== null){
        t11();
        t12();
    }
    else{
        document.querySelector('.out-10').innerHTML = 'Cart is empty';
    }
}
// ваше событие здесь!!!