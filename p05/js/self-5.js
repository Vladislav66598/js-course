// Экранирование HTML
function escapeHTML(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')
}

// Создание карточки одного товара
function renderCard(product) {
    return `
        <li class="product">
            <h3>${escapeHTML(product.name)}</h3>

            <p>Категория: ${escapeHTML(product.category)}</p>

            <p>
                Цена: ${escapeHTML(product.price)} ₽
                ${product.oldPrice !== null
                    ? `<del>${escapeHTML(product.oldPrice)} ₽</del>`
                    : ''}
            </p>

            ${product.stock === 0
                ? '<span class="badge">Нет в наличии</span>'
                : `<p>На складе: ${escapeHTML(product.stock)} шт.</p>`}
        </li>
    `
}

// Создание списка товаров
function renderList(products) {
    return `
        <ul class="products">
            ${products.map(product => renderCard(product)).join('')}
        </ul>
    `
}

// Вывод каталога на страницу
document.body.innerHTML += renderList(products)