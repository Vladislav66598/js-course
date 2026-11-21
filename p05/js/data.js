// data.js: каталог мини-магазина, 20 товаров.
// Используется в ПР05 (самост. 1, 4, 5), ПР06 (теги, корзина на Map), ПР07 (самост. 2–6).
// Подключайте обычным тегом до своего скрипта:
//   <script src="js/data.js"></script>
//   <script src="js/self-1.js"></script>
// После этого в вашем скрипте доступна константа products.
//
// Поля товара:
//   id       — уникальный номер (число)
//   name     — название (строка; в одном названии есть кавычки и &, проверьте экранирование)
//   category — «Электроника», «Аксессуары», «Канцелярия» или «Дом»
//   price    — текущая цена в рублях (целое число)
//   oldPrice — цена до скидки или null, если скидки нет
//   stock    — остаток на складе, 0 — нет в наличии
//   tags     — массив тегов (повторяются между товарами)

const products = [
    { id: 1,  name: 'Клавиатура',                 category: 'Электроника', price: 1250,  oldPrice: 1490,  stock: 12, tags: ['периферия', 'офис'] },
    { id: 2,  name: 'Мышь',                       category: 'Электроника', price: 790,   oldPrice: null,  stock: 30, tags: ['периферия', 'офис'] },
    { id: 3,  name: 'Монитор 27"',                category: 'Электроника', price: 15990, oldPrice: 18990, stock: 4,  tags: ['экран', 'офис'] },
    { id: 4,  name: 'Коврик для мыши',            category: 'Аксессуары',  price: 450,   oldPrice: null,  stock: 50, tags: ['периферия'] },
    { id: 5,  name: 'Наушники "Bass" & Co',       category: 'Электроника', price: 3490,  oldPrice: null,  stock: 0,  tags: ['звук', 'беспроводное'] },
    { id: 6,  name: 'Веб-камера',                 category: 'Электроника', price: 2790,  oldPrice: 3290,  stock: 7,  tags: ['видео', 'офис'] },
    { id: 7,  name: 'USB-хаб на 4 порта',         category: 'Аксессуары',  price: 990,   oldPrice: null,  stock: 18, tags: ['периферия', 'usb'] },
    { id: 8,  name: 'Внешний SSD 1 ТБ',           category: 'Электроника', price: 7490,  oldPrice: null,  stock: 9,  tags: ['хранение', 'usb'] },
    { id: 9,  name: 'Флешка 64 ГБ',               category: 'Электроника', price: 690,   oldPrice: 890,   stock: 40, tags: ['хранение', 'usb'] },
    { id: 10, name: 'Колонки',                    category: 'Электроника', price: 2290,  oldPrice: null,  stock: 0,  tags: ['звук'] },
    { id: 11, name: 'Кабель HDMI 2 м',            category: 'Аксессуары',  price: 390,   oldPrice: null,  stock: 60, tags: ['видео', 'кабели'] },
    { id: 12, name: 'Подставка для ноутбука',     category: 'Аксессуары',  price: 1590,  oldPrice: 1990,  stock: 11, tags: ['офис', 'эргономика'] },
    { id: 13, name: 'Блокнот А5',                 category: 'Канцелярия',  price: 250,   oldPrice: null,  stock: 100, tags: ['бумага', 'офис'] },
    { id: 14, name: 'Набор гелевых ручек',        category: 'Канцелярия',  price: 320,   oldPrice: 400,   stock: 45, tags: ['офис'] },
    { id: 15, name: 'Маркеры для доски',          category: 'Канцелярия',  price: 480,   oldPrice: null,  stock: 0,  tags: ['офис', 'презентации'] },
    { id: 16, name: 'Настольная лампа',           category: 'Дом',         price: 1890,  oldPrice: null,  stock: 14, tags: ['свет', 'эргономика'] },
    { id: 17, name: 'Удлинитель на 5 розеток',    category: 'Дом',         price: 890,   oldPrice: 1090,  stock: 22, tags: ['электрика'] },
    { id: 18, name: 'Термокружка',                category: 'Дом',         price: 990,   oldPrice: null,  stock: 16, tags: ['кухня'] },
    { id: 19, name: 'Беспроводная зарядка',       category: 'Электроника', price: 1990,  oldPrice: 2490,  stock: 6,  tags: ['беспроводное', 'питание'] },
    { id: 20, name: 'Ноутбук 14"',                category: 'Электроника', price: 64990, oldPrice: 69990, stock: 3,  tags: ['компьютеры', 'офис'] },
];
