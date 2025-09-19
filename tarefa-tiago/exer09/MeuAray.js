
class MeuArray{

    #item
    #tamanho

    constructor(){
        this.#item = []
    }

    adicionar(valor){
        this.#item.push(valor)
    }

    remover(){
        this.#item.pop()
    }

    tamanhoArray(){
        this.#tamanho = this.#item.length
        let tamanho = this.#tamanho
        return tamanho
    }
}

module.exports = MeuArray;