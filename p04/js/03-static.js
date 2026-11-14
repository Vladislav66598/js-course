class Product {
    static CURRENCY = '₽'
    static #nextId = 1
 
    constructor(name, price) {
        this.id = Product.#nextId++
        this.name = name
        this.price = price
    }
    describe() {
        return `#${this.id} ${this.name}: ${this.price} ${Product.CURRENCY}`
    }
        static fromJSON(json) {
        const data = JSON.parse(json)
        return new Product(data.name, data.price)
    }
 
    toJSON() {
        return { name: this.name, price: this.price }
    }

}
 
const a = new Product('Клавиатура', 1250)   
const b = new Product('Мышь', 790)
console.log(a.describe())
console.log(b.describe())
console.log(Product.CURRENCY, a.CURRENCY)


const json = JSON.stringify(a)
console.log(json)
const restored = Product.fromJSON(json)
console.log(restored.describe(), restored instanceof Product)
console.log(typeof a.fromJSON)
