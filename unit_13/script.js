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
                // console.log(typeof(out_13_12.innerHTML));
            }
        } 
    }
}

/* 
Task 13.
Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!
*/
let out_13_13 = document.querySelector('.out_13_13'); 
// let select12 = document.querySelector('.u12-branch').getElementsByTagName('option'); 
let btn13 = document.querySelector('.u13-reverse');

btn13.onclick = () => {
    for(let i = 0; i < select12.length; i++){
        for(let key in a11){
            let varTemp =[];
            if(select12[i].value == key && select12[i].selected){
                varTemp = a11[key];
                out_13_13.innerHTML = varTemp.reverse();
            }
        } 
    }
}

    
/* 
Task 14.
Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.
*/

let select14 = document.querySelector('.u14-find-station');
let btn14 = document.querySelector('.btn-13-14');
let out14 = document.querySelector('.out_13_14');
let val = ' ';
for(let key in a11){
    for(let i in a11[key]){
        val += `<option value = "${key}">${a11[key][i]}</option>`
    }
}
select14.innerHTML = val;

btn14.onclick = () =>{
    out14.innerHTML = ' ';
    selected14_2 = document.querySelector('.u14-find-station').value;
    if(selected14_2 == 'red'){
        let divRed = document.createElement('div');
        divRed.className = 'lineRed';
        divRed.innerHTML = 'Red Line';
        out14.append(divRed);
    }
    else if(selected14_2 == 'blue'){
        let divBlue = document.createElement('div');
        divBlue.className = 'lineBlue';
        divBlue.innerHTML = 'Blue Line';
        out14.append(divBlue);
    }
    else if(selected14_2 == 'green'){
        let divGreen = document.createElement('div');
        divGreen.className = 'lineGreen';
        divGreen.innerHTML = 'Green Line';
        out14.append(divGreen);
    }
}

/*
Task 15.
Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).
*/

let select15_1 = document.querySelector('#u15-1');
let select15_2 = document.querySelector('#u15-2');
let btn15 = document.querySelector('.btn-13-15');
let out15_1 = document.querySelector('.out15_1');
let out15_2 = document.querySelector('.out15_2');
let selectOpt15 = document.querySelector('.u15-find-station_1').getElementsByTagName('option'); 

function selectText(selector) {

    let stationText = selector;
    let stationValue = stationText.options[stationText.selectedIndex].text;
    
    return stationValue;
}

let val15_1 = ' ';
let val15_2 = ' ';

for(let key in a11){
    for(let i in a11[key]){
        val15_1 += `<option value = "${key}">${a11[key][i]}</option>`
    }
}
for(let key in a11){
    for(let i in a11[key]){
        val15_2 += `<option value = "${key}">${a11[key][i]}</option>`
    }
}

select15_1.innerHTML = val15_1;
select15_2.innerHTML = val15_2;

function selectText(sel) {
    var selStation = sel;
    var selStationVal = selStation.options[selStation.selectedIndex].text;
    return selStationVal;
}
function selectValue(sel) {
    var selStation = sel;
    var selStationVal = selStation.options[selStation.selectedIndex].value;
    return selStationVal;
}


    btn15.onclick = () =>{
        let station1 = selectText(select15_1);
        let station2 = selectText(select15_2);
        let res1 = 0;
        let res2 = 0;
        let stationBetween=0;

         for(let key in a11){  
             if(station1 == station2){
                out15_1.innerHTML = 'Same stations. Make your choice';
                 console.log('Same stations. Make your choice.');
             }
             else if(selectValue(select15_1) == selectValue(select15_2)){
                for(let i = 1; i <= a11[key].length; i++){
                    if( a11[key][i] == station1){
                        res1 = i;
                    } 
                }
                for(let j = 1; j <= a11[key].length; j++){
                    if( a11[key][j] == station2){
                        res2 = j;
                    } 
                }
            }
           
            else
            {
                out15_1.innerHTML = 'Stations on different lines. Choice station in one line.';
            }
        } 
        if(res2 > res1){
            stationBetween = (res2 - res1) - 1;
            out15_1.innerHTML = stationBetween;
            console.log(stationBetween);
        } 
        else if(res1 > res2){
            stationBetween = (res2 - res1) + 1;
            stationBetween *= -1;
            out15_1.innerHTML = stationBetween;
        }
        
    }




/*
Task 16.
Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соответствии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.
*/

let metro = document.getElementsByName('metro');
let select16 = document.querySelector('.u16-select');


for(let i = 0; i < metro.length; i++){
   
    metro[i].onchange = function(){
        //clean select
        if(select16.innerHTML){
            select16.innerHTML = ' ';
        }
        
        if(metro[i].checked){
            let option1 = document.createElement('option');
            for(let key in a11){
                if(key == metro[i].value){
                    for(let i in a11[key]){
                        select16.innerHTML += `<option value = "${key}">${a11[key][i]}</option>`
                    }
                }
            }
            option1.value = metro[i];
            select16.appendChild(option1);
        }
    }
}


/*
Task 17.
Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.

    a17 = {
        "red" : [ ['Академгородок', 0] ,...],
        "green" : 
    }
*/

let a17 = {
    "red" : [
                ['Академгородок', 0],
                'Житомирська',
                'Святошин',
                'Нивки',
                'Берестейська',
                'Шулявська',
                'Політехнічний інститут',
                'Вокзальна',
                'Університет',
                ['Театральна',1],
                ['Хрещатик',1],
                'Арсенальна',
                'Дніпро',
                'Гідропарк',
                'Лівобережна',
                'Дарниця',
                'Чернігівська',
                ['Лісова',0]
             ],
    "blue" : [
                ['Героїв Дніпра',0],
                'Мінська',
                'Оболонь',
                'Почайна',
                'Тараса Шевченка',
                'Контрактова площа',
                'Поштова площа',
                ['Майдан Незалежності',1],
                ['Площа Льва Толстого',1],
                'Олімпійська',
                'Палац «Україна»',
                'Либідська',
                'Деміївська',
                'Голосіївська',
                'Васильківська',
                'Виставковий центр',
                'Іподром',
                ['Теремки',0]
              ],
    "green" :[
                ['Сирець',0],
                'Дорогожичі',
                'Лук\'янівська',
                ['Золоті ворота',1],
                ['Палац спорту',1],
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
                ['Червоний хутір',0]
            ]
}

let out17 = document.querySelector('.out_13_17');

for(let i in a17){
    for(let j in a17[i] ){
        out17.innerHTML += a17[i][j] + "<br>";
    }
    out17.innerHTML +=  "<br>";
}

/*
Task 18.
Выведите на страницу только станции с переходами из массива a17.
*/

let out18 = document.querySelector('.out_13_18');

for(let i in a17){
    for(let j in a17[i] ){
        for(k in a17[i][j]){
            if(a17[i][j][k] == 1){
                out18.innerHTML += a17[i][j][0] + "<br>";
            }
        }
    }
    out18.innerHTML +=  "<br>";
}

/*
Task 19.
Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.
*/

let asiaCountries = {
    'Азербайджан':{'Баку':[ 9.651, 86600]},
    'Армения' :{'Ереван':[3.018, 29800]},
    'Афганистан':{'Кабул':[32.53, 652200]},
    'Бангладеш':{'Дакка':[161, 174600]}
}

let out19 = document.querySelector('.out_13_19');

for(let key in asiaCountries){
    for(let cap in asiaCountries[key]){
        out19.innerHTML += key + ': ' + cap + ': ' + asiaCountries[key][cap] + '<br> ';
    }
    out19.innerHTML += '<br>';
}

/*
Task 20.
Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.
*/

let select20 = document.querySelector('.u20-branch');
let val20 = ' ';
let out20 = document.querySelector('.out_13_20');
let btn20 = document.querySelector('.btn20');


for(let key in asiaCountries){
    // console.log(key);
        val20 += `<option value = "${key}">${key}</option>`
    
}

select20.innerHTML = val20;

btn20.onclick = () =>{
    for(let i = 0; i < select20.length; i++){
        for(let key in asiaCountries){
            for(let cap in asiaCountries[key]){
                if(select20[i].value == key && select20[i].selected){
                    out20.innerHTML = cap + ': ' + asiaCountries[key][cap];
                }
            }
        } 
    }
}
