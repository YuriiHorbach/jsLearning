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
