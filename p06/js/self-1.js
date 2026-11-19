// Собственные ошибки
class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError'
        this.field = field
    }
}

class OutOfStockError extends Error {
    constructor(productId, available) {
        super(`недостаточно товара на складе. доступно: ${available}`)
        this.name = 'OutOfStockError'
        this.productId = productId
    }
}

// Остатки товаров
const stock = {
    42: 3,
    7: 10
}

// Корзина
const cart = []

// Лог попыток
const log = []

// Добавление товара
function addItem(productId, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
        throw new ValidationError(
            'qty',
            'количество должно быть целым и больше нуля'
        )
    }

    if (stock[productId] === undefined) {
        throw new ValidationError(
            'productId',
            'такого товара не существует'
        )
    }

    if (qty > stock[productId]) {
        throw new OutOfStockError(productId, stock[productId])
    }

    cart.push({ productId, qty })

    return `добавлено: товар ${productId} x ${qty}`
}

// Проверка работы
for (const [id, qty] of [[7, 2], [42, 5], [7, -1]]) {
    try {
        console.log(addItem(id, qty))

    } catch (e) {
        if (e instanceof ValidationError) {
            console.log('ошибка поля', e.field + ':', e.message)

        } else if (e instanceof OutOfStockError) {
            console.log(
                'Ошибка товара',
                e.productId + ':',
                e.message
            )

        } else {
            throw e
        }

    } finally {
        log.push({
            productId: id,
            qty: qty,
            date: new Date().toLocaleString()
        })
    }
}

console.log('корзина:', cart)
console.log('лог попыток:', log)