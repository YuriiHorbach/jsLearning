// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */


// ваше событие здесь!!!
document.querySelector('.div-13').onmousedown =() => {
   document.querySelector('.div-13').classList.add('active');
}
document.querySelector('.div-13').onmouseup = () =>{
  document.querySelector('.div-13').classList.remove('active');
};