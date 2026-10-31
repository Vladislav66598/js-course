let productName = 'клавиатура'
console.log(productName)

productName = 'Мышь'
console.log(productName)

let stock;
console.log('stock =', stock);
stock = 12;
console.log('stock =', stock);


const VAT = 20;
console.log('НДС, %:', VAT)

const tags = ['usb', 'rgb'];
tags.push('wireless');
console.log(tags);

let price = 100;
let Price = 200;      // другая переменная: регистр важен
let $total = 300;     // допустимы $ и _
let _count = 4;
let totalPriceWithDiscount = 0; // camelCase
console.log(price, Price, $total, _count, totalPriceWithDiscount)



console.log('oldStyle до объявления:', oldStyle);
var oldStyle = 'var';
 
if (true) {
    var insideVar = 'видна снаружи блока';
    let insideLet = 'видна только в блоке';
}
console.log(insideVar);
console.log(typeof insideLet);
