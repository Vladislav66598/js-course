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
        <button class="plus">+</button> <b class="qty">0</b>`
    list.append(li)
}

for (const btn of document.querySelectorAll('.plus')) {
    btn.addEventListener('click', () => {
        const li = btn.closest('li')
        const id = Number(li.dataset.id)
        cart.set(id, (cart.get(id) ?? 0) + 1)
 
        // место 1: количество в карточке
        li.querySelector('.qty').textContent = cart.get(id)
        // место 2: счётчик в шапке
        let count = 0
        for (const q of cart.values()) count += q
        document.getElementById('count').textContent = count
        // место 3: итоговая сумма
        let total = 0
        for (const [pid, q] of cart) total += products.find((p) => p.id === pid).price * q
        document.getElementById('total').textContent = total
        console.log('корзина:', cart)
    })

    
}

