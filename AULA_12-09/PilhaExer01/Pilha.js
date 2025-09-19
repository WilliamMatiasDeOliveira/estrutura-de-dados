
class Pilha{

    #pilha = []
    #tamanho = 0

    adicionar(elemento){
        this.#pilha[this.#tamanho] = elemento
        this.#tamanho++
    }

    remover(){
        if(this.#tamanho === 0){
            return undefined
        }

        const ultimoItem = this.#pilha[this.#tamanho -1]
        delete this.#pilha[this.#tamanho -1]
        this.#tamanho--

        return ultimoItem
    }

    topo(){
        if(this.#tamanho === 0){
            return undefined
        }

        return this.#pilha[this.#tamanho -1]
    }

    estaVazia = () => this.#tamanho === 0
}

module.exports = Pilha;