const list = document.getElementById('products')
 
const li = document.createElement('li')
li.className = 'product'
li.dataset.id = '4';
li.textContent = 'наушники '
 
const price = document.createElement('span')
price.className = 'price'
price.textContent = '2100 ₽'
li.append(price)
 
console.log('создан, но ещё не на странице:', document.body.contains(li))
list.append(li)
console.log('после append:', document.body.contains(li))

const first = document.createElement('li')
first.className = 'product'
first.textContent = 'новинка';
list.prepend(first); // в начало списка
 
const banner = document.createElement('p')
banner.textContent = 'Скидки до 30%!'
list.before(banner) // перед списком
 
console.log([...list.children].map((el) => el.textContent.trim()))

banner.remove()
 
const old = document.querySelector('[data-id="3"]')
const updated = document.createElement('li')
updated.className = 'product sale'
updated.textContent = 'Коврик XL'
old.replaceWith(updated)
 
list.append(first) // перемещение, а не копия
console.log([...list.children].map((el) => el.textContent.trim()))

const fragment = document.createDocumentFragment()
for (let i = 1; i <= 3; i++) {
    const extra = document.createElement('li')
    extra.className = 'product'
    extra.textContent = `кабель ${i} м`
    fragment.append(extra)
}
console.log('во фрагменте:', fragment.children.length)
list.append(fragment)
console.log('во фрагменте после вставки:', fragment.children.length, 'в списке:', list.children.length)



