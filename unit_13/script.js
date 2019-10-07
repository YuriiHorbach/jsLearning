/* 
Task 1.
Выведите массив a1 на страницу.
            a1 = {
                3 : 'hello',
                'one' : 'hi'
            };
*/

let a1 = {
    3 : 'hello',
    'one' : 'hi'
};

let out_13_1 = document.querySelector('.out-13-1');

for (let key in a1){
    out_13_1.innerHTML += a1[key] + ' ';
}

/* 
Task 2.
Выведите на страницу элементы из масиива a2 у которых символов больше 4.
            a2 = {
                3 : 'hello',
                'one' : 'hi',
                'testt' : 'vodoley',
                'ivan' : 'ivanov'
            };
*/

let a2 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};

let out_13_2 = document.querySelector('.out-13-2');

for (let key in a2){
    if(a2[key].length > 4){
        out_13_2.innerHTML += a2[key] + ' ';
    }
}

/* 
Task 3.
Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
            a3 = {
                3 : 'hello',
                'one' : 'hi',
                'testt' : 'vodoley',
                'ivan' : 'ivanov'
               };
*/

let a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};

let out_13_3 = document.querySelector('.out-13-3');

for (let key in a3){
    if(key.length > 4){
        out_13_3.innerHTML += a3[key] + ' ';
    }
}

/* 
Task 4.
Выведите на страницу элементы из масиива a4 у которых значение - число.
            a4 = {
                3 : 'hello',
                'one' : 4,
                'testt' : 'vodoley',
                'ivan' : 6
                };
*/

let a4 = {
    3 : 'hello',
    'one' : 4,
    'testt' : 'vodoley',
    'ivan' : 6
    };

let out_13_4 = document.querySelector('.out-13-4');

for (let key in a4){
    // if(parseInt(a4[key])){
    //     out_13_4.innerHTML += a4[key] + ' ';
    // } или так или как ниже
    if(!isNaN(a4[key])){
        out_13_4.innerHTML += a4[key] + ' ';
    }
}

/* 
Task 5.
Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
            a5 = {
                a : 7,
                z : 4,
                45 : 12,
                f : 6
               };
*/

let  a5 = {
        a : 7,
        z : 4,
        45 : 12,
        f : 6
    };

let out_13_5 = document.querySelector('.out-13-5');

let sum = 0;
for (let key in a5){
    sum += a5[key];
    out_13_5.innerHTML = 'Sum of a5 elements is: ' + sum;
}

/* 
Task 7.
Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.
*/

let u7_key__input = document.querySelector('.u7-key__input');
let u7_value__input = document.querySelector('.u7-value__input');
let out_13_7 = document.querySelector('.out-13-7');
let u7_btn = document.querySelector('.u7-btn');
let  a7 = {};

u7_btn.onclick = () => {
    a7[u7_key__input.value] = u7_value__input.value;
        for(let key in a7){
        out_13_7.innerHTML += key + ' ' + a7[key] +  '<br>';
    }
}

/* 
Task 8.
Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.
*/

let out_13_8 = document.querySelector('.out-13-8');
let u8_value__delete = document.querySelector('.u8-value__delete');
let u8_btn = document.querySelector('.u8-btn');

u8_btn.onclick = () => {
    
}


