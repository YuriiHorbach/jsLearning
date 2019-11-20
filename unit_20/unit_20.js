
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/


// document.querySelector('.out-1').onkeypress = document.querySelector('.i-1').value;

function t1() {
    document.querySelector('.out-1').innerHTML = this.value;
}

// ваше событие здесь!!!
document.querySelector('.i-1').onkeypress = t1;


// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').innerHTML += e.keyCode + ' ';
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

// let w3 = 75;
function t3(e){
    if(e.charCode > 47 && e.charCode < 57){
        document.querySelector('.out-3').innerHTML += false;
    }
    else{
        document.querySelector('.out-3').innerHTML += true;
    }
}

document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    document.querySelector('.out-4').innerHTML = this.value.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    document.querySelector('.out-5').innerHTML = this.value.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5;


// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    document.querySelector('.i-6').value = this.value.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    console.log(a7);

    document.querySelector('.out-7').innerHTML = a7[Math.floor(Math.random()*a7.length)]
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;
// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
    // if(e.keyCode == 105){
    //     document.querySelector('.out-8').innerHTML += 1;
    // } else if(e.keyCode == 108){
    //     document.querySelector('.out-8').innerHTML += 0;
    // } else if(e.keyCode == 111){
    //     document.querySelector('.out-8').innerHTML += 7;
    // }
       

    switch(e.charCode){
        case 105:
            document.querySelector('.out-8').innerHTML += 1;
            break;
        case 108:
            document.querySelector('.out-8').innerHTML += 0;
            break;
        case 111:
            document.querySelector('.out-8').innerHTML += 7;
            break;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count = 0;
function t9(e) {
    if(e.keyCode == 40){
        count++;
    }
    document.querySelector('.out-9').innerHTML = count;
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {

}

// ваше событие здесь!!!

