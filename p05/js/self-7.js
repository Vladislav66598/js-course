function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlight(text, query) {
    const safeText = escapeHtml(text)

    if (!query) return safeText

    const re = new RegExp(escapeRegExp(query), 'gi')

    return safeText.replace(re, found => `<mark>${found}</mark>`)
}

console.log(highlight('Мышь и коврик для мыши', 'мыш'))
console.log(highlight('Цена 1.5 тыс. и 105 руб.', '1.5'))


// Извлечение диапазона цен
function parsePrice(text) {
    const match = text.match(/от (?<min>[\d\s]+) до (?<max>[\d\s]+) ₽/)

    if (!match) return null

    return {
        min: Number(match.groups.min.replace(/\s/g, '')),
        max: Number(match.groups.max.replace(/\s/g, ''))
    }
}

console.log(parsePrice('от 1 250 до 3 000 ₽'))