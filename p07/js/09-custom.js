class ProductCard extends HTMLElement {
    static observedAttributes = ['name', 'price', 'stock']
 
    connectedCallback() {
        console.log('connected:', this.getAttribute('name'))
        this.render()
    }
 
    attributeChangedCallback(attr, oldValue, newValue) {
        if (oldValue !== null) console.log(`${attr}: ${oldValue} → ${newValue}`)
        if (this.isConnected) this.render()
    }
 
    render() {
        const stock = Number(this.getAttribute('stock'))
        this.innerHTML = ''
        const name = document.createElement('strong')
        name.textContent = this.getAttribute('name')
        const price = document.createElement('span')
        price.className = 'price'
        price.textContent = `${this.getAttribute('price')} ₽`
        this.append(name, price, stock > 0 ? ` (${stock} шт.)` : ' нет в наличии')
        this.style.cssText = 'display:block;background:#fff;padding:10px;margin:6px 0;border:1px solid #ccc;border-radius:8px'
    }
}
 
customElements.define('product-card', ProductCard)


const app = document.getElementById('app')
app.innerHTML = '<product-card name="Монитор" price="15990" stock="4"></product-card>'
 
const card = document.createElement('product-card')
card.setAttribute('name', 'Веб-камера')
card.setAttribute('price', '3490')
card.setAttribute('stock', '2')
app.append(card)
 
card.setAttribute('stock', '0')