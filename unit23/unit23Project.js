// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {
    
    localStorage.setItem('card', JSON.stringify(card));
    t11();
    t12();
    
   
}
document.querySelector('.b-10').onclick = t10;
// t10();
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    let card = localStorage.getItem('card');

    val = JSON.parse(card);

    let table = document.createElement('table');
    table.className = "prodTable";

    
    if(val){
       
        table.innerHTML += `
            <thead>
                <tr>
                    <th colspan = "3">Name</th>
                    <th colspan = "3">Quantity</th>
                </tr>
                </thead>
             `;

             for(let i in val){
                table.innerHTML += `
                    <tr>
                        <td >
                            <button class="button-primary btnPlus" id = "${i}">+</button>
                        </td>
                        <td class="prod">
                            ${i}
                        </td>
                        <td>
                        <button class="button-primary btnMinus" id = "${i}">-</button>
                        </td>
                        <td>
                            <div class="quant" id = "${i}">
                                ${val[i]}
                            </div>
                        </td>`;
                
            }
        
    }else {
        table.innerHTML = '<p >Cart is empty</p>'
    }
    
    document.querySelector('.out-10').append(table);

    // let totalQuantity = document.querySelectorAll('.quant');
    // console.log(totalQuantity);
    // let sumTotal = 0;

    // for(let j = 0; j < totalQuantity.length; j++){
    //     sumTotal += parseInt(totalQuantity[j].innerText);
    // }
    table.innerHTML += `
            `;
   
}


// ваше событие здесь!!!


// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
    
    let btnsPlus = document.querySelectorAll('.btnPlus');
    let btnsMinus = document.querySelectorAll('.btnMinus');
    const cartLS = JSON.parse(localStorage.getItem('card'));


    elemButtonPlus(btnsPlus);

    function elemButtonPlus(button){
        for(let k = 0; k < button.length; k++){
            console.log(button[k]);
            button[k].onclick = function(){
                   let currentButton = this.id;
                   let quantBlock = document.querySelectorAll('.quant');
                   for(let j = 0; j < quantBlock.length; j++){
                      if(currentButton == quantBlock[j].id){
                       quantBlock[j].innerHTML++;
                        localStorage.setItem('cart', JSON.stringify(cartLS));
                      }
                   }
                   t13();
               }
       } 
    }
//adfasdf
    elemButtonMinus(btnsMinus);

    function elemButtonMinus(button){
        for(let p = 0; p < button.length; p++){
            // console.log(btnsPlus[k]);
            button[p].onclick = function(){
                    let currentButton = this.id;
                    let quantBlock = document.querySelectorAll('.quant');
                    for(let l = 0; l < quantBlock.length; l++){
                       if(currentButton == quantBlock[l].id){
                        quantBlock[l].innerHTML--;
                        if(quantBlock[l].innerHTML < 1){
                            quantBlock[l].innerHTML = 1;
                        }
                       }
                    }
                    t13();
            }
        }
    }



    
}

// ваше событие здесь!!!



// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

    let totalCells = document.querySelectorAll('.quant');
    let sum = 0;
    for(let key of totalCells){
       sum += parseInt(key.innerHTML);
    }

    // let cartSum = document.querySelector('.cartSum').innerHTML;
    // cartSum = sum;

    let tfoot = document.createElement('tfoot');
    tfoot.className = 'tfoot';
    tfoot.innerHTML = `
        <tr>
            <td colspan = "3">Total</td>
            <td class = "cartSum">${sum}</td>
        </tr>`;
    
    
   
    let prodTable = document.querySelector('.prodTable');
    if(document.querySelector('tfoor'))
    {
        prodTable.remove(tfoot);
    } else{
        prodTable.append(tfoot);
    }
    
    

    // 
    // localStorage.setItem('cartSum', JSON.stringify(cartSum));

}
// ваше событие здесь!!!
// t13();
// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t14() {

}

// ваше событие здесь!!!