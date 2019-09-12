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
    for (let k = -2; k < 4; k++) {
        if(k % 3 == 0){
            out_t4.innerHTML += 'x';
        } else if(k % 2 == 0){
            out_t4.innerHTML += 1;
        }
        else{
            out_t4.innerHTML += 0;
        }
    }
    out_t4.innerHTML += '<br> ';
}

//task5
let out_t5 = document.querySelector('.out_t5');

let count = 1;
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < count; k++) {
        out_t5.innerHTML += '*';
    }
    out_t5.innerHTML += '<br> ';
    count++;
}

//task6
let out_t6 = document.querySelector('.out_t6');

let count2 = 5;
for (let i = 0; i < 5; i++) {
    for (let k = count2; k > 0; k--) {
        out_t6.innerHTML += '*';
    }
    out_t6.innerHTML += '<br> ';
    count2--;
}

//task7
let out_t7 = document.querySelector('.out_t7');
let sp = '&nbsp';

for (let i = 0; i < 3; i++) {
    console.log(sp);
    for(let k = 0; k < 6; k++){
      out_t7.innerHTML += '*'; 
      console.log('*');
    }
    sp+=sp;
    console.log(out_t7);
    out_t7.innerHTML +='<br>';
    out_t7.innerHTML +=sp;
}


