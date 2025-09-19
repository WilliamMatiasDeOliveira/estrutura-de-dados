
const MeuArray = require("./MeuAray")
const meuArray = new MeuArray()

meuArray.#item

/**
 * O proposito desse caracter na frente do atributo
 * sinaliza que este atributo é privado e só pode ser
 * acessado dentro da classe por isso o erro
 * SyntaxError: Private field '#item' must be declared in an enclosing class 
 */