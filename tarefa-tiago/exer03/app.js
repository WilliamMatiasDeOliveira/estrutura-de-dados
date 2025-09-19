
const MeuArray = require("./MeuArray")
const meuArray = new MeuArray();

meuArray.adicionar('a')
meuArray.adicionar('b')
meuArray.adicionar('c')

console.log(meuArray.obterElemento(1))

/**
 * A saida sera b pois o b esta no indice 1 do meu array
 */