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

let count3 = 3;
for (let i = 0; i < 3; i++) {
   for(let j = count3 ; j > 0; j--){
        out_t7.innerHTML+='&nbsp';
    }
    for(let k = 0; k < 6; k++){
      out_t7.innerHTML +='*'; 
    }
    
    out_t7.innerHTML +='<br>';
   
    count3--;
}

//task8
let out_t8 = document.querySelector('.out_t8');

let count81 = 1;
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < i; k++) {
        out_t8.innerHTML += '*';
    }
    out_t8.innerHTML += '<br> ';
count81++;

}
let count82 = 3;
for (let i = 0; i < 3; i++) {
    for (let k = count82; k > 0; k--) {
        out_t8.innerHTML += '*';
    }
    out_t8.innerHTML += '<br> ';
    count82--;
}

//task9
let out_t9 = document.querySelector('.out_t9');
let horizontalCount = 6;  
let verticalCount = 5;    
let star = '*';       
let whitespace = '&nbsp '; 

for (let i = 0; i < verticalCount; ++i) {
    let str = '';
    if (i == 0 || i == verticalCount - 1) {    
      for (let j = 0; j < horizontalCount; ++j) {
        str += star;
      }    
    } else {
      str = star;
      for (let j = 0; j < horizontalCount -2 ; ++j) {
        str += whitespace;
      }    
      str += star;
    }
    out_t9.innerHTML += '<br> ';;
    out_t9.innerHTML += str;
    
}

//task10
let out_t10 = document.querySelector('.out_t10');
let horizontalCount2 = 6;  
let verticalCount2 = 5;    
let symbol = document.querySelector('.inp_t10');       
let whitespace2 = '&nbsp '; 
let btn_t10 = document.querySelector('.btn_t10'); 

btn_t10.onclick = () => {
    for (let i = 0; i < verticalCount2; ++i) {
        let str2 = '';
        if (i == 0 || i == verticalCount2 - 1) {    
        for (let j = 0; j < horizontalCount2; ++j) {
            str2 += symbol.value;
        }    
        } else {
        str2 = symbol.value;
        for (let j = 0; j < horizontalCount2 -2 ; ++j) {
            str2 += whitespace2;
        }    
        str2 += symbol.value;
        }
        out_t10.innerHTML += '<br> ';;
        out_t10.innerHTML += str2;
        console.log(str2);   
    }
}

//task11
let out_t11 = document.querySelector('.out_t11');

for (let i = 6; i < 8; i++) {
    for(let k = 1; k < 10; k++){
        out_t11.innerHTML += `${i} * ${k} = ${k * i}<br>`;
    }
    out_t11.innerHTML += `<br>`;
}

//task12
let out_t12 = document.querySelector('.out_t12');

for (let i = 1; i < 7; i++) {
    for(k = 1; k < i ; k++){
        out_t12.innerHTML += k + " ";
    }
    out_t12.innerHTML += `<br>`;
}

//task13
let out_t13 = document.querySelector('.out_t13');
let space = '&nbsp';
let someVal = '0';
for (let i = 0; i <= 4 ; i++) {
    out_t13.innerHTML += space;
       for(let k = 0; k <=10; k++){
        // if(k >= 9 ){
           
        //     i+=10;
        //     console.log(i);
        //     console.log(k);
        // //    for(let j = 1; j <=10; j++){
        // //     console.log(i);
        // //     out_t13.innerHTML += ' ';
        // //    }
           
         out_t13.innerHTML += k + ' '+ i;
       
        }
        out_t13.innerHTML += k + ' '+ i;
        
        
         
    out_t13.innerHTML += `<br>`;
}



