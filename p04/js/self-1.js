class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    toJSON(){
        return {
            name: this.name,
            price: this.price
        }
    }
    static fromJSON(obj) {
        return new Product(obj.name, obj.price)
    }
}

const keyboard = new Product('клавиатура', 1250)

const data = keyboard.toJSON()

const mouse = Product.fromJSON({
    name: 'мышь',
    price: 790
})
console.log(keyboard)
console.log(data)
console.log(mouse)

console.log( keyboard instanceof Product)
console.log(mouse instanceof Product)

console.log(Object.getPrototypeOf(keyboard) === Product.prototype)