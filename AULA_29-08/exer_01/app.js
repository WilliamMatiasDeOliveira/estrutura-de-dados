
const MyArray = require("./myArray")
const myArray = new MyArray()

const meusItens = myArray.getArray()

myArray.adicionar(10)
console.table(meusItens)

myArray.adicionar(20)
console.table(meusItens)

myArray.adicionar(30)
console.table(meusItens)

console.log(myArray.obterElemento(1))
console.log(myArray.tamanhoArray())

console.log(myArray.remover())
console.log(myArray.tamanhoArray())
