const iso = '2026-10-31'
console.log(iso.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1'))
console.log('a-b-c'.replace('-', '+'), 'a-b-c'.replace(/-/g, '+'))

const priceList = 'мышь 790, коврик 450, наушники 2990'
const withDiscount = priceList.replace(/\d+/g, (match) => Math.round(Number(match) * 0.9))
console.log(withDiscount)

const raw = 'мышь ;  790 ;электроника\nКОВРИК;450;  аксессуары'
const rows = raw.split(/\r?\n/).map((line) => {
    const [name, price, category] = line.split(/\s*;\s*/)
    const title = name.trim().toLowerCase()
    return { name: title[0].toUpperCase() + title.slice(1), price: Number(price), category: category.trim() }
})
console.log(rows[0])
console.log(rows[1])


function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function highlight(text, query) {
    if (!query) return text
    const re = new RegExp(escapeRegExp(query), 'gi')
    return text.replace(re, (found) => `<mark>${found}</mark>`)
}
console.log(highlight('Мышь и коврик для мыши', 'мыш'))
console.log(highlight('Цена 1.5 тыс. и 105 руб.', '1.5'))
