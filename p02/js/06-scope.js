const shopName = 'мини магазин' // глобальная

function printHeader() {
    const title = 'каталог' // локальная
    console.log(shopName, '|', title)
}
printHeader()

const stock = 3
if (stock > 0){
    const massage = 'есть в наличии'
    console.log('внутри блока:', massage)
}
console.log('снаружи блока:', typeof massage)

const discount = 5

function vipPrice(price){
    const discount = 20 // затеняет внешнюю
    return price - price *discount/100
}
console.log('VIP-цена:', vipPrice(1000), 'внешняя скидка', discount)

let visits = 0
function regiisterVisit(){
    visits++
}
regiisterVisit()
regiisterVisit()
console.log('визитов:', visits)