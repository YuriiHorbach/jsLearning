//task_1
let a = 4;

if (a == 4) {
    console.log(a);
}

//task_2
let b = 8;
let c = 10;

if (b < c) {
    console.log('c is greater');
}
else {
    console.log('b is greater');
}

//task_3
if (b < c) {
    console.log('c is greater');
}
else if (b > c) {
    console.log('b is greater');
}
else {
    console.log('b == c');
}

//task_4
let inp_t41 = document.querySelector('.t41');
let inp_t42 = document.querySelector('.t42');
let btn_t4 = document.querySelector('.btn_t4');
let out_t4 = document.querySelector('.out_t4');

btn_t4.onclick = function () {
    if (parseInt(inp_t41.value) > parseInt(inp_t42.value)) {
        out_t4.innerHTML = inp_t41.value + ' is greater';
    }
    else if (parseInt(inp_t41.value) < parseInt(inp_t42.value)) {
        out_t4.innerHTML = inp_t42.value + ' is greater';
    }
    else {
        out_t4.innerHTML = 'equal';
    }
}

//task_5
let inp_t5 = document.querySelector('.inp_t5');
let btn_t5 = document.querySelector('.btn_t5');
let out_t5 = document.querySelector('.out_t5');

btn_t5.onclick = () => {
    if (parseInt(inp_t5.value) < 2000) {
        out_t5.innerHTML = 'Your age is ' + (2019 - parseInt(inp_t5.value));
    }
    else if (parseInt(inp_t5.value) >= 2000) {
        console.log('Your age is ' + (2019 - parseInt(inp_t5.value)));
    }
}

//task_6
let inp_t6 = document.querySelector('.inp_t6');
let btn_t6 = document.querySelector('.btn_t6');
let out_t6 = document.querySelector('.out_t6');

btn_t6.onclick = () => {

    if (parseInt(inp_t6.value) >= 1 && parseInt(inp_t6.value) <= 32) {
        out_t6.innerHTML = 'Apartment exists';
    }
    else {
        out_t6.innerHTML = 'There is no apartment with such number';
    }
}

//task_7
let inp_t7 = document.querySelector('.inp_t7');
let btn_t7 = document.querySelector('.btn_t7');
let out_t7 = document.querySelector('.out_t7');

btn_t7.onclick = () => {

    if (parseInt(inp_t7.value) > 0) {
        out_t7.innerHTML = 'Greater than 0';
    }
    else if (parseInt(inp_t7.value) == 0) {
        out_t7.innerHTML = 'Equal to 0';
    }
    else {
        out_t7.innerHTML = 'Less then 0';
    }
}

//task_8
let inp_t8 = document.querySelector('.inp_t8');
let btn_t8 = document.querySelector('.btn_t8');
let out_t8 = document.querySelector('.out_t8');

btn_t8.onclick = () => {

    if (parseInt(inp_t8.value) % 2 == 0) {
        out_t8.innerHTML = 'Even number';
    }
    else {
        out_t8.innerHTML = 'Odd number';
    }
}


//task_9
let inp_t91 = document.querySelector('.inp_t91');
let inp_t92 = document.querySelector('.inp_t92');
let btn_t9 = document.querySelector('.btn_t9');
let out_t9 = document.querySelector('.out_t9');

btn_t9.onclick = () => {

    if (inp_t91.value != 0 && inp_t92.value != 0) {
        out_t9.innerHTML = parseInt(inp_t91.value) ** parseInt(inp_t92.value);
    }
    else {
        out_t9.innerHTML = 'Enter numbers';
    }
}

//task_10
let inp_t10 = document.querySelector('.inp_t10');
let btn_t10 = document.querySelector('.btn_t10');
let out_t10 = document.querySelector('.out_t10');

btn_t10.onclick = () => {
    if (!inp_t10.value) {
        alert('Enter your name');
    }
    else if (inp_t10.value.indexOf(' ') !== -1) {
        alert('You enter empty symbol. Try again');
    }
    else {
        alert('Hello ' + inp_t10.value);
    }
}

//task_11
let inp_t11 = document.querySelector('.inp_t11');
let btn_t11 = document.querySelector('.btn_t11');
let out_t11 = document.querySelector('.out_t11');

inp_t11 = inp_t11.value.trim();

btn_t11.onclick = () => {
    if (inp_t11.value == '') {
        out_t11.innerHTML = 'Enter data';
    }
    else {
        out_t11.innerHTML = inp_t11.value;
    }
}





