// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {
    let btn = document.querySelector('.b-10');
    localStorage.setItem('card', JSON.stringify(card));
}

t10();
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    let card = localStorage.getItem('card');

    val = JSON.parse(card);

    let table = document.createElement('table');
    table.className = "prodTable";
    // let thead = document.createElement('thead');
    // let prodTitle = 'Product';
    // let quantTitle = 'Quantity';
    // thead.innerHTML += `
    //     <tr>
    //         <th>
    //             ${prodTitle}
    //         </th>
    //         <th>
    //             ${quantTitle}
    //         </th>
    //     </tr> 
    //     `
    
    for(let i in val){
        table.innerHTML += `<table>
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
                </td>

            </tr>
        </table>`
    }
    // table.append(thead);

    document.querySelector('.out-10').append(table);
    let getEmptyTableTr = document.querySelector('table tr');
}

// ваше событие здесь!!!
t11();

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
    
    let btnsPlus = document.querySelectorAll('.btnPlus');
    let btnsMinus = document.querySelectorAll('.btnMinus');
    
    for(let k = 0; k < btnsPlus.length; k++){
        // console.log(btnsPlus[k]);
            btnsPlus[k].onclick = function(){
                let currentButton = this.id;
                let quantBlock = document.querySelectorAll('.quant');
                for(let j = 0; j < quantBlock.length; j++){
                   if(currentButton == quantBlock[j].id){
                    quantBlock[j].innerHTML++;
                   }
                }
            }
    } 

    for(let p = 0; p < btnsMinus.length; p++){
        // console.log(btnsPlus[k]);
        btnsMinus[p].onclick = function(){
                let currentButton = this.id;
                let quantBlock = document.querySelectorAll('.quant');
                for(let l = 0; l < quantBlock.length; l++){
                   if(currentButton == quantBlock[l].id){
                    quantBlock[l].innerHTML--;
                    if(quantBlock[l].innerHTML < 0){
                        quantBlock[l].innerHTML = 0;
                    }
                   }
                }
            }
    }
    
}

// ваше событие здесь!!!
t12();