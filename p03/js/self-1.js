
const product = {
    name: 'Клавиатура',
    price: 1250,

    dimensions: {
        width: 44,
        height: 3
    },

    tags: ['механическая', 'USB', 'игровая'],

    describe() {
        return `${this.name}: ${this.price} ₽`
    }
}

console.log(product.describe())

const showProduct = product.describe
console.log(showProduct()) // потеря this

const boundShowProduct = product.describe.bind(product)
console.log(boundShowProduct()) // исправление через bind
