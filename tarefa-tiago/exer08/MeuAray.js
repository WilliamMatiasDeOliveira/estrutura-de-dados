
class MeuArray{

    #item

    constructor(){
        this.#item = []
    }

    adicionar(valor){
        this.#item.push(valor)
    }

    obterElemento(indice){
        return this.#item[indice]
    }
}

module.exports = MeuArray;