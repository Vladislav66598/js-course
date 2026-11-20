const mouse = document.querySelector('[data-id="2"]')
console.log('родитель:', mouse.parentElement)
console.log('предыдущий:', mouse.previousElementSibling.dataset.id)
console.log('следующий:', mouse.nextElementSibling.dataset.id)
console.log('первый потомок-элемент:', mouse.firstElementChild)
console.log('первый узел:', mouse.firstChild)   

let node = document.querySelector('.price')
const path = []
while (node && node !== document.body) {
    path.push(node.tagName.toLowerCase())
    node = node.parentElement
}
console.log(path.join(' → '))
 
const price = document.querySelector('.sale .price')
console.log('closest li:', price.closest('li').dataset.id)
console.log('closest main:', price.closest('main').tagName)
console.log('closest form:', price.closest('form'))


const ul = document.getElementById('products')
console.log(ul.contains(price), document.body.contains(ul))
console.log(ul.children[1] === document.querySelector('.sale'))


