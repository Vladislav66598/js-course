function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.withDiscount = function(p) {
    return this.price * (1 - p / 100)
}

function PhysicalProduct(name, price, weight) {
    Product.call(this, name, price)
    this.weight = weight
}

PhysicalProduct.prototype = Object.create(Product.prototype)
PhysicalProduct.prototype.constructor = PhysicalProduct

PhysicalProduct.prototype.shippingCost = function() {
    return this.weight * 100
}

// Создаём физический товар
const keyboard = new PhysicalProduct('Клавиатура', 1250, 2);

console.log(keyboard.name);
console.log(keyboard.withDiscount(10));
console.log(keyboard.shippingCost());