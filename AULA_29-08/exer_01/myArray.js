
class MyArray {

    #items
    #tamanho

    constructor() {
        this.#items = []
        this.#tamanho = 0
    }

    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento
        this.#tamanho ++
    }

    remover(){
        if(this.#tamanho == 0){
            return undefined
        }
        const ultimoItem = this.#items[this.#tamanho - 1]
        delete this.#items[this.#tamanho -1]
        this.#tamanho --
        return ultimoItem
    }

    obterElemento(indice){
        if(indice >= 0 || indice < this.#tamanho -1){
            return this.#items[indice]
        }else{
            console.log("Este indice não existe")
        }
    }

    tamanhoArray(){
        return this.#tamanho
    }

    limpar(){
        this.#items = []
        this.#tamanho = 0
    }

    getArray(){
        const meusItens = this.#items
        return meusItens
    }
}

module.exports = MyArray