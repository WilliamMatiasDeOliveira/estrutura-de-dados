
class MeuArray{

    #item

    constructor(){
        this.#item = []
    }

    adicionar(valor){
        this.#item.push(valor)
    }

    limpar(){
        this.#item = []
    }

    verItens(){
        for (let i = 0; i < this.#item.length; i++) {
            console.log(this.#item[i])
        }
    }
}

module.exports = MeuArray;