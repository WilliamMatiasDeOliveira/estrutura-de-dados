
class Pilha{

    #item = []
    #tamanho = 0

    adicionar(elemento){
        this.#item[this.#tamanho] = elemento
        this.#tamanho++
    }

    remover(){
        if(this.#tamanho === 0){
            return "O bau esta vazio"
        }

        const ultimoItem = this.#item[this.#tamanho -1]
        delete this.#item[this.#tamanho -1]
        this.#tamanho --
        return ultimoItem
    }

    topo(){
        if(this.#item[this.#tamanho] === 0){
            return "O bau esta vazio"
        }
        return this.#item[this.#tamanho -1]
    }

    estaVazio = () => this.#tamanho === 0
}

module.exports = Pilha