//task_1
let btn_t1 = document.querySelector('.btn_t1');

btn_t1.onclick = () => {
    alert('task_1');
}

//task_2
let inp_t2 = document.querySelector('.inp-t2');

inp_t2.onclick = () => {
    alert('task_2');
}

//task_3
let p_t3 = document.querySelector('.p_t3');

p_t3.onclick = () => {
    alert('task_3');
}
//task_4
let inp_t4 = document.querySelector('.inp_t4');
let btn_t4 = document.querySelector('.btn_t4');

btn_t4.onclick = () => {
    console.log(inp_t4.checked);

}

//task_5
let inp_t5 = document.querySelector('.inp_t5');
let btn_t5 = document.querySelector('.btn_t5');

btn_t5.onclick = () => {
    if (inp_t5.checked) {
        console.log(inp_t5.value);
    }
    else {
        console.log(false);
    }
}

//task_6
let inp_t6 = document.querySelector('.inp_t6');
let btn_t6 = document.querySelector('.btn_t6');

btn_t6.onclick = () => {
    alert(inp_t6.value);
}

//task_7
let inp_t7 = document.querySelector('.inp_t7');
let btn_t7 = document.querySelector('.btn_t7');

btn_t7.onclick = () => {
    if (inp_t7.value.length < 6) {
        console.log('Password less than 6 symbols');
    }
    else {
        alert(inp_t7.value);
    }
}

//task_8
let div_t8 = document.querySelector('.div_t8');
let btn_t81 = document.querySelector('.btn_t81');

btn_t81.onclick = () => {
    let newInput = div_t8.innerHTML = '<input type="text" class = "innerInput">';
    div_t8.innerHTML += '<button class="btn_t82">Push2</button> <br><br>';
    let btn_t82 = document.querySelector('.btn_t82');
    let innerInput = document.querySelector('.innerInput');
    btn_t82.onclick = () => {
        alert(innerInput.value);
    }
}

//task_9
let inp_t9 = document.querySelector('.inp_t9');
let btn_t9 = document.querySelector('.btn_t9');

btn_t9.onclick = () => {
    if (inp_t9.checked) {
        alert(inp_t9.value);
    }
    else {
        alert(false);
    }
}

//task_10
let inp_t10 = document.querySelector('.inp_t10');
let btn_t10 = document.querySelector('.btn_t10');
let out_t10 = document.querySelector('.out_t10');

btn_t10.onclick = () => {
    out_t10.style.backgroundColor = inp_t10.value;
}