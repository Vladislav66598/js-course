// Получить названия товаров дороже 1000 ₽ из категории «Электроника» и отсортировать по убыванию цены
const expensiveElectronics = products
    .filter(product => product.category === 'Электроника' && product.price > 1000)
    .sort((a, b) => b.price - a.price)
    .map(product => product.name)

console.log('электроника дороже 1000 ₽:', expensiveElectronics)

// Посчитать суммарную стоимость склада

const totalCost = products.reduce((sum, product) => {
    return sum + product.price * product.stock
}, 0)
console.log('общая стоимость склада:', totalCost, '₽')

// Сгруппировать товары по категориям

const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
        groups[product.category] = []
    }

    groups[product.category].push(product)

    return groups
}, {})

console.log('товары по категориям:', groupedProducts)