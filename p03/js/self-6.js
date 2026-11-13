function Product(name, price) {
    this.name = name

    let currentPrice = price

    Object.defineProperty(this, 'price', {
        get() {
            return currentPrice
        },
        set(value) {
            if (value < 0) {
                throw new Error('Цена не может быть отрицательной')
            }
            currentPrice = value
        }
    })

    Object.defineProperty(this, 'formattedPrice', {
        get() {
            return `${currentPrice.toLocaleString('ru-RU')} ₽`
        }
    })
}

const product = new Product('Клавиатура', 1250)

console.log(product.price)
console.log(product.formattedPrice)

product.price = 1500
console.log(product.formattedPrice)

product.price = -100