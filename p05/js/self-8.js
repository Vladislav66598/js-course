const raw = `
мышь ; 790 ; электроника
КОВРИК;450; аксессуары

наушники ; 2990 ; ЭЛЕКТРОНИКА
клавиатура;abc; техника
;500; аксессуары
монитор;12000; техника
`

const rows = raw.split(/\r?\n/)
    .map(line => {
        const [name, price, category] = line.split(';').map(value => value.trim())

        return {
            name,
            price: Number(price),
            category
        }
    })
    .filter(product =>
        product.name &&
        product.category &&
        Number.isFinite(product.price) &&
        product.price > 0
    )
    .map(product => ({
        name: product.name[0].toUpperCase() + product.name.slice(1).toLowerCase(),
        price: product.price,
        category: product.category.toLowerCase()
    }))

console.log(rows)