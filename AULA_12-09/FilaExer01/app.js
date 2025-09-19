const Fila = require("./Fila.js")
const f = new Fila()

f.entrar("cliente 1")
f.entrar("cliente 2")
f.entrar("cliente 3")

console.log(f.atender())
console.log(f.atender())

console.log("cliente no começo " + f.inicio())

console.log(f.tamanho())