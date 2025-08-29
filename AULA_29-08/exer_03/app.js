
const Rh = require("./Rh")
const rh = new Rh()

rh.adicionar("joão")
console.table(rh.showFuncionarios())
rh.adicionar("maria")
console.table(rh.showFuncionarios())
rh.adicionar("lucas")
console.table(rh.showFuncionarios())
rh.adicionar("claudio")
console.table(rh.showFuncionarios())

console.log("Nome : " + rh.getFuncionario(2))

console.table(rh.showFuncionarios())

rh.limpar()

console.table(rh.showFuncionarios())
