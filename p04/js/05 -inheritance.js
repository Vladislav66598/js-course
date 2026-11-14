class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    shippingCost() {
        return 0
    }
    describe() {
        return `${this.name}: ${this.price} ₽, доставка ${this.shippingCost()} ₽`
    }
}   

class PhysicalProduct extends Product {
    constructor(name, price, weightKg) {
        super(name, price)
        this.weightKg = weightKg
    }
    shippingCost() {
        return 300 + Math.ceil(this.weightKg) * 50
    }
}

class DigitalProduct extends Product{
    describe(){
        return super.describe() + '(ключ прийдет на почту)'
    }
}

const monitor = new PhysicalProduct('монитор', 15990, 4.2)
const game = new DigitalProduct('игра', 2499)
console.log(monitor.describe())
console.log(game.describe())

const order = [monitor, game, new PhysicalProduct('мышь', 790, 0.2)]
let shipping = 0
for(const item of order) {
    shipping += item.shippingCost()
}
console.log('доставка заказа:', shipping)

console.log( monitor instanceof PhysicalProduct, monitor instanceof Product, monitor instanceof DigitalProduct)
console.log(Object.getPrototypeOf(PhysicalProduct.prototype) ===Product.prototype)
let proto = Object.getPrototypeOf(monitor)
const chain = []
while (proto) {
    chain.push(proto.constructor.name)
    proto = Object.getPrototypeOf(proto)
}
console.log(chain.join(' -> '))

