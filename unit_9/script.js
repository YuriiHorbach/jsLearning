// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;
let u_1 = document.querySelector('.u-1');

function func_1(elem) {
    elem.style.width = '200px';
}

func_1(u_1);

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

let u_2 = document.querySelector('.u-2');

function func_2(elem) {
    elem.style.background = 'green';
}

func_2(u_2);


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

let u_3 = document.querySelectorAll('.u-3');

function func_3(elem) { 
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
            this.style.background = 'red';
        }
    }
}

func_3(u_3);


// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

let u_4 = document.querySelectorAll('.u-4');

function func_4(elem) { 
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
           this.classList.add('css-2');
        }
    }
}

func_4(u_4);

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

let u_5 = document.querySelectorAll('.u-5');

function func_5(elem) { 
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
           this.classList.remove('css-3');
        }
    }
}

func_5(u_5);



// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
let u_6 = document.querySelector('.u-6');

function func_6(elem) {
    elem.classList.toggle('active');
}

func_6(u_6);


// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

let css3 = document.querySelectorAll('.css-3');
let out7 = document.querySelector('.out7');

function func_7(elem) {
    let s = 0;
    for(let i = 0; i < elem.length; i++){
        if(elem[i].classList.contains('css-3')){
            s++;
        }
    }
    return s;
}

out7.innerHTML = func_7(css3);

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.
let u_1_8 = document.querySelector('.u-1');

function func_8(elem) { 
   elem.setAttribute('title', 'test-data');
   return elem;
}

func_8(u_1_8);

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

let btn9 = document.querySelectorAll('.u-9');
let out9 = document.querySelector('.out9');

function func_9(elem) {
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
            let val = '';
            val = this.getAttribute('data');
            document.querySelector('.out9').innerHTML = val;
        }
    }
}

func_9(btn9);

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
let btn10 = document.querySelectorAll('.u-10__button');
let out10 = document.querySelector('.u-10__out');

function func_10(elem) {
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
            let val = this.getAttribute('data-currency');
            document.querySelector('.u-10__out').innerHTML = val;
        }
    }
}

func_10(btn10);

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 
let btn11 = document.querySelectorAll('.u-11__button');

function func_11(currency){
    for(let i = 0; i < currency.length; i++){
        currency[i].onclick = function(){
            let val = this.getAttribute('data-currency');
            input = document.querySelector('.u-11__input').value;
            let res = val * input;
            document.querySelector('.u-11__out').innerHTML = res;
        }
    }
}

func_11(btn11);

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент


test12 = document.querySelector('.test12');

function func_12(elem) { 
    let div12 = document.createElement('div');
    div12.classList.add('css-4');
    elem.appendChild(div12);
}

func_12(test12);

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).
let u_13 = document.querySelector('.u-13');

function func_13() { 
    let span = document.createElement('span');
    span.classList.add('span-13');
    span.innerHTML = '13';
    u_13.appendChild(span);
}

func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

let u_14 = document.querySelector('.u-14');

function func_14() { 
    let span = document.createElement('span');
    span.classList.add('span-14');
    span.innerHTML = '14';
    u_14.prepend(span);
}

func_14();


// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)
let u_15 = document.querySelector('.u-15');

function func_15() { 
    let span = document.createElement('span');
    span.classList.add('span-15');
    span.innerHTML = '15';
    u_15.before(span);
}

func_15();


// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

let u_16out = document.querySelector('.u-16__out');

function func_16(elem) { 
    let btn = document.createElement('button');
    btn.classList.add('u-16');
    btn.innerHTML = 'Push';
    btn.onclick = () => {
        console.log('u-16');
    }
    elem.appendChild(btn);
}

func_16(u_16out);


// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17



function func_17() { 
    let task17 = document.querySelector('.task17');
    let u_17out = document.querySelector('.u-17');
    let p = document.createElement("p");
    p.classList.add('u-17');
    p.innerHTML = '17';
    u_17out.replaceWith(p);
}

func_17();


// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент
let out18 = document.querySelectorAll('.out-18');

function func_18(elem){
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = function(){
            this.remove();
        }
    }
}

func_18(out18);

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let ul = document.querySelector('.u-19');
    let li = document.createElement('li');
    li.innerHTML = text;
    ul.append(li);
}

func_19('aaaa');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.
let inp20 = document.querySelector('.inp20');

let btn20 = document.querySelector('.btn20');
let check20 = document.querySelector('.check20');

function func_20(text) {
    let check20 = document.querySelector('.check20');
    let ul = document.querySelector('.u-20');
    let li = document.createElement('li');
    li.innerHTML = text;
    
    if(check20){
        ul.append(li);
        li.classList.add('css-5');
    }else{
        ul.append(li);
    }
}

console.log(inp20.value);

btn20.onclick = () => {
    func_20(inp20.value);
}






