
function isEqualCart(a, b) {
    // Проверяем количество товаров
    if (a.length !== b.length) {
        return false;
    }

    // Сравниваем товары по порядку
    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id || a[i].qty !== b[i].qty) {
            return false;
        }
    }

    return true;
}

const cart1 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 1 }
]

const cart2 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 1 }
]

console.log(isEqualCart(cart1, cart2))

