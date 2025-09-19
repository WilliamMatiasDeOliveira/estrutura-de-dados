
const Pilha = require("./Pilha.js")
const p = new Pilha()

p.adicionar("magia fake")
p.adicionar("magia sem poder")
p.adicionar("magia engana trouxa")

console.log("A magia " + p.remover() + "Foi removida por não fazer efeito")

console.log(p.topo())

console.log(p.estaVazia())