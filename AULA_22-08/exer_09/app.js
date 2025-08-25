
const Produto = require("./Produto")
const Carrinho = require("./Carrinho")

const produto1 = new Produto("tenis", 150)
const produto2 = new Produto("calça", 80)
const produto3 = new Produto("camisa", 120)

const carrinho = new Carrinho()

carrinho.adicionar(produto1)
carrinho.adicionar(produto2)
carrinho.adicionar(produto3)

carrinho.listar()


