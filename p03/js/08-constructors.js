'use strict';
 
function Product(name, price) {
    this.name = name;
    this.price = price;
}
 
const keyboard = new Product('клавиатура', 1250);
const mouse = new Product('мышь', 790);
console.log(keyboard);
console.log(mouse instanceof Product);
