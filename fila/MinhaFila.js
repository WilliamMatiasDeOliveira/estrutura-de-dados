
class MinhaFila {
    fila = [];
    inicio = 0;
    fim = 0;

    // Quando se trata de fila os itens são adicionados no final
    adicionar(value) {
        this.fila[this.fim] = value;
        this.fim++
    }

    // para remover de uma fila se remove o primeiro item
    remover() {
        if (this.inicio === this.fim) {
            return undefined;
        }
        const primeiro = this.fila[this.inicio];
        delete this.fila[this.inicio];
        this.inicio++;
        return primeiro;
    }

    // Ver quem é o primeiro da fila
    primeiro() {
        if (this.inicio === this.fim) {
            return undefined;
        }
        const primeiro = this.fila[this.inicio];
        return primeiro;
    }

    // Retorna a quantidade de itens que tem na fila
    tamanho() {
        const tam = this.fim - this.inicio;
        return tam;
    }

    limpar() {
        this.fila = [];
        this.inicio = 0;
        this.fim = 0;
    }

    estaVazia() {
        if (this.inicio === this.fim) {
            return true;
        } else {
            return false;
        }
    }


}

module.exports = MinhaFila;