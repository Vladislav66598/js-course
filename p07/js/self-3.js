
const products = [
    { id: 1, name: 'клавиатура', price: 1250 },
    { id: 2, name: 'мышь', price: 790 },
    { id: 3, name: 'коврик', price: 430 },
]
const cart = new Map()
const list = document.getElementById('list')
for (const p of products) {
    const li = document.createElement('li')
    li.className = 'product'
    li.dataset.id = p.id
    li.innerHTML = `${p.name} <span class="price">${p.price} ₽</span>
        <button class="plus">+</button>
        <button class="minus">−</button>
        <b class="qty">0</b>
        <button class="remove">Удалить</button>`
    list.append(li)
}
// Обновление счётчика и суммы
function updateCart() {
    let count = 0
    let total = 0
    for (const [id, qty] of cart) {
        count += qty
        const product = products.find(p => p.id === id)
        total += product.price * qty
    }
    document.getElementById('count').textContent = count
    document.getElementById('total').textContent = total
}
// Добавление товара
for (const btn of document.querySelectorAll('.plus')) {
    btn.addEventListener('click', () => {
        const li = btn.closest('li')
        const id = Number(li.dataset.id)
        cart.set(id, (cart.get(id) ?? 0) + 1)
        li.querySelector('.qty').textContent = cart.get(id)
        updateCart()
    })
}

// Уменьшение количества
for (const btn of document.querySelectorAll('.minus')) {
    btn.addEventListener('click', () => {
        const li = btn.closest('li')
        const id = Number(li.dataset.id)
        const qty = (cart.get(id) ?? 0) - 1
        if (qty <= 0) {
            cart.delete(id)
        } else {
            cart.set(id, qty)
        }
        li.querySelector('.qty').textContent = Math.max(qty, 0)
        updateCart()
    })
}
// Удаление товара
for (const btn of document.querySelectorAll('.remove')) {
    btn.addEventListener('click', () => {
        const li = btn.closest('li')
        const id = Number(li.dataset.id)
        cart.delete(id)
        li.querySelector('.qty').textContent = 0
        updateCart()
    })
}
// Очистка корзины
document.getElementById('clear').addEventListener('click', () => {
    cart.clear()
    document.querySelectorAll('.qty').forEach(qty => {
        qty.textContent = 0
    })
    updateCart()
})
