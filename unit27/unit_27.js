// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-1').innerHTML = values;
     });
}

document.querySelector('.b-1').onclick = t1;


// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=2&num2=5')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=2&num2=5')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-2').innerHTML = values;
     });
}

document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=2&num2=5')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-3').innerHTML = values;
     });
}

document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1984')
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-4').innerHTML = values;
     });
}

document.querySelector('.b-4').onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {

    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=5ADcB96BA48d3f80&action=1', // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=2', // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then((data)=>{
                resolve(data.text());
            })
            .then((data)=>{
                return data;
            });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-5').innerHTML = values;
     });
}

document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=5ADcB96BA48d3f80&action=3&num1=2&num2=5', // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=4&num1=2&num2=5', // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then((data)=>{
                resolve(data.text());
            })
            .then((data)=>{
                return data;
            });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-6').innerHTML = values;
     });
}

document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=5ADcB96BA48d3f80&action=5', // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=6&num1=2&num2=5', // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then((data)=>{
                resolve(data.text());
            })
            .then((data)=>{
                return data;
            });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-7').innerHTML = values;
     });
}

document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let promise1 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=5ADcB96BA48d3f80&action=7', // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
        .then((data)=>{
            resolve(data.text());
        })
        .then((data)=>{
            return data;
        });
    });
    
    let promise2 = new Promise((resolve, reject)=>{
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=8&year=1984', // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then((data)=>{
                resolve(data.text());
            })
            .then((data)=>{
                return data;
            });
    });
    
     Promise.all([promise1, promise2]).then(values => { 
            document.querySelector('.out-8').innerHTML = values;
     });
}

document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!

