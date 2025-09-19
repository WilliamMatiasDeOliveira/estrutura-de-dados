
const MeuArray = require("./MeuAray")
const meuArray = new MeuArray()

meuArray.adicionar(100)
meuArray.adicionar(200)

meuArray.remover()

console.log(meuArray.tamanhoArray())


/**
 * O conceito se chama visibilidade
 * Quando é declarado um atributo #atributo significa que ele é privado ou seja só pode ser acessado dentro da classe
 * E os metodos por exemplo remover() por padrão ele é publico ou seja pode ser acessado fora da classe
 * Existe tambem o protected que so pode ser acessado pela propria classe e seus filhos atraves de herança
 */