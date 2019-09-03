//task_1
let a = 7;
let b = 9;

console.log(a * b);

//task_2
let c = 7;
let d = 9;

console.log(c / d);

//task_3
let e = 3;
let f = 5;

console.log(e + f);

//task_4
let e1 = '3';
let f1 = 5;

console.log(e1 + f1);

//task_5
let e2 = 3;
let f2 = 0;

console.log(e2 / f2);

//task_6
let e3 = 3;
let f3 = 'Hello';

console.log(e3 + f3);

//task_7
let e4 = 3;
let f4 = 'Hello';

console.log(e4 * f4);

//task_8
let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');

btn.onclick = function () {
    console.log(inp.value);
}

//task_9
let inp2 = document.querySelector('.inp2');
let btn2 = document.querySelector('.btn2');

btn2.onclick = function () {
    console.log(inp2.value);
    inp2.value = '';
}

//task_10
let inp3 = document.querySelector('.inp3');
let btn3 = document.querySelector('.btn3');
let out3 = document.querySelector('.out3');

btn3.onclick = function () {
    out3.innerHTML = inp3.value * 10;
}

//task_11
let inp4 = document.querySelector('.inp4');
let btn4 = document.querySelector('.btn4');
let out4 = document.querySelector('.out4');

btn4.onclick = function () {
    out4.innerHTML = inp4.value + 10;
}

//task_12
let inpName = document.querySelector('.inpName');
let inpSecondName = document.querySelector('.inpSecondName');
let btn5 = document.querySelector('.btn5');

btn5.onclick = function () {
    console.log('Hello ' + inpName.value + ' ' + inpSecondName.value);
}

//task_13
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let btn6 = document.querySelector('.btn6');
let out6 = document.querySelector('.out6');

btn6.onclick = function () {
    out6.innerHTML = +num1.value + +num2.value;
}

//task_14
let val = document.querySelector('.val');

val.value = 'Hello';

//task_15
let y = document.querySelector('.val15');

y.style.border = '2px solid red';

//task_16
let number1 = document.querySelector('.val16-1');
let number2 = document.querySelector('.val16-2');
let output = document.querySelector('.out16');
let calc = document.querySelector('.calc');

calc.onclick = function () {
    output.innerHTML = +number1.value + +number2.value;
}

//task_17
let val17 = document.querySelector('.val17');
let btn17 = document.querySelector('.btn17');

btn17.onclick = function () {
    let t = val17.value;
    t = parseInt(t);
    console.log(t);
}

//task_18
let val18 = document.querySelector('.val18');
let btn18 = document.querySelector('.btn18');

btn18.onclick = function () {
    let t = val18.value;
    t = parseFloat(t);
    console.log(t);
}


//task_19
let val19_1 = document.querySelector('.val19-1');
let val19_2 = document.querySelector('.val19-2');
let btn19 = document.querySelector('.btn19');
let out19 = document.querySelector('.out19');


btn19.onclick = function () {
    out19.innerHTML = +val19_1.value + +val19_2.value;
}

//task_20
let userName = document.querySelector('.userName');
let userSecondName = document.querySelector('.userSecondName');
let age = document.querySelector('.age');
let work = document.querySelector('.work');
let btn20 = document.querySelector('.btn20');
let out20 = document.querySelector('.out20');


btn20.onclick = function () {
    out20.innerHTML = 'Уважаемый ' + userName.value + ' ' + userSecondName.value + ', ваш возраст ' + age.value + ' года, по професси вы ' + work.value;
}





