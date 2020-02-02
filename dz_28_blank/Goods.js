class Goods{
    constructor(name, amount, image, count){
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(){
        document.querySelector('.out-4').innerHTML = `<div><img src ="img/${this.image}.png">, ${this.name}, ${this.amount}</div>`;
    }
}

