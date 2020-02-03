 class Goods2 extends Goods{
    constructor(name, amount, image, count, sale){
        super(name, amount, image, count);
        this.sale = sale;
    }
    drawSale(){
        document.querySelector('.out-6').innerHTML = `<div>${this.sale}</div>`;
    }
 }