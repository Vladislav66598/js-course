class CartView {
    state = { items: [], promo: null }

    setState(patch) {
        this.state = { ...this.state, ...patch }
        console.log(this.render())
    }

    addItem(item) {
        this.setState({
            items: [...this.state.items, item]
        })
    }

    removeItem(name) {
        this.setState({
            items: this.state.items.filter(item => item.name !== name)
        })
    }

    applyPromo(code) {
        this.setState({ promo: code })
    }

    render() {
        const { items, promo } = this.state

        if (items.length === 0) return 'Корзина пуста'

        const lines = items.map(item =>
            `${item.name} — ${item.qty} шт. × ${item.price} ₽ = ${item.qty * item.price} ₽`
        )

        const total = items.reduce((s, i) => s + i.price * i.qty, 0)
        const final = promo ? Math.round(total * 0.9) : total

        lines.push(`Итого: ${final} ₽`)

        if (promo) {
            lines.push(`Промокод: ${promo}`)
        }

        return lines.join('\n')
    }
}

const view = new CartView()

view.addItem({ name: 'мышь', price: 790, qty: 2 })
view.addItem({ name: 'коврик', price: 450, qty: 1 })
view.applyPromo('SALE10')
view.removeItem('коврик')
