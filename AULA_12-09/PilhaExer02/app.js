const Pilha = require("./Pilha.js")
const p = new Pilha()

p.adicionar("Moeda de ouro")
p.adicionar("Moeda de prata")
p.adicionar("Moeda de bronze")

console.log(p.remover())
console.log(p.topo())
console.log(p.estaVazio())