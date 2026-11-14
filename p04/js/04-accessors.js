class CartLine {
    #qty = 1;

    constructor(name, price, qty) {
        this.name = name
        this.price = price
        this.qty = qty   // вызов сеттера
    }

    get qty() {
        return this.#qty
    }

    set qty (value) {
        if (!Number.isInteger(value) || value < 1) {
            throw new RangeError(`недопустимое количество: ${value}`)
        }
        this.#qty = value
    }
    
    get sum() {
        return this.price * this.#qty
    }
}

const line = new CartLine ('мышь', 790, 2)
console.log(line.qty, line.sum)
line.qty = 5
console.log(line.qty, line.sum)

try{
    line.qty = 0
} catch (error) {
    console.log(error.name, '-', error.message)
}
console.log('количество осталось', line.qty)

line.sum = 1
console.log('sum после записи:', line.sum)
console.log(Object.keys(line))
console.log(JSON.stringify(line))