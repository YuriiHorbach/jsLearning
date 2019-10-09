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
 Task 6.
Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.
*/
let out_13_6 = document.querySelector('.out-13-6');

let a6 = {
    name: 'John',
    age: 45,
    sex: 'man',
    height: 175
}

for(let key in a6){
    out_13_6.innerHTML += a6[key] + '<br>' ;
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
let inp8 = document.querySelector('.u8-value__delete');
let u8_btn = document.querySelector('.u8-btn');


u8_btn.onclick = () => {
    let inpVal8 =  inp8.value;
    delete a7[inp8.value];
    for(let key in a7){
            out_13_8.innerHTML = key + ' ' + a7[key]  + '<br>';
    } 
    // document.querySelector('.out-13-8').innerHTML =  out_13_8;
}


/* 
Task 9.
Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.
*/

let out_13_9 = document.querySelector('.out-13-9');
let deleteInput = document.querySelector('.u9-delete-value__input');
let u9_btn = document.querySelector('.u9-btn');

function getKey(inpVal, arr){
    for(let key in arr){
        if(arr[key] ==  inpVal){
            delete arr[key];
        }
    }
    return arr;
}

u9_btn.onclick = () => {
    getKey(deleteInput.value, a7);
    for(let key in a7){
        out_13_9.innerHTML += key + ' ' + a7[key] +  '<br>';
    } 
}


/* 
Task 10.
Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
*/

let out_13_10 = document.querySelector('.out-13-10');
let inp10 = document.querySelector('.u10-has-key__input');
let u10_btn = document.querySelector('.u10-btn');

function getKeyAgain(inpVal, arr){
    let res;
    for(let key in arr){
        if(key == inpVal){
            res = true;
        }
        else if(key != inpVal){
            res = false;
        }
    }
    return res;
}

u10_btn.onclick = () => {
    out_13_10.innerHTML = getKeyAgain(inp10.value, a7);
}

/* 
Task 11.
Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
        a11 = {
            "red" : ['Академгородок',...],
            "green" : 
        }
*/
let out_13_11 = document.querySelector('.out-13-11'); 

let a11 = {
    "red" : ['Академмістечко',
             'Житомирська',
             'Святошин',
             'Нивки',
             'Берестейська',
             'Шулявська',
             'Політехнічний інститут',
             'Вокзальна',
             'Університет',
             'Театральна',
             'Хрещатик',
             'Арсенальна',
             'Дніпро',
             'Гідропарк',
             'Лівобережна',
             'Дарниця',
             'Чернігівська',
             'Лісова'
            ],
    "blue" : [
             'Героїв Дніпра',
             'Мінська',
             'Оболонь',
             'Почайна',
             'Тараса Шевченка',
             'Контрактова площа',
             'Поштова площа',
             'Майдан Незалежності',
             'Площа Льва Толстого',
             'Олімпійська',
             'Палац «Україна»',
             'Либідська',
             'Деміївська',
             'Голосіївська',
             'Васильківська',
             'Виставковий центр',
             'Іподром',
             'Теремки'
            ],
    "green" :[
            'Сирець',
            'Дорогожичі',
            'Лук\'янівська',
            'Золоті ворота',
            'Палац спорту',
            'Кловська',
            'Печерська',
            'Дружби народів',
            'Видубичі',
            'Славутич',
            'Осокорки',
            'Позняки',
            'Харківська',
            'Вирлиця',
            'Бориспільська',
            'Червоний хутір'
    ]
}

for(let key in a11){
    out_13_11.innerHTML += key +':'+ a11[key] + '<br>';
    out_13_11.innerHTML += '<br>';
}

/* 
Task 12.
Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.
*/
let out_13_12 = document.querySelector('.out-13-12'); 
let select12 = document.querySelector('.u12-branch').getElementsByTagName('option'); 
let btn12 = document.querySelector('.btn-13-12');

btn12.onclick = () => {
    for(let i = 0; i < select12.length; i++){
        for(let key in a11){
            if(select12[i].value == key && select12[i].selected){
                out_13_12.innerHTML = a11[key];
            }
        } 
    }
}

    
/* 
Task 13.
Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!
*/
let btn13 = document.querySelector('.u13-reverse');
let out_13_13 = document.querySelector('.out_13_13');

btn13.onclick = () => {
    for(let i = 0; i < select12.length; i++){
        for(let key in a11){
            if(select12[i].value == key && select12[i].selected){
                out_13_13.innerHTML += a11[key];
            }
        } 
    }
}
    





