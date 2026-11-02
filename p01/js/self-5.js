function parsePrice(text){
    const cleaned = text
    .replace('₽', '')
    .replace(/\s/g, '')
    .replace(',', '.')

    const price = Number(cleaned)

    return Number.isFinite(price) ? price : NaN
}
console.log(parsePrice('1 250,50 ₽'))
console.log(parsePrice('990₽'))
console.log(parsePrice('abc'))
