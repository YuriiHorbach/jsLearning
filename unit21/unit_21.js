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
let imgText = document.querySelector('.img-12-text');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let resetBtn = document.querySelector('.reset');


function changeImg(images){
    imgMax.src = this.src;
    imgText.innerHTML = this.dataset.text;

    if (minImg = document.querySelector('.active-img')) {
        minImg.classList.remove('active-img');
    };
    this.classList.add('active-img');
}


for (var i = 0 ; i < images.length; i++) {
    images[i].addEventListener('touchstart' , changeImg);
}

// function activeChange(){
//     if (images[i] == document.querySelector('.active-img')) {
//         console.log(images[i]);
//         images[i].classList.remove('active-img');
//         images[i-1].classList.add('active-img');
//     };
// }

function next1() {
    let active = document.querySelector(".img-12-min.active-img");  //select active img
    if (active == null) { //if no active  select the 1st img
        let firstElem = document.querySelector(".img-12-min[data-num='1']").className += " active-img";
        // console.log(document.querySelector(".img-12-min[data-num='1']").src);
        imgMax.src = document.querySelector(".img-12-min[data-num='1']").src;
        imgText.innerHTML = document.querySelector(".img-12-min[data-num='1']").dataset.text;
    } else {
        active.className = "img-12-min";
        let currentId = active.getAttribute("data-num"); //data-num of selected image
        // console.log(curId);

        let next = document.querySelector(".img-12-min[data-num='" + (++currentId) + "']"); //next image. if there is no next image select the first
        console.log(next);
        console.log(next.src);
        imgMax.src = next.src;
        imgText.innerHTML = next.dataset.text;
        if (next == null){
            document.querySelector(".img-12-min[data-num='1']").className += " active-img";
        } 
        else{
            next.className += " active-img";
        } 
    }
}

function prev1() {
    let active = document.querySelector(".img-12-min.active-img");  //select active img
    if (active == null) { //if no active image select the last
        let lastElem = document.querySelector(".img-12-min[data-num='6']").className += " active-img";
        imgMax.src = document.querySelector(".img-12-min[data-num='6']").src;
        imgText.innerHTML = document.querySelector(".img-12-min[data-num='6']").dataset.text;
    } else {
        active.className = "img-12-min";
        let currentId = active.getAttribute("data-num"); //data-num of selected img
        let prev = document.querySelector(".img-12-min[data-num='" + (--currentId) + "']"); //prev image. if there is no prev image select the last
        imgMax.src = prev.src;
        imgText.innerHTML = prev.dataset.text;
        if (prev == null){
            document.querySelector(".img-12-min[data-num='5']").className += " active-img";
        } 
        else{
            prev.className += " active-img";
        } 
    }
}

function reset(){
    for(let i in images){
        images[i].classList.remove('active-img');
        let active = document.querySelector(".img-12-min.active-img");  //select active img
        let firstElem = document.querySelector(".img-12-min[data-num='1']").className += " active-img";
        // console.log(document.querySelector(".img-12-min[data-num='1']").src);
        imgMax.src = document.querySelector(".img-12-min[data-num='1']").src;
        imgText.innerHTML = document.querySelector(".img-12-min[data-num='1']").dataset.text;
    }
}


 nextBtn.addEventListener('touchstart', next1);
 prevBtn.addEventListener('touchstart', prev1);
 resetBtn.addEventListener('touchstart', reset);



