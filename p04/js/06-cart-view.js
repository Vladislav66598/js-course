class CartView {
    state = {items: [], promo: null}

    setState(patch) {
        this.state = { ...this.state, ...patch}
        console.log(this.render())
    }

    render(){
        const {items, promo} = this.state
        if(items.length === 0) return 'корзина пуста'
        const total = items.reduce((s, i) => s + i.price * i.qty, 0)
        const final = promo ? Math.round(total * 0.9) : total
        return `товаров: ${items.length}, итого ${final} ₽${promo ? '(промокод ' + promo + ')' : ''}`
    }
}

const view = new CartView()
console.log(view.render())

view.setState({items: [{ name: 'мышь', price: 790, qty: 2}]})
view.setState({items: [...view.state.items, {name: 'коврик', price: 450, qty: 1}]})
view.setState({promo: 'SALE10'})

view.state.items.push({name: 'наушники', price: 2990, qty: 1})
console.log('после push экран не обновился, а в данных товаров:', view.state.items.length)
view.setState({})
