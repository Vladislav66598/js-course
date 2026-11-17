const item = { name: 'мышь', price: 790, qty: 2}
console.log(`товар: ${item.name} 
количество: ${item.qty} 
сумма: ${item.price}`)

const products = [
    { name: 'Клавиатура', price: 1250, oldPrice: 1490, stock: 5 },
    { name: 'Мышь', price: 790, oldPrice: null, stock: 0 },
    { name: 'Наушники', price: 2990, oldPrice: 3490, stock: 7 },
]

function renderCart(product) {
    return `
        <div class="card">
        <h3>${product.name}</h3>
        <span class="price">${product.price} ₽</span
        ${product.oldPrice ? `span class="old">${product.oldPrice} ₽ </span>` : ''}
        ${product.stock === 0 ? '<div class="badge"> Нет в наличии </div>' : ''}
        </div>`;
}

function renderList (items) {
    return items.map(renderCart).join('')
}
document.getElementById('catalog').innerHTML = renderList(products)

products.push({name: 'коврик <b>XXL</b> <i>новинка</i>', price: 450, oldPrice: null, stock: 3})
document.getElementById('catalog').innerHTML = renderList(products)


function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
}
function html(strings, ...values) {
    return strings.reduce((out, str, i) => out + str  +(i < values.length ? escapeHtml(values[i]) : ''), '')
}
const safeCard = (p) => html`<div class="card"> <h3>${p.name}</h3><span> class="price">${p.price} ₽ </span></div>`;
document.getElementById('catalog').innerHTML = products.map(safeCard).join('')
console.log(html`<b>${'<script>'} </b>`)