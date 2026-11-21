class ProductCard extends HTMLElement {
    // Следим за изменениями этих атрибутов
    static observedAttributes = ['name', 'price', 'qty']
    // Вызывается, когда элемент появляется на странице
    connectedCallback() {
        this.render()
    }
    // Вызывается при изменении атрибута
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && this.isConnected) {
            console.log(`${name}: ${oldValue} → ${newValue}`)
            this.render()
        }
    }
    // Создаём содержимое карточки
    render() {
        const name = this.getAttribute('name')
        const price = this.getAttribute('price')
        const qty = this.getAttribute('qty')
        this.innerHTML = `
            <div class="product">
                <b>${name}</b>
                <span>${price} ₽</span>
                <span>Количество: ${qty}</span>
            </div>
        `
    }
}
// Регистрируем собственный HTML-элемент
customElements.define('product-card', ProductCard)

