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

btn_t11.onclick = () => {
    trimInput = inp_t11.value.trim();

    if (inp_t11.value == '') {
        out_t11.innerHTML = 'Enter data';
    }
    else {
        out_t11.innerHTML = trimInput;
    }
}

//task_13
let inp_t13 = document.querySelector('.inp_t13');
let btn_t13 = document.querySelector('.btn_t13');
let out_t13 = document.querySelector('.out_t13');

btn_t13.onclick = () => {
    let houseNum = +inp_t13.value;
    if (houseNum >= 1 && houseNum <= 5) {
        out_t13.innerHTML = 'Street 1';
    }
    else if (houseNum >= 6 && houseNum <= 11) {
        out_t13.innerHTML = 'Street 2';

    }
    else if (houseNum >= 11 && houseNum <= 20) {
        out_t13.innerHTML = 'Street 3';
    }
    else {
        out_t13.innerHTML = 'There is no such street';
    }
}

//task_14
let inp_t14 = document.querySelector('.inp_t14');
let btn_t14 = document.querySelector('.btn_t14');
let out_t14 = document.querySelector('.out_t14');

btn_t14.onclick = () => {
    let levelRentgen = +inp_t14.value;
    if (levelRentgen >= 0 && levelRentgen <= 25) {
        out_t14.innerHTML = 'не обнаруживается';
    }
    else if (levelRentgen >= 26 && levelRentgen <= 50) {
        out_t14.innerHTML = 'снижение числа лимфоцитов';

    }
    else if (levelRentgen >= 51 && levelRentgen <= 100) {
        out_t14.innerHTML = 'вялость, рвота';
    }
    else if (levelRentgen >= 101 && levelRentgen <= 150) {
        out_t14.innerHTML = 'смертность 5%';
    }
    else if (levelRentgen >= 151 && levelRentgen <= 350) {
        out_t14.innerHTML = 'смертность 50% за 30 суток';
    }
    else if (levelRentgen >= 351 && levelRentgen <= 600) {
        out_t14.innerHTML = '90% смертность за 2 недели';
    }
    else {
        out_t14.innerHTML = 'Вы уверенны?';
    }
}

//task_15
let x = 1;
let y = 0;

console.log(x && y);
console.log(x || y);

//task_16
let inp_t16 = document.querySelector('.inp_t16');
let btn_t16 = document.querySelector('.btn_t16');
let out_t16 = document.querySelector('.out_t16');

btn_t16.onclick = () => {
    let engineCapacity = +inp_t16.value;
    if (engineCapacity == 500) {
        out_t16.innerHTML = 'Your tax is 2525 tenge';
    }
    else if (engineCapacity == 1200) {
        out_t16.innerHTML = 'Your tax is 5050 tenge';
    }
    else if (engineCapacity == 1600) {
        out_t16.innerHTML = 'Your tax is 8275 tenge';
    }
    else if (engineCapacity == 1900) {
        out_t16.innerHTML = 'Your tax is 9675 tenge';
    }
    else if (engineCapacity == 2000) {
        out_t16.innerHTML = 'Your tax is 11075 tenge';
    }
    else {
        out_t16.innerHTML = 'That is Your car? Enter again';
    }
}

//task_17
let inp_t171 = document.querySelector('.inp_t171');
let inp_t172 = document.querySelector('.inp_t172');
let btn_t17 = document.querySelector('.btn_t17');
let out_t17 = document.querySelector('.out_t17');

let uah = 24.915288;
let euro = 1.0975;
let rub = 66.9072;

btn_t17.onclick = () => {

    let currensy = +inp_t171.value;

    if (inp_t172.value == 'uah') {
        out_t17.innerHTML = currensy + '$ = ' + currensy * uah + ' uah';
    }
    else if (inp_t172.value == 'euro') {
        out_t17.innerHTML = currensy + '$ = ' + currensy * euro + ' euro';
    }
    else if (inp_t172.value == 'rub') {
        out_t17.innerHTML = currensy + '$ = ' + currensy * rub + ' rub';
    }
}


//task_18
let inp_t181 = document.querySelector('.inp_t181');
let inp_t182 = document.querySelector('.inp_t182');
let btn_t18 = document.querySelector('.btn_t18');
let out_t18 = document.querySelector('.out_t18');

btn_t18.onclick = () => {

    let currensy = +inp_t181.value;

    switch (inp_t182.value) {
        case 'uah':
            out_t18.innerHTML = currensy + '$ = ' + currensy * uah + ' uah';
            break;
        case 'euro':
            out_t18.innerHTML = currensy + '$ = ' + currensy * euro + ' euro';
            break;
        case 'rub':
            out_t18.innerHTML = currensy + '$ = ' + currensy * rub + ' rub';
            break;
        default:
            out_t18.innerHTML = 'Enter correct currency';
            break;
    }
}

//task_19
let inp_t191 = document.querySelector('.inp_t191');
let inp_t192 = document.querySelector('.inp_t192');
let inp_t193 = document.querySelector('.inp_t193');
let btn_t19 = document.querySelector('.btn_t19');
let out_t19 = document.querySelector('.out_t19');

btn_t19.onclick = () => {

    let num19_1 = +inp_t191.value;
    let num19_2 = +inp_t192.value;

    if (inp_t193.value == '+') {
        out_t19.innerHTML = num19_1 + num19_2;
    }
    if (inp_t193.value == '-') {
        out_t19.innerHTML = num19_1 - num19_2;
    }
    if (inp_t193.value == '*') {
        out_t19.innerHTML = num19_1 * num19_2;
    }
    if (inp_t193.value == '/') {
        if (num19_2 == 0) {
            out_t19.innerHTML = 'Error. Division by 0';
        }
        else {
            out_t19.innerHTML = num19_1 / num19_2;
        }
    }
}

//task_20
let inp_t201 = document.querySelector('.inp_t201');
let inp_t202 = document.querySelector('.inp_t202');
let inp_t203 = document.querySelector('.inp_t203');
let btn_t20 = document.querySelector('.btn_t20');
let out_t20 = document.querySelector('.out_t20');

btn_t20.onclick = () => {

    let num20_1 = +inp_t201.value;
    let num20_2 = +inp_t202.value;

    switch (inp_t203.value) {
        case '+':
            out_t20.innerHTML = num20_1 + num20_2;
            break;
        case '-':
            out_t20.innerHTML = num20_1 - num20_2;
            break;
        case '*':
            out_t20.innerHTML = num20_1 * num20_2;
            break;
        case '/':
            if (num20_2 == 0) {
                out_t20.innerHTML = 'Error. Division by 0';
            }
            else {
                out_t20.innerHTML = num20_1 / num20_2;
            }
            break;
    }
}



