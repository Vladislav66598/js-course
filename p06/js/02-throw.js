function setQty(product, qty) {
    if(!Number.isInteger(qty)) {
        throw new Error ('количество должны быть целым числом')
    }
    if (qty < 1 ){
        throw new Error('количество должно быть не меньше 1')
    }
    product.qty = qty
    return product
}

const mouse = {name: 'мышь', qty: 1}
for(const value of [3, 0, 2.5]) {
    try {
        setQty(mouse, value)
        console.log('ok:', value,   '->', mouse.qty)
    } catch (err){
        console.log('отклонено:', value, '|', err.message)
    }
}

try {
    throw 'что-то пошло не так'
} catch (err) {
    console.log(typeof err, err.message, err.stack)
}

function addToCart(product, qty) {
    try {
        setQty(product, qty)
        console.log('в корзине:', product.name, product.qty)
    } catch (err){
        if (err.message.startsWith('количество')){
            console.log('покажем пользователю:', err.message)
        } else{
            throw err
        }
    }
}
addToCart({name: 'монитор', qty: 1}, 2)
addToCart({name: 'монитор', qty: 1}, -5)
