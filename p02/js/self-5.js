function increaseQty(item){
    item.qty++
}
const product = {
    name: 'клавиатура',
    qty: 2
}
 increaseQty(product)
 console.log(product)

 function increaseNumber(n){
    n++
 }
 let number = 5
 increaseNumber(number)
 console.log(number)

 function increaseQty(item){
    return{
        ...item,
        qty: item.qty + 1
    }
 }
 const products = {
    name: 'клавиатура',
    qty: 2
 }
 const updateProducts = increaseQty(products)

 console.log('исходный объект:', products)
 console.log('новый объект:', updateProducts)