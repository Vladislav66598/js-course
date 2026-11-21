// 1. Находим все карточки проектов
const cards = document.querySelectorAll('.project-card')

// 2. Добавляем каждой карточке data-index
cards.forEach((card, index) => {
    card.dataset.index = index
})

// 3. Меняем цвет заголовков через classList
cards.forEach(card => {
    const title = card.querySelector('h2')

    if (title) {
        title.classList.add('highlight')
    }
})

// 4. Удаляем последнюю карточку
const lastCard = document.querySelector('.project-card:last-child')

if (lastCard) {
    lastCard.remove()
}

// 5. Находим кнопку Work With Us
const button = [...document.querySelectorAll('a, button')]
    .find(element => element.textContent.trim() === 'Work With Us')

// 6. Выводим путь от кнопки до body
let element = button

while (element) {
    console.log(element)

    if (element === document.body) {
        break
    }

    element = element.parentElement
}