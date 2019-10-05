/* 
Task 1.
Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
    const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9]
];  
*/

const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9]
];  

let out12_1 = document.querySelector('.out-12-1');

for(let i = 0; i < a.length; i++){
    for(let k = 0; k < a[i].length; k++){
        out12_1.innerHTML += a[i][k] + ' ';
    }
    out12_1.innerHTML += '<br>';
}

/* 
Task 2.
Выведите на страницу символ 3 из массива a.  
*/

let out12_2 = document.querySelector('.out-12-2');

out12_2.innerHTML += a[0][2];

/* 
Task 3.
Выведите на страницу символ e из массива a.  
*/

let out12_3 = document.querySelector('.out-12-3');

out12_3.innerHTML += a[3][1];

/* 
Task 4.
Выведите на страницу содержимое третьего вложенного массива в массиве a.
*/

let out12_4 = document.querySelector('.out-12-4');

out12_4.innerHTML += a[2];

/* 
Task 5.
Выведите на страницу только первые элементы вложенных массивов массива a.
*/

let out12_5 = document.querySelector('.out-12-5');


for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
    }
    out12_5.innerHTML += a[i][0] + ' ';
    out12_5.innerHTML += '<br>';
}

/* 
Task 6.
Выведите на страницу только четные вложенные массивы массива a.
*/

let out12_6 = document.querySelector('.out-12-6');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        if(i % 2 == 0){
            out12_6.innerHTML += a[i][k] + ' ';
    
        }
    }
     out12_6.innerHTML += '<br>';
}

/* 
Task 7.
Выведите на страницу только числа из массива a.
*/

let out12_7 = document.querySelector('.out-12-7');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        if(!isNaN(a[i][k])){
            out12_7.innerHTML += a[i][k] + ' ';
        }
    }
     out12_7.innerHTML += '<br>';
}
/* 
Task 8.
Выведите на страницу только числа из массива a.
*/

let out12_8 = document.querySelector('.out-12-8');

for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
       
    }
    out12_8.innerHTML += a[i].length;
    out12_8.innerHTML += '<br>';
}

/* 
Task 9.
Выведите на страницу элементы массива a в обратном порядке, т.е.
    9 8 7 f e ...
*/

let out12_9 = document.querySelector('.out-12-9');

for(let i = a.length - 1; i > 0 ; i--){
    for(let k = a[i].length - 1 ; k >= 0; k--){
        out12_9.innerHTML += a[i][k] + ' ';
    }
}

/* 
Task 10.
        Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
            3 2 1
            c b a
            6 5 4   
*/

let out12_10 = document.querySelector('.out-12-10');

for(let i = 0; i < a.length; i++){
    for(let k = a[i].length - 1 ; k >= 0; k--){
        out12_10.innerHTML += a[i][k] + ' ';
    }
    out12_10.innerHTML += '<br>';
}

/* 
Task 11.
        Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
*/

let out12_11 = document.querySelector('.out-12-11');

const b = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

for(let i = 0; i < b.length; i++){
    for(let k = 0; k < b[i].length; k++){
        out12_11.innerHTML += b[i][k] + ' ';
    }
    out12_11.innerHTML += '<br>';
}
/* 
Task 12.
Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.
*/

function chessBoard(){
    let out12_12 = document.querySelector('.out-12-12');
    for(let i = 0; i <b.length; i++){
        for(let k = 0; k < b[i].length; k++){
            
            if(b[i][k] == 1){
                let outBlack = document.createElement('div');
                outBlack.classList.add('black');
                out12_12.appendChild(outBlack);
            }
            else if(b[i][k] == 0){
                let outWhite = document.createElement('div');
                outWhite.classList.add('white');
                out12_12.appendChild(outWhite);
            }
        }
    }
}

chessBoard();


/* 
Task 13.
    Создайте массив, который подходит под следующие условия:
        b[0][1] == 4;
        b[3][2] == 5
*/

let b13 = [
    [0, 4, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 5]
]

console.log('task13');
console.log(b13[0][1]);
console.log(b13[3][2]);

/* 
Task 14.
    Создайте массив, который подходит под следующие условия:
        c[0][1] == 4;
        c[2] == 5
*/

let c14 = [
    [0, 4, 0],
    [0, 0, 0],
    5,
    [0, 0, 0]
]

console.log('task14');
console.log(c14[0][1]);
console.log(c14[2]);

/* 
Task 15.
Создайте массив, который подходит под следующие условия:
d[0][1] == 4;
d[2][3] == 5
d[6] = [4,5]
*/

let d15 = [
    [0, 4, 0],
    [0, 0, 0],
    [0, 0, 0, 5],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [4,5]
]

console.log('task15');
console.log(d15[0][1]);
console.log(d15[2][3]);
console.log(d15[6]);

/* 
Task 16.
    Создайте массив, который подходит под следующие условия:
        e[0][1] == 4;
        e[2][3] == 5
        e[6][0][1] = 6;
*/

let e16 = [
    [0, 4, 0],
    [0, 0, 0],
    [0, 0, 0, 5],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [
      [0 , 6]  
    ]
]

console.log('task16');
console.log(e16[0][1]);
console.log(e16[2][3]);
console.log(e16[6][0][1]);

/* 
Task 17.
        Создайте массив, который подходит под следующие условия:
        f[0][1][3] == 4;
        f[2][1][1] == 5
        f[6][0][1] = 6;
*/

let f17 = [
   [
       [0],
       [0,0,0,4]
   ],
   [0],
   [
       [0],
       [
           [0],
           5
       ]
   ],
   [0],
   [0],
   [0],
   [
       [
           [0],
           6
       ]
   ],

]

console.log('task17');
console.log(f17[0][1][3]);
console.log(f17[2][1][1]);
console.log(f17[6][0][1]);

/* 
Task 18.
    Создайте массив, который подходит под следующие условия:
        g[0][1][3] == 4;
        g[2][1][3] == 5
        g[6][0][1] = 6;
        g[3] == g[5];
*/

let g18 = [
        [
            [0],
            [
                0,0,0,4
            ]
        ],
        [0],
        [
            [0],
            [
                0,0,0,5
            ]
        ],
        2,
        [],
        2,
        [
            [
                0,6
            ]
        ]

    ]

console.log('task18');
console.log(g18[0][1][3]);
console.log(g18[2][1][3]);
console.log(g18[6][0][1]);
console.log(g18[3] == g18[5]);

/*
    Task 19.
    Выведите на страницу сумму элементов массива a (только чисел).
*/

let out_12_19 = document.querySelector('.out-12-19');

let sum = 0;
for(let i = 0; i < a.length; i++){
    for(let k = 0 ; k < a[i].length; k++){
        if(!isNaN(a[i][k])){
            sum += a[i][k];
        }
    }
    out_12_19.innerHTML = sum;
}

/*
    Task 20.
    Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.
*/


let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let comb1 = [
    board[0,0],
    board[0,1],
    board[0,2]
];
let comb2 = [
    board[1,0],
    board[1,1],
    board[1,2]
];
let comb3 = [
    board[2,0],
    board[2,1],
    board[2,2]
];

let comb4 = [
    board[3,0],
    board[3,1],
    board[3,2]
];

let comb5 = [
    board[0,0],
    board[1,0],
    board[2,0]
];

let comb6 = [
    board[0,1],
    board[1,1],
    board[2,1]
];

let comb7 = [
    board[0,2],
    board[1,2],
    board[2,2]
];

let comb8 = [
    board[0,0],
    board[1,1],
    board[2,2]
];

let comb9 = [
    board[0,2],
    board[1,1],
    board[2,0]
];