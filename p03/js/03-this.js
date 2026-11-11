'use strict'

const keyboard = {
    name: 'клавиатура',
    price: 1250,
    describe(){
        return `${this.name} стоит ${this.price} ₽`
    },
}

const mouse = {name: 'мышь', price: 790, describe: keyboard.describe}

console.log(keyboard.describe())
console.log(mouse.describe())

const boundDescribe = keyboard.describe.bind(keyboard)
console.log(boundDescribe())
setTimeout(() => console.log('из стрелочной:', keyboard.describe()), 0)

const shop = {
    title: 'мини-магазин',
    products: ['клавиатура', 'мышь'],
    printAll() {
        this.products.forEach((p) => {
            console.log(this.title + ': ' + p)
        })
    },
}
shop.printAll()

