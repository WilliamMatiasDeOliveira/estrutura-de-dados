
class MeuArray{

    #item

    constructor(){
        this.#item = []
    }

    adicionar(valor){
        this.#item.push(valor)
    }

    remover(){
        return this.#item.pop()
    }
}

module.exports = MeuArray;