class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    describe(){
        return `${this.name}: ${this.price} ₽`
    }
}

const keyboard = new Product('клавиатура', 1250)
const mouse = new Product('мышь', 790)
console.log(keyboard)
console.log(mouse.describe())

console.log(typeof Product)
console.log(Object.getOwnPropertyNames(Product.prototype))
console.log(Object.getPrototypeOf(keyboard) === Product.prototype)
console.log(keyboard.describe === mouse.describe)
console.log(Object.keys(keyboard))

const boundDescribe = keyboard.describe.bind(keyboard)
console.log(boundDescribe())

function OldProduct(name, price){
    this.name = name
    this.price = price
}
OldProduct.prototype.describe = function () {
    return `${this.name}: ${this.price} ₽`
}

const OldKeyboard = new OldProduct('клавиатура', 1250)
console.log(OldKeyboard.describe(), '|', keyboard.describe())


