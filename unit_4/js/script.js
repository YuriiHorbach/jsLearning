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

//task_11
let inp_t111 = document.querySelector('.inp_t111');
let inp_t112 = document.querySelector('.inp_t112');
let btn_t11 = document.querySelector('.btn_t11');

btn_t11.onclick = () => {
    inp_t112.value = inp_t111.value;
}


//task_12
let inp_t12 = document.querySelector('.inp_t12');
let btn_t12 = document.querySelector('.btn_t12');
let out_t12 = document.querySelector('.out_t12');

btn_t12.onclick = () => {
    out_t12.innerHTML = inp_t12.value;
}

//task_13
let inp_t13 = document.querySelector('.inp_t13');
let btn_t13 = document.querySelector('.btn_t13');
let out_t131 = document.querySelector('.out_t131');
let out_t132 = document.querySelector('.out_t132');

btn_t13.onclick = () => {
    out_t131.innerHTML = inp_t13.value;
}

inp_t13.oninput = () => {
    out_t132.innerHTML = inp_t13.value;
}

//task_14
let txtar_t14 = document.querySelector('.txtar_t14');
let btn_t14 = document.querySelector('.btn_t14');
let out_t14 = document.querySelector('.out_t14');

btn_t14.onclick = () => {
    out_t14.innerHTML = txtar_t14.value;
}

//task_15
let txtar_t15 = document.querySelector('.txtar_t15');
let inp_t15 = document.querySelector('.inp_t15');
let btn_t15 = document.querySelector('.btn_t15');
let out_t15 = document.querySelector('.out_t15');

btn_t15.onclick = () => {
    txtar_t15.innerHTML = inp_t15.value;
}

//task_16
let sel_t16 = document.querySelector('.sel_t16');
let btn_t16 = document.querySelector('.btn_t16');
let out_t16 = document.querySelector('.out_t16');

btn_t16.onclick = () => {
    out_t16.innerHTML = sel_t16.value;
}

//task_18
let sel_t18 = document.querySelector('.sel_t18');
let out_t18 = document.querySelector('.out_t18');

sel_t18.onchange = () => {
    out_t18.innerHTML = sel_t18.value;
}

//task_19

let btn_t19 = document.querySelector('.btn_t19');
let inp_t191 = document.querySelector('#inp_t191');
let inp_t192 = document.querySelector('#inp_t192');

btn_t19.onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('form');
    console.log(inp_t191.value);
    console.log(inp_t192.value);
}

//task_20

let btn_t20 = document.querySelector('.btn_t20');

btn_t20.onclick = (event) => {
    event.preventDefault();
    let inp_t201 = document.querySelector('#inp_t201');
    let inp_t202 = document.querySelector('#inp_t202');
    let form = document.querySelector('form');
    console.log(form.elements.inp_t201.value);
    console.log(form.elements.inp_t202.value);
}







