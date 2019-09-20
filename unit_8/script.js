// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

let out1 = document.querySelector('.out1');

function func_1(){
    p = 0;
    let outStr = '';
    let flag = 4;

    while (p < 1) {
        let p1 = 0;
        while (p1 <= 100) {
            outStr += p1 + "&nbsp;";
            p1++;
        }
        p++;
    }
    return outStr;
}

out1.innerHTML = func_1();



// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

let out2 = document.querySelector('.out2');

function func_2(a, b) {
    let str2 = '';
    while(a <= b){
        str2 += a + " ";
        a++;
    }
    return str2;
}

out2.innerHTML = func_2(5,7);


// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while


let out3 = document.querySelector('.out3');

function func_3(a, b) {
    let str3 = '';
    while(b >= a){
        str3 += b + " ";
        b--;
    }
    return str3;
}

out3.innerHTML = func_3(5,7);


// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

let out4 = document.querySelector('.out4');

function func_4(a, b, c) {
    let str4 = '';
    while(b >= a){
        str4 += b + " ";
        b -= c;
    }
    return str4;
}

out4.innerHTML = func_4(1,5,2);


// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

let out5 = document.querySelector('.out5');

function func_5() {
    p = 0;
    let sum = 0;
    while(p <= 20){
        sum += p;
        p++;
    }
    return sum;
}

out5.innerHTML = func_5();



// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

let out6 = document.querySelector('.out6');

function func_6(a, b) {
    let p = a;
    let sum = 0;
    if(b > a){
        while(p <= b){
            sum += p;
            p++;
        }
    }
    else{
        sum = false;
    }
    return sum;
}

out6.innerHTML = func_6(1,3);



// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

let out7 = document.querySelector('.out7');

function func_7(a, b) {
    let p = a;
    let sum = 1;
    if(b > a){
        while(p <= b){
            sum *= p;
            p++;
        }
    }
    else{
        sum = false;
    }
    return sum;
}

out7.innerHTML = func_7(1,4);

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

let out8 = document.querySelector('.out8');

function func_8() {
    let coins = 333;
    let days = 1;
    let allCoins = 1000000;

    while( coins <= allCoins){
        coins = coins * 2;
        days++;
        // console.log(days + ' ' + coins);
        
    }
    return days;
}

out8.innerHTML = func_8();

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

 let out9 = document.querySelector('.out9');

// let str9 = "";
// p = 0;    
// while(p <= 5){
//     if(p % 2 == 0){
//         p = '-';
//     }
//     str9 += p + ' ';
//     p++;
// }

// out9.innerHTML = str9;

function func_9(a, b){
    let str9 = '';
    let p9 = a;
   
    while(p9 <= b){
        if(p9 % 2 == 0){
            str9 += "0 ";
        }
        else{
            str9 += p9 + " ";
        }
        p9++;
    }
    return str9;
}

    out9.innerHTML = func_9(1,10);
    


// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *
let out10 = document.querySelector('.out10');

function func_10(){
    let p10 = 0;
    let str10 = '';
    while(p10 < 3){
        let p10_2 = 0;
        while(p10_2 < 3){
            let p10_3 = 2;
            while(p10_3 > p10_2 ){
                str10 += '*';
                p10_3--;
            }
            str10 += '<br>';
            p10_2++;
        }  
        p10++;    
    }
    return str10;
}

out10.innerHTML = func_10();


// // Task 11
// // Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// // while.
let out11 = document.querySelector('.out11');
// for(i = 0; i < 10; i++) {

//     console.log(`%d %d`, 10 - i, 1 + i);
//    num1 = `%d %d`, 10 - i, 1 + i;
// }

// out11.innerHTML = num1;

let i = 10;
let num1= '';
let num2 = "";
let num3 = '0';
let j = 1;
while(i > 0){
    num1 += i + ' ';
    num3 = num1 += j + ' ';
    i--;
    j++;
    
}

out11.innerHTML = num3;
// out112.innerHTML = num2;

// function func_11() {

// }

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {

}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {

}

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {

}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {

}

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {

}


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {

}


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {

}

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {

}