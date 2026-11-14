class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
class DigitalProduct extends Product {
    shippingCost() {
        return 0
    }
}
class PhysicalProduct extends Product {
    constructor(name, price, weight){
        super(name, price)
        this.weight = weight
    }
    shippingCost() {
        return this.weight * 100
    }
}
const keyboard = new PhysicalProduct('клавиатура', 1250, 2)