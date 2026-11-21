// Дополнительный товар для проверки
const testProduct = {
    id: 21,
    name: '<img src=x onerror=alert(1)>',
    price: 100
};

// Добавляем его к основным 20 товарам
const allProducts = [...products, testProduct];


// Вариант 1 — createElement и DocumentFragment

const catalog1 = document.querySelector('#catalog1');
const fragment = document.createDocumentFragment();

allProducts.forEach(product => {
    const li = document.createElement('li');

    li.textContent = `${product.name} — ${product.price} ₽`;

    fragment.append(li);
});

catalog1.append(fragment);


// Вариант 2 — шаблонные строки и innerHTML

const catalog2 = document.querySelector('#catalog2');

let html = '';

allProducts.forEach(product => {
    html += `<li>${product.name} — ${product.price} ₽</li>`;
});

catalog2.innerHTML = html;