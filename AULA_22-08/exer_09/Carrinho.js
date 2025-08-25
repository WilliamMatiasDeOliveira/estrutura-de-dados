
class Carrinho {
    produtos
    constructor() {
        this.produtos = []
    }

    adicionar(produto) {
        this.produtos.push(produto)
    }

    listar() {

            let soma = 0

            for (let i = 0; i < this.produtos.length; i++) {
                console.log("===========================")
                console.log(this.produtos[i].nome)
                console.log(this.produtos[i].preco)
                console.log("===========================")
                soma += this.produtos[i].preco
            }
            console.log(`==== Total R$${soma} ====`)
        }
    
}


module.exports = Carrinho