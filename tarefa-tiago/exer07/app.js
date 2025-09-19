
const MeuArray = require("./MeuAray")
const meuArray = new MeuArray()

meuArray.adicionar('maçã')
meuArray.adicionar('banana')

const itemRemovido = meuArray.remover()

console.log(itemRemovido)

/**
 * Vai depender de como foi implementado o metodo remover 
 * se foi implementado para remover o ultimo sera banana
 * se foi implementado para remover o primeiro sera maçã
 */