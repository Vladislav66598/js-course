const date = 'заказ оформлен 31.10.2026'
const m = date.match(/(\d{2})\.(\d{2})\.(\d{4})/)
console.log(m[0], '| день', m[1], '| месяц', m[2], '| год', m[3])
 
const named = date.match(/(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})/)
const { day, month, year } = named.groups
console.log(`${year}-${month}-${day}`)

function parseRange(text) {
    const re = /от\s+(?<from>[\d\s]+?)\s+до\s+(?<to>[\d\s]+?)\s*₽/
    const found = text.match(re)
    if (!found) return null
    const toNumber = (s) => Number(s.replace(/\s/g, ''))
    return { from: toNumber(found.groups.from), to: toNumber(found.groups.to) }
}
console.log(parseRange('цена от 1 250 до 3 000 ₽'))
console.log(parseRange('цена договорная'))

console.log('очень очень дорого'.match(/(\S+) \1/)[0])
console.log('ab-12, ab-13, cd-14'.match(/(?:ab|cd)-\d+/g))


