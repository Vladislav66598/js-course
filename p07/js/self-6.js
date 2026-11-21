let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
    ],
    cart: {},
    search: '',
    sortAscending: true,
}
const cards = new Map()
let created = 0, updated = 0
function createCard(p) {
    const li = document.createElement('li')
    li.className = 'product'
    li.dataset.id = p.id
    li.innerHTML = `
        <span class="name"></span>
        <button class="minus">−</button>
        <b class="qty"></b>
        <button class="plus">+</button>
        <button class="remove">Удалить</button>
    `
    li.querySelector('.name').textContent =
        `${p.name} ${p.price} ₽`
    created++
    return li
}
function updateCard(li, qty) {
    const qtyEl = li.querySelector('.qty')
    if (qtyEl.textContent !== String(qty)) {
        qtyEl.textContent = qty
        li.querySelector('.minus').disabled = qty === 0
        updated++
    }
}
function render(s) {
    const list = document.getElementById('list')
    let visible = s.products.filter(p =>
        p.name.toLowerCase().includes(s.search.toLowerCase())
    )
    // Сортировка по цене
    visible.sort((a, b) =>
        s.sortAscending ? a.price - b.price : b.price - a.price
    )
    const visibleIds = new Set(visible.map(p => p.id))
    // Удаляем карточки, которых больше нет в списке
    for (const [id, li] of cards) {
        if (!visibleIds.has(id)) {
            li.remove()
            cards.delete(id)
        }
    }
    // Создаём новые карточки и переставляем существующие
    visible.forEach((p, index) => {
        let li = cards.get(p.id)
        if (!li) {
            li = createCard(p)
            cards.set(p.id, li)
        }
        updateCard(li, s.cart[p.id] ?? 0)
        if (list.children[index] !== li) {
            list.insertBefore(li, list.children[index] ?? null)
        }
    })
    const count = Object.values(s.cart).reduce((a, b) => a + b, 0)
    const total = s.products.reduce(
        (sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0
    )
    document.getElementById('count').textContent = count
    document.getElementById('total').textContent = total
    console.log(`created: ${created}, updated: ${updated}`)
}
function setState(patch) {
    state = { ...state, ...patch }
    render(state)
}
// Кнопки внутри карточек
document.getElementById('list').addEventListener('click', e => {
    const li = e.target.closest('li')
    if (!li) return
    const id = Number(li.dataset.id)
    const qty = state.cart[id] ?? 0
    if (e.target.matches('.plus')) {
        setState({
            cart: { ...state.cart, [id]: qty + 1 }
        })
    }
    if (e.target.matches('.minus')) {
        const cart = { ...state.cart }
        if (qty <= 1) {
            delete cart[id]
        } else {
            cart[id] = qty - 1
        }
        setState({ cart })
    }
    if (e.target.matches('.remove')) {
        const cart = { ...state.cart }
        delete cart[id]
        setState({ cart })
    }
})
// Поиск
document.getElementById('search').addEventListener('input', e => {
    setState({ search: e.target.value })
})
// Сортировка
document.getElementById('sort').addEventListener('click', () => {
    setState({ sortAscending: !state.sortAscending })
})

render(state)
