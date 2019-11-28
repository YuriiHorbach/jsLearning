// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch';
}

// ваше событие здесь!!!

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */


let count = 0;
function t2() {
    
    document.querySelector('.out-2').innerHTML = count++;
}

// ваше событие здесь!!!

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    document.querySelector('.out-3').innerHTML = this.innerHTML;
}

// ваше событие здесь!!!

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function show(){
    document.querySelector('.out-4').innerHTML = 'touch';
    console.log('touch');
  }
  
  function t4() {
      document.querySelector('.div-4').addEventListener('touchstart',show);
  }
  
  document.querySelector('.b-4').onclick = t4;
  

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', show);
 }
 
 // ваше событие здесь!!!
 
 document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
   document.querySelector('.out-6').innerHTML = 'touchend';
}

// ваше событие здесь!!!
document.querySelector('.div-4').addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
   document.querySelector('.div-7').style.background = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart',t7);


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
    let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
    let rand = Math.floor(Math.random() * a8.length);
    document.querySelector('.div-8').style.background = a8[rand];
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
    document.querySelector('.div-9').innerHTML = e.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
    let count = 0;
    document.querySelector('.div-10').style.width = document.querySelector('.div-10').offsetWidth + 1 + 'px';;
}

// ваше событие здесь!!!

document.querySelector('.div-10').addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */


function t11(e) {
   
    let touchX = e.changedTouches[0].radiusX;
    let touchY = e.changedTouches[0].radiusY;
      // Turn off default event handling
    // e.preventDefault();
    console.log(e);
   
    document.querySelector('.out-11').innerHTML = touchX + ' ' + touchY;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener("touchstart", t11);


// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/


let images = document.querySelectorAll('.img-12-min');
let imgMax = document.querySelector('.img-12-max');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgText = document.querySelector('.img-12-text');
let arrText = [];

const a3 ={'1.png': 'data1',
           '2.png': 'data2',
           '3.png': 'data3', 
           '4.png': 'data4',
           '5.png': 'data5',
           '6.png': 'data6'
        };
const a = [1,2,3,4,5,6];
const a1 = {
    0 : 'data1',
    1 : 'data2',
    2 : 'data3',
    3 : 'data4',
    4 : 'data5',
    5 : 'data6'
};


function changeImg(e){

    // console.log(e);
    console.log(this.src);

    imgMax.src = this.src;
    imgText.innerHTML = this.dataset.text;

    if (minImg = document.querySelector('.active-img')) {
        minImg.classList.remove('active-img');
    };
    this.classList.add('active-img');

}

for (const key in images) {
    console.log(images);
    images[key].addEventListener('touchstart',changeImg);
    next.addEventListener('touchstart',changeImg);
} 





// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }

// images.forEach(function(elem, i){
//     elem.addEventListener('touchstart', function(){
        
//         imgMax.src = 'img/' + a[i] +'.png';
//         if (minImg = document.querySelector('.active-img')) {
//             minImg.classList.remove('active-img');
//           };
//         this.classList.add('active-img');
//         // imgText.innerHTML = this.dataset.text;
//         imgText.innerHTML = a1[i];
//         arrText.push(this.dataset.text);
//         console.log(unique(arrText.sort()));



        
       



        
        
//     });

    
//     next.ontouchstart  = function(){
//         for(let key in a1){
//             key++;
//             imgMax.src = 'img/' + a[++i] +'.png';
//         }
//     } 

//     // next.addEventListener('touchstart', function(){
//     //     if(a[i] != a[a.length - 1]){
//     //         imgMax.src = 'img/' + a[++i] +'.png';
//     //     }else{
//     //         imgMax.src = 'img/' + a[a.length - 1] +'.png';
//     //     }
        
    
//     // });
    
    
//     // prev.addEventListener('touchstart', function(){
//     //     if(a[i] != a[a.length - a.length]){
//     //         imgMax.src = 'img/' + a[--i] +'.png';
//     //         imgText.innerHTML = this.dataset.text;
    
//     //     }else{
//     //          imgMax.src = 'img/' + a[a.length - 1] +'.png';
//     //     }
//     // });
    
     

      
// });



// let resetBtn = document.createElement('button');
//     resetBtn.classList.add('button-primary');
//     resetBtn.innerHTML = 'Reset';
//     document.body.append(resetBtn);      
//     resetBtn.ontouchstart = () => {
//          imgMax.src = 'img/' + a[0] +'.png';
//         if (minImg = document.querySelector('.active-img')) {
//             minImg.classList.remove('active-img');
//           };
//         images[0].classList.add('active-img');
//     }  