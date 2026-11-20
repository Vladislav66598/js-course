const title = document.getElementById('title')
console.log(title)
const items = document.getElementsByTagName('li')
console.log(items)
const sale = document.getElementsByClassName('sale')
console.log(sale)

console.log(document.querySelector('.product'))
console.log(document.querySelector('.product.sale .price'))
console.log(document.querySelectorAll('.menu a'))
console.log(document.querySelector('[data-id="3"]'))
console.log(document.querySelector('.nothing'))

const live = document.getElementsByTagName('li')
const snapshot = document.querySelectorAll('li')
console.log('до:', live.length, snapshot.length)
 
document.getElementById('products').insertAdjacentHTML('beforeend',
    '<li class="product" data-id="4">наушники</li>')
 
console.log('после:', live.length, snapshot.length)
console.log('массив из NodeList:', Array.from(snapshot).map((li) => li.dataset.id))


