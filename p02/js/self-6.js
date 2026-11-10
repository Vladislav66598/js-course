const catalog = {
    name: 'Каталог',
    children: [
        {
            name: 'Компьютеры',
            children: [
                { name: 'Клавиатуры', children: [] },
                { name: 'Мыши', children: [] },
            ]
        },
        { name: 'Кабели', children: [] },
    ],
};

function printTree(node, level = 0) {
    console.log('   '.repeat(level) + '- ' + node.name);

    for (const child of node.children) {
        printTree(child, level + 1);
    }
}

function countNodes(node) {
    let count = 1;

    for (const child of node.children) {
        count += countNodes(child);
    }

    return count;
}

function findPath(node, name) {
    if (node.name === name) {
        return node.name;
    }

    for (const child of node.children) {
        const path = findPath(child, name);

        if (path !== null) {
            return node.name + ' / ' + path;
        }
    }

    return null;
}

printTree(catalog);

console.log('Всего категорий:', countNodes(catalog));

console.log(findPath(catalog, 'Мыши'));
console.log(findPath(catalog, 'Кабели'));
console.log(findPath(catalog, 'Мониторы'));