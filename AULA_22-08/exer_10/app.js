
const read = require("readline-sync")

const Livro = require("./Livro")
const Biblioteca = require("./Biblioteca")

const livro1 = new Livro("pequeno principe", "ana maria", 1932)
const livro2 = new Livro("a arte da gerra", "shi zum", 1954)
const livro3 = new Livro("logica de programação", "tiago silva", 2025)

biblioteca = new Biblioteca()

biblioteca.adicionarLivros(livro1)
biblioteca.adicionarLivros(livro2)
biblioteca.adicionarLivros(livro3)

biblioteca.listarLivros()

autor = read.question("Digite o nome de um autor para buscar na biblioteca : ")

biblioteca.buscarPorAutor(autor)
