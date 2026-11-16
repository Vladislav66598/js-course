class ProductList extends Array {
        byCategory(name){
            return this.filter((p) => p.category === name)
        }
        totalPrice() {
            return this.reduce((sum, p) => sum + p.price, 0)
        }
}

const catalog = ProductList.from([
    { name: 'мышь', category: 'электроника', price: 790 },
    { name: 'ручка', category: 'канцелярия', price: 60 },
    { name: 'монитор', category: 'электроника', price: 15990 },

])

const electronics = catalog.byCategory('электроника')
console.log(electronics.length, electronics.totalPrice())
console.log(electronics instanceof ProductList, Array.isArray(electronics))

const one = new ProductList(3);
console.log(one.length, one[0]);
const ok = ProductList.of(3);
console.log(ok.length, ok[0]);
