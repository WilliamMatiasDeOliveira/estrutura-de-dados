const Fila = require("./Fila.js")

const f = new Fila()

f.entrar("cliente 1")
f.entrar("cliente 2")
f.entrar("cliente 3")

console.log("Inicio da fila " + f.inicio())
console.log("Cliente a ser atendido " + f.atendido())
console.log("Cliente a ser atendido " + f.atendido())

f.entrar("cliente 4")
console.log("O cliente que esta no fim de fila é " + f.fim())

console.log("Existe " + f.tamanho() + " clientes na fila")
console.log("O cliente que esta no começo da fila é " + f.inicio())