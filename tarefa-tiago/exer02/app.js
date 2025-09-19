
const MeuArray = require("./MeuArray")
const meuArray = new MeuArray();

meuArray.adicionar(10)
meuArray.adicionar(20)
meuArray.adicionar(30)
meuArray.remover()

console.log(meuArray.tamanhoArray())

/**
 * Vai depender de como foram implementados os metodos 
 * 
 * Ex : Se formos levar em consideração pelos nomes dos metodos
 * e considerar que o remover() esta excluindo um item
 * do array
 * E o metodo tamanhoArray retorne o tamanho (length) do array
 * O console seria 2
 * 
 */