//task1
let out_t1 = document.querySelector('.out_t1');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        out_t1.innerHTML += '*';
    }
    out_t1.innerHTML += ' ';
}

//task2
let out_t2 = document.querySelector('.out_t2');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        out_t2.innerHTML += '*';
    }
    out_t2.innerHTML += '<br> ';
}

//task3
let out_t3 = document.querySelector('.out_t3');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if(k % 2 == 0){
            out_t3.innerHTML += 1;
        }
        else{
            out_t3.innerHTML += 0;
        }
        
    }
    out_t3.innerHTML += '<br> ';
}

//task4
let out_t4 = document.querySelector('.out_t4');

for (let i = 0; i < 3; i++) {
    for (let k = 1; k < 7; k++) {
        if(k % 2 == 0){
            out_t4.innerHTML += 1;
        }
        // else if(k % 3 == 0){
        //     out_t4.innerHTML += 'x';
        // }
        else{
            out_t4.innerHTML += 0;
        }
    }
    for(let j = 1; j < 7; j +=3){
        out_t4.innerHTML += 'x';
    }
    out_t4.innerHTML += '<br> ';
}
