
class MinhaPilha{
    #itens = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#itens[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    remover(){
        if(this.#tamanho === 0){
            return undefined;
        }

        const ultimoItem = this.#itens[this.#tamanho -1];
        delete this.#itens[this.#tamanho -1];
        this.#tamanho--;
        return ultimoItem;
    }

    topo(){
        if(this.#itens[this.#tamanho] === 0){
            return undefined;
        }
        return this.#itens[this.#tamanho -1];
    }

    limpar(){
        this.#itens = [];
        this.#tamanho = 0;
    }

    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;
}

module.exports = MinhaPilha;