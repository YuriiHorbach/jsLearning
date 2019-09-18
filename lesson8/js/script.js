for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
}
// 0 +... + 10 // 1+2+3

let sum = 0;
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++;
}
console.log('sum = ' + sum);
// ****
// ****
// ****
let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 4;

while (p < 5) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr;

let out2 = document.querySelector('.out2');
p2 = 0;
let outStr2 = '';
let flag2 = 4;

while(p2 < 7){
    let p3 = 0;
    
    while(p3 < 2){
        while(){
            if(p3 < flag2){
                outStr2 += '0';
            }
            else{
                outStr2 += "*";
            }
            p3++;
        }
        flag2--;
    }
    
    outStr2 += "<br>";
    p2++;
}

out2.innerHTML = outStr2;