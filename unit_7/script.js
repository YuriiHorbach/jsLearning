// task 1 

let btn_t1 = document.querySelector('.btn_t1');

function name(){
  return console.log('Yurii');
}

btn_t1.onclick = name;

// task 2 
function name(name){
  return name;
}

console.log(name('Sergey'));

// task 3 
let btn_t3 = document.querySelector('.btn_t3');
let out_t3 = document.querySelector('.out_t3');

function number(num){
  return num * 10;
}

console.log(number(2));

btn_t3.onclick = function(){out_t3.innerHTML = number(3);}

// task 4 
let btn_t4 = document.querySelector('.btn_t4');

function myColor(){
  btn_t4.style.background = 'red';
}

btn_t4.onclick = function(){myColor();}

// task 5
let btn_t5 = document.querySelector('.btn_t5');
let inp_t5 = document.querySelector('.inp_t5');
let out_t5 = document.querySelector('.out_t5');


function myNameFromInput(name){
  return out_t5.innerHTML = name;
}

btn_t5.onclick = function(){myNameFromInput(inp_t5.value);}

// task 6
function lagestNum(num1, num2){
  let result;
  if(num1 > num2){
    result = num1;
  }
  else if(num1 < num2){
    result = num2
  }
  else if(num1 == num2){
    result = num1;
  }
  return result;
}

console.log(lagestNum(1,1));

// task 7
function yourAge(yearOfbirth){
  let currentYear = 2019;
  return currentYear - yearOfbirth;
}

console.log(yourAge(1984));

// task 8
function randNum(min = 1, max = 10){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randNum());

// task 9
function randNum2(min, max){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randNum2(25,35));

// task 10
let btn_t10 = document.querySelector('.btn_t10');
let out_t10 = document.querySelector('.out_t10');

function randNum3(min = 0, max = 255){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

btn_t10.onclick = () =>{
  out_t10.style.backgroundColor = 'rgb(' + randNum3() + ',' + randNum3() + ',' + randNum3() + ')';
}

// task 11

function f11(){
  return 5;
}

function mult(a, b=f11()){
  return a * b;
}

console.log(mult(2));

// task 12
let inp_t12 = document.querySelector('.inp_t12');
let btn_t12 = document.querySelector('.btn_t12');
let out_t12 = document.querySelector('.out_t12');


function toNum(paramInp){
   return +paramInp;
}
console.log(toNum(inp_t12.value));

btn_t12.onclick = () => {
  out_t12.innerHTML = toNum(inp_t12.value);
}

// task 13
let inp_t13 = document.querySelector('.inp_t13');
let btn_t13 = document.querySelector('.btn_t13');
let out_t13 = document.querySelector('.out_t13');


function emptyInput(inp){
  let res13 = ' ';
  let str = inp.trim();
  if(str == " "){
    res13 = false;
  }
  else{
    res13 = str;
  }
  return res13;
}

btn_t13.onclick = () => {
  //out_t13.innerHTML = inp_t13.value;
  out_t13.innerHTML = emptyInput(inp_t13.value);
}

