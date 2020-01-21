
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
    let out6 = document.querySelector('.out-6');

    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out6.innerHTML = this.responseText;
        }
    }
    xhttp6.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=1&num2=5",true);
    xhttp6.send();
}

let btn6 = document.querySelector('.b-6');

btn6.onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let out7 = document.querySelector('.out-7');

    let xhttp7 = new XMLHttpRequest();
    xhttp7.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out7.innerHTML = this.responseText;
        }
    }
    xhttp7.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7",true);
    xhttp7.send();
}

let btn7 = document.querySelector('.b-7');

btn7.onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/



function t8() {
    let out8 = document.querySelector('.out-8');

    let xhttp8 = new XMLHttpRequest();
    xhttp8.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out8.innerHTML = this.responseText;
        }
    }
    xhttp8.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1984",true);
    xhttp8.send();
}

let btn8 = document.querySelector('.b-8');

btn8.onclick = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */


function t9() {
    let out9 = document.querySelector('.out-9');

    let xhttp9 = new XMLHttpRequest();
    xhttp9.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out9.innerHTML = this.responseText;
        }
    }
    xhttp9.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1",true);
    xhttp9.send();
}

let btn9 = document.querySelector('.b-9');

btn9.onclick = t9;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let out10 = document.querySelector('.out-10');

    let xhttp10 = new XMLHttpRequest();

    xhttp10.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out10.innerHTML = this.responseText;
        }
    }

    xhttp10.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1",true);

    xhttp10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp10.send('auth=5ADcB96BA48d3f80&action=1');
}

let btn10 = document.querySelector('.b-10');

btn10.onclick = t10;
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    let out11 = document.querySelector('.out-11');

    let xhttp11 = new XMLHttpRequest();

    xhttp11.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out11.innerHTML = this.responseText;
           
        }
    }

    xhttp11.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Yurii",true);

    xhttp11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp11.send('auth=5ADcB96BA48d3f80&action=2&name=Yurii');
}

let btn11 = document.querySelector('.b-11');

btn11.onclick = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let out12 = document.querySelector('.out-12');

    let xhttp12 = new XMLHttpRequest();

    xhttp12.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out12.innerHTML = this.responseText;
           
        }
    }

    xhttp12.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=1&num2=5",true);

    xhttp12.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp12.send('auth=5ADcB96BA48d3f80&action=3&num1=1&num2=5');
}

let btn12 = document.querySelector('.b-12');

btn12.onclick = t12;

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    let out13 = document.querySelector('.out-13');

    let xhttp13 = new XMLHttpRequest();

    xhttp13.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out13.innerHTML = this.responseText;
           
        }
    }

    xhttp13.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=1&num2=5",true);

    xhttp13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp13.send('auth=5ADcB96BA48d3f80&action=4&num1=1&num2=5');
}

let btn13 = document.querySelector('.b-13');

btn13.onclick = t13;

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let out14 = document.querySelector('.out-14');

    let xhttp14 = new XMLHttpRequest();

    xhttp14.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out14.innerHTML = this.responseText;
           
        }
    }

    xhttp14.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5",true);

    xhttp14.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp14.send('auth=5ADcB96BA48d3f80&action=5');
}

let btn14 = document.querySelector('.b-14');

btn14.onclick = t14;

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    let out15 = document.querySelector('.out-15');

    let xhttp15 = new XMLHttpRequest();

    xhttp15.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out15.innerHTML = this.responseText;
           
        }
    }

    xhttp15.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=1&num2=5",true);

    xhttp15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp15.send('auth=5ADcB96BA48d3f80&action=6&num1=1&num2=5');
}

let btn15 = document.querySelector('.b-15');

btn15.onclick = t15;

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    let out16 = document.querySelector('.out-16');

    let xhttp16 = new XMLHttpRequest();

    xhttp16.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out16.innerHTML = this.responseText;
           
        }
    }

    xhttp16.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7",true);

    xhttp16.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp16.send('auth=5ADcB96BA48d3f80&action=7');
}

let btn16 = document.querySelector('.b-16');

btn16.onclick = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    let out17 = document.querySelector('.out-17');

    let xhttp17 = new XMLHttpRequest();

    xhttp17.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out17.innerHTML = this.responseText;
           
        }
    }

    xhttp17.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1984",true);

    xhttp17.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp17.send('auth=5ADcB96BA48d3f80&action=8&year=1984');
}

let btn17 = document.querySelector('.b-17');

btn17.onclick = t17;
// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    let out18 = document.querySelector('.out-18');

    let xhttp18 = new XMLHttpRequest();

    xhttp18.onreadystatechange =  function(){
        if(this.readyState == 4 && this.status == 200){
            out18.innerHTML = this.responseText;
           
        }
    }

    xhttp18.open("POST", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1",true);

    xhttp18.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    


    xhttp18.send('auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1');
}

let btn18 = document.querySelector('.b-18');

btn18.onclick = t18;
// ваше событие здесь!!!

