const READ = 1, WRITE = 2, DELETE = 4, ADMIN = 8
function describe(perms){
    const result =[]
    if(perms & READ) result.push('чтение')
    if(perms & WRITE) result.push('запись')
    if(perms & DELETE) result.push('удаление')
    if(perms & ADMIN) result.push('администрирование')
    
    console.log(result.length > 0 ? result.join(', ') : 'нет прав')
}
describe(READ)
describe(READ | WRITE)
describe(READ | DELETE | ADMIN)