
/*
Task 1. Выведите в консоль с помощью цикла числа от 1 до 10.
*/
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//task_2

let out_t2 = document.querySelector('.out_t2');

for (let i = 1; i < 11; i++) {
    out_t2.innerHTML += i + ' ';
}

//task_3

let out_t3 = document.querySelector('.out_t3');

for (let i = 10; i >= 0; i--) {
    out_t3.innerHTML += i + ' ';
}

//task_4

let out_t4 = document.querySelector('.out_t4');

for (let i = 0; i <= 10; i += 2) {
    out_t4.innerHTML += i + ' ';
}

//task_5

let out_t5 = document.querySelector('.out_t5');

for (let i = 21; i >= 0; i -= 3) {
    out_t5.innerHTML += i + ' ';
}

//task_6

let out_t6 = document.querySelector('.out_t6');

for (let i = 0; i <= 5; i++) {
    out_t6.innerHTML += '****** <br>';
}

//task_7
let inp_t7 = document.querySelector('.inp_t7');
let out_t7 = document.querySelector('.out_t7');
let btn_t7 = document.querySelector('.btn_t7');

btn_t7.onclick = () => {
    for (let i = inp_t7.value; i >= 0; i--) {
        out_t7.innerHTML += i + ' ';
    }
}

//task_8
let inp_t81 = document.querySelector('.inp_t81');
let inp_t82 = document.querySelector('.inp_t82');
let out_t8 = document.querySelector('.out_t8');
let btn_t8 = document.querySelector('.btn_t8');

btn_t8.onclick = () => {
    for (let i = inp_t81.value; i <= inp_t82.value; i++) {
        out_t8.innerHTML += i + ' ';
    }
}

//task_9
let inp_t91 = document.querySelector('.inp_t91');
let inp_t92 = document.querySelector('.inp_t92');
let out_t9 = document.querySelector('.out_t9');
let btn_t9 = document.querySelector('.btn_t9');

btn_t9.onclick = () => {

    if (inp_t92.value > inp_t91.value) {
        for (let i = inp_t91.value; i <= inp_t92.value; i++) {
            out_t9.innerHTML += i + ' ';
        }
    }
    else {
        alert('Error');
    }
}

//task_10
let out_t10 = document.querySelector('.out_t10');
for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0) {
        out_t10.innerHTML += i + " ";
    }
}

//task_11
let out_t11 = document.querySelector('.out_t11');
let one_t11 = document.querySelectorAll('.one');
out_t11.innerHTML = 'Quantity of div.one: ' + one_t11.length;

//task_12
let btn_t12 = document.querySelector('.btn_t12');

function backColor() {
    for (let i = 0; i < one_t11.length; i++) {
        one_t11[i].style.background = 'yellow';
    }
}

btn_t12.onclick = backColor;

//task_13
let btn_t13 = document.querySelector('.btn_t13');

function getAllInfo() {
    for (let i = 0; i < one_t11.length; i++) {
        console.log(one_t11[i].innerHTML);
    }
}

btn_t13.onclick = getAllInfo;

//task_14
let btn_t14 = document.querySelector('.btn_t14');
let inputs = document.querySelectorAll('input[type="text"]');

function setPlaceHolder() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].placeholder = 'Введите данные';
    }
}

btn_t14.onclick = setPlaceHolder;

//task_15
let btn_t15 = document.querySelector('.btn_t15');
let inputsAll = document.querySelectorAll('input[type="text"]');

function getQuantity() {
    console.log('Quantity of inputs ' + inputsAll.length);
}

btn_t15.onclick = getQuantity;

//task_16
let radioInp = document.querySelectorAll('input[type="radio"]');
let out_t16 = document.querySelector('.out_t16');
let btn_16 = document.querySelector('.btn_16');

btn_16.onclick = () => {
    for (let i = 0; i < radioInp.length; i++) {
        if (radioInp[i].checked) {
            console.log(radioInp[i].value);
            out_t16.innerHTML = radioInp[i].value;
        }
    }
}

//task_17
let btn_17 = document.querySelector('.btn_17');

btn_17.onclick = () => {
    radioInp[0].checked;
    console.log(radioInp[0].checked);

}
//task_18
let radioButtons = document.querySelectorAll('input[name="p1"]');
console.log(radioButtons);

for(let i = 0; i < radioButtons.length; i++){
    radioButtons[i].value = i++;
}

//task_19
let btn_19t = document.querySelector('.btn_19t');
let radio19 = document.querySelectorAll('input[name="p2"]');
let out_t19 = document.querySelector('.out_t19');

btn_19t.onclick = () => {
    for(let i = 0; i < radio19.length; i++){
        if(radio19[i].checked && +radio19[i].value == 6 ){
            out_t19.innerHTML = true;
        }
        else{
            out_t19.innerHTML = false;
        }
    }
}

//task_20
let radio20 = document.querySelectorAll('input[name="p2"]');
console.log(+radio19[2].value);

radio20.oninput= () => {
    for(let i = 0; i < radio20.length; i++){
        if(radio19[i].checked && +radio19[i].value == 6 ){
            out_t19.innerHTML = true;
        }
        else{
            out_t19.innerHTML = false;
        }
    }
}





