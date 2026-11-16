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
const course =  new DigitalProduct('курс', 'js', 3000)

console.log(keyboard.shippingCost())
console.log(course.shippingCost(``))

// Массив товаров разных классов
const products = [keyboard, course]

// Общая стоимость доставки
const totalShipping = products.reduce(
    (sum, product) => sum + product.shippingCost(),
    0
)

console.log('Общая стоимость доставки:', totalShipping)