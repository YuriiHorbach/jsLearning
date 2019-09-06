// document.querySelector('button').onclick = function () {
//     console.log(document.querySelector('#one').value);
// }

// document.querySelector('#one').oninput = function () {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('.sp').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn1').onclick = function () {
    console.log(document.querySelector('#i2').value);
    let myCheck = document.querySelector('#i2');
    console.log(myCheck.checked);
    if (myCheck.checked) {
        console.log('Pushed');
    }
    else {
        console.log('Not pushed');

    }
}

document.querySelector('#btn-2').onclick = function (event) {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 1;
    let form = document.querySelector('form');
    console.log(form);
}