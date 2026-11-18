const attempts = [
    () => undefinedVariable, // ReferenceError
    () => null.name, // TypeError
    () => (1).toFixed(200), // RangeError
    () => JSON.parse('{'), // SyntaxError
    () => decodeURIComponent('%'), // URIError
]
for (const attempt of attempts) {
    try {
        attempt()
    } catch (err) {
        console.log(err.name.padEnd(15), err.message)
    }
}

class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}
 
class OutOfStockError extends Error {
    constructor(productId, available) {
        super(`Товар ${productId}: на складе только ${available} шт.`)
        this.name = 'OutOfStockError'
        this.productId = productId
        this.available = available
    }
}
 
const err = new OutOfStockError(42, 3)
console.log(err.name, '|', err.message)
console.log(err instanceof OutOfStockError, err instanceof Error)

const stock = { 42: 3, 7: 10 }
function addItem(productId, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
        throw new ValidationError('qty', 'количество должно быть целым и больше нуля')
    }
    if (qty > stock[productId]) throw new OutOfStockError(productId, stock[productId])
    return `Добавлено: товар ${productId} x ${qty}`
}
 
for (const [id, qty] of [[7, 2], [42, 5], [7, -1]]) {
    try {
        console.log(addItem(id, qty))
    } catch (e) {
        if (e instanceof ValidationError) console.log('поле', e.field + ':', e.message)
        else if (e instanceof OutOfStockError) console.log('предложим', e.available, 'шт. вместо запрошенных')
        else throw e
    }
}

function parseCart(json) {
    try {
        return JSON.parse(json)
    } catch (e) {
        throw new Error('не удалось восстановить корзину', { cause: e })
    }
}
try {
    parseCart('{bad json')
} catch (e) {
    console.log(e.message)
    console.log('причина:', e.cause.name, '|', e.cause.message)
}



