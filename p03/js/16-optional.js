const order = {
    id: 17,
    customer: { name: 'Анна', contacs: { email: 'anna@example.com'}},
}
const draft = {id: 18}

console.log(order.customer?.contacs?.email)
console.log(draft.customer?.console?.email)
console.log(draft.customer?.console?.email ?? 'почта не указана')

const shop = { log(msg) {console.log('LOG:', msg);}}
const silentShop = {}
shop.log?.('заказ создан')
silentShop.log?.('не выведется  ')

const reviews = null
console.log('первый отзыв:', reviews?.[o]?.author)