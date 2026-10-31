console.log(5 > 3, 5 >= 5, 5 < 3, 5 !== 3)

console.log("'5' == 5:", '5' == 5, " '5' === 5:", '5' === 5)
console.log('0 == false:', 0 == false, ' 0 === false:', 0 === false)
console.log(" '' == 0:", '' == 0)
console.log('null == undefined:', null == undefined, ' null === undefined', null === undefined)

const inStock = true, isVip = false
console.log(inStock && isVip, inStock || isVip, !inStock)

console.log('мышь' || 'нет названия')
console.log('' || 'нет названия')
console.log(0 && 'не дойдем')
console.log('есть' && 'вернется второе')

const stock = 0
const label = stock > 0 ? 'в наличии' : 'нет в наличии'
console.log(label)
console.log(`осталось: ${stock > 5 ? 'много' :stock > 0 ? 'мало' : 'нет'}`)

const qty = 0
const note = ''
let discount
console.log('qty || 1 =', qty || 1)
console.log('qty ?? 1 =', qty ?? 1 )
console.log("note || '-' =", note || '-')
console.log("note ?? '-' =", note ?? '-')
console.log('discount ?? 0 = ', discount ?? 0)