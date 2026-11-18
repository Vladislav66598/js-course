class ProductList extends Array {
    byCategory(name){
        return this.filter(product => product.category === name)
    }
    totalPrice(){
        return this.reduce((sum, product) => sum + product.price, 0)
    }
    cheapest(){
        return this.reduce((cheapest, product) => product.price < cheapest.price ? product : cheapest)
    }
}
const products = new ProductList(
    { name: 'Ноутбук', category: 'Техника', price: 80000 },
    { name: 'Телефон', category: 'Техника', price: 50000 },
    { name: 'Футболка', category: 'Одежда', price: 2000 }
)
console.log(products.byCategory('Техника'))
console.log(products.totalPrice())
console.log(products.cheapest())

const filtered = products.filter(product => product.price > 10000)

console.log(filtered instanceof ProductList)
console.log(filtered)