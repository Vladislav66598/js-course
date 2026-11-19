// исходное состояние магазина
const initialState = {
    items: new Map([
        [101, 2],
        [205, 1]
    ])
}

// функция отображения корзины
function render() {
    const catalog = document.getElementById('cart')

    catalog.innerHTML = ''

    for (const [id, qty] of state.items) {
        catalog.innerHTML += `
            <div>Товар ${id}: ${qty} шт.</div>
        `
    }

    console.log('корзина обновлена')
}

// создаём Proxy
const state = new Proxy(initialState, {
    set(target, property, value) {
        target[property] = value
        render()
        return true
    }
})

// проверяем изменение состояния
state.items = new Map([
    [101, 3],
    [205, 2],
    [310, 1]
])

// добавляем товар
state.items = new Map(state.items)
state.items.set(420, 2)
render()