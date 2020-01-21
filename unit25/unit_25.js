
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
//5ADcB96BA48d3f80
// let xhttp = new XMLHttpRequest();
// let a = 0;
// xhttp.onreadystatechange =  function(){
//     if(this.readyState == 4 && this.status == 200){
//         myFunction(this.responseText);
//     }
// }

// xhttp.open("GET","http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1", true);

// xhttp.send();


// function myFunction(data){
//     console.log(data);
// }

// let xhttp2 = new XMLHttpRequest();

// xhttp2.onreadystatechange =  function(){
//     if(this.readyState == 4 && this.status == 200){
//         myFunction2(this.responseText);
//     }
// }

// xhttp2.open("POST","http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1", true);

// xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp2.send('auth=5ADcB96BA48d3f80&action=1');

// function myFunction2(data){
//     console.log('POST');
//     a = data;
//     console.log(data);
// }

function t1() {
    let out1 = document.querySelector('.out-1');

    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out1.innerHTML = this.responseText;
        }
    }
    xhttp1.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1",true);
    xhttp1.send();
}

let btn1 = document.querySelector('.b-1');

btn1.onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let out2 = document.querySelector('.out-2');

    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out2.innerHTML = this.responseText;
        }
    }
    xhttp2.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Yurii",true);
    xhttp2.send();
}

let btn2 = document.querySelector('.b-2');

btn2.onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */


function t3() {
    let out3 = document.querySelector('.out-3');

    let xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out3.innerHTML = this.responseText;
        }
    }
    xhttp3.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=2&num2=3",true);
    xhttp3.send();
}

let btn3 = document.querySelector('.b-3');

btn3.onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let out4 = document.querySelector('.out-4');

    let xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out4.innerHTML = this.responseText;
        }
    }
    xhttp4.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=1&num2=5",true);
    xhttp4.send();
}

let btn4 = document.querySelector('.b-4');

btn4.onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let out5 = document.querySelector('.out-5');

    let xhttp5 = new XMLHttpRequest();
    xhttp5.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out5.innerHTML = this.responseText;
        }
    }
    xhttp5.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5",true);
    xhttp5.send();
}

let btn5 = document.querySelector('.b-5');

btn5.onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {

}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {

}

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {

}
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {

}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {

}

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

}

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

}

// ваше событие здесь!!!

