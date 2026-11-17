const text = 'заказ A-17: 3 шт. по 790 руб., итого 2370 руб.'
console.log(text.match(/\d/g).join(''))
console.log(text.match(/\d+/g))
console.log(text.match(/[А-ЯЁA-Z]/g))
console.log(text.match(/[^\d\s.,:]+/g))

const article = /^[A-Z]{2}-\d{5}$/
console.log(article.test('AB-12345'))
console.log(article.test('артикул AB-12345'))
console.log(/[A-Z]{2}-\d{5}/.test('артикул AB-12345'))

console.log(/1.5/.test('105'), /1\.5/.test('105'), /1\.5/.test('1.5'))
console.log('cat concat'.match(/\bcat\b/g))
console.log('кот скот'.match(/\bкот\b/g))


