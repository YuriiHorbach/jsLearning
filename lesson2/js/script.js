let a = 6;
let b = 'string';

console.log(a);

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
    console.log('work');
    // console.log(inputIn.value);
    let b = +inputIn.value;
    console.log(b + 10);
    div.innerHTML = b;
    inputIn.value = '';
}

