
class Biblioteca {

    constructor() {
        this.livros = []
    }

    adicionarLivros(livro) {
        this.livros.push(livro)
    }

    listarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            console.log("==========================")
            console.log(`Titulo ${this.livros[i].titulo}`)
            console.log(`Autor ${this.livros[i].autor}`)
            console.log(`Ano ${this.livros[i].ano}`)
            console.log("==========================")

        }
    }

    buscarPorAutor(autor) {

        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].autor === autor) {
                console.log(this.livros[i].titulo)
                console.log(this.livros[i].autor)
                console.log(this.livros[i].ano)
            }
        }
        console.log("Este autor não existe na nossa biblioteca")

    }
}

module.exports = Biblioteca