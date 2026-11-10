function createIdGenerator(prefix){
    let count = 0
    return{
        next(){
            count++
            return `${prefix}-${count}`
        },
        reset(){
            count = 0
        }
    }
}
const orderGenerator = createIdGenerator('ORD')
const userGenerator = createIdGenerator('USR')

console.log(orderGenerator.next()) 
console.log(orderGenerator.next())

console.log(userGenerator.next())
console.log(userGenerator.next())

orderGenerator.reset()

console.log(orderGenerator.next())
console.log(orderGenerator.next())
