
class MeuArray{

    #item

    constructor(){
        this.#item = []
    }

    adicionar(valor){
        this.#item.push(valor)
    }

    remover(){
        this.#item.pop()
    }

    exibeElemento(indice){
        return this.#item[indice]
    }

    tamanhoArray(){
        return this.#item.length
    }
}

module.exports = MeuArray;