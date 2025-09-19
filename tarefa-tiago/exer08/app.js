
const MeuArray = require("./MeuAray")
const meuArray = new MeuArray()

meuArray.adicionar(100)
meuArray.adicionar(200)

console.log(meuArray.obterElemento(0))
console.log(meuArray.obterElemento(2))
console.log(meuArray.obterElemento(-1))


/**
 * 100
 * undefined
 * undefined
 * 
 * O porque destes resultados :
 * 
 * 1 - o indice 0 existe no meu array então ele me retorna 100
 * 2 - o indice 2 não existe no meu array pois ele não existe (undefined)
 * 3 - no javascript não é possivel acessar indices negativos de um array
 */