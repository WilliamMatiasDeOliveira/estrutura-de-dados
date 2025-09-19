
const MinhaPilha = require ("./MinhaPilha.js");
const pilha = new MinhaPilha();

pilha.adicionar('A')
pilha.adicionar(20)
pilha.adicionar(30)

console.log(pilha.topo())

console.log(pilha.remover())

console.log(pilha.topo())

console.log(pilha.tamanhoPilha())