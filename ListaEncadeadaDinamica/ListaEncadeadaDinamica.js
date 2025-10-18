const Node = require("./Node");

class ListaDinamicaEncadeada {
    inicio = undefined;
    fim = undefined;
    tamanho = 0

    // percorrer a lista do inicio até o final
    mostrarInicio() {
        if (this.inicio === undefined) {
            return;
        } else {
            let atual = this.inicio;
            let list = "";

            while (atual) {
                list += atual.value + " -> ";
                atual = atual.next;
            }

            console.log(list + "undefined");
        }
    }

    // percorrer a lista do final até o inicio
    mostrarFim() {
        if (this.inicio === undefined) {
            return "A lista esta vazia";
        }

        let atual = this.fim;

        let list = "";

        while (atual) {
            list += atual.value + " -> ";
            atual = atual.prev;
        }

        console.log(list + "undefined");
    }

    // append()
    // inserir no fim da lista
    inserirFim(value) {
        const node = new Node(value);

        if (this.inicio === undefined) {
            this.inicio = node;
            this.fim = node;
        } else {
            this.fim.next = node;
            node.prev = this.fim;
            this.fim = node;
        }

        this.tamanho++;
    }

    // prepend()
    // inserir no inicio da lista
    inserirInicio(value) {
        if (this.inicio === undefined) {
            this.inicio = node;
            this.fim = node;
        } else {
            const node = new Node(value);
            node.next = this.inicio;
            this.inicio.prev = node;
            this.inicio = node;
        }

        this.tamanho++;
    }

    // removeLast()
    // remover do final da lista
    removerFim() {
        if (this.fim === undefined) {
            return undefined;
        } else {
            const nodeDelete = this.fim.value;

            if (this.fim === this.inicio) {
                this.inicio = undefined;
                this.fim = undefined
            } else {
                this.fim = this.fim.prev;
                this.fim.next = undefined;
            }

            this.tamanho--;
            return nodeDelete;
        }
    }

    // removeFirst()
    // remover do inicio da lista
    removerInicio() {
        if (this.inicio === undefined) {
            return undefined;
        } else {
            const nodeDelete = this.inicio.value;

            if (this.inicio === this.fim) {
                this.inicio = undefined;
                this.fim = undefined;
            } else {
                this.inicio = this.inicio.next;
                this.inicio.prev = undefined;
            }

            this.tamanho--;

            return nodeDelete;
        }
    }

    // insertAt()
    // inserir um no em uma posição especifica
    inserir_em(value, indice) {
        if (indice < 0 || indice > this.tamanho) {
            return undefined;
        }

        const node = new Node(value);

        if (indice === 0) {
            this.inserirInicio(value);
        }

        if (indice === this.tamanho) {
            this.inserirFim(value);
        }

        let atual = this.inicio;
        let count = 0;
        let anterior;

        while (count < indice) {
            anterior = atual;
            atual = atual.next;
            count++;
        }

        node.next = atual;
        node.prev = anterior;
        anterior.next = node;
        atual.prev = node;

        this.tamanho++;
    }

    // find()
    // encontrar o indice de um valor especifico
    buscarIndiceAtravesDeUmValor(value) {
        let atual = this.inicio;
        let indice = 0;

        while (atual) {
            if (atual.value === value) {
                return indice;
            }
            atual = atual.next;
            indice++;

        }
        return -1;
    }

    // removeAt()
    // remover um no em uma posição especifica
    removerUmNoAtravesDoIndice(indice){
        if(indice < 0 || indice > this.tamanho){
            return undefined;
        }
        if(indice === 0){
            return this.removerInicio();
        }
        if(indice === this.tamanho -1){
            return this.removerFim();
        }

        let atual = this.inicio;
        let count = 0;

        while(count < indice){
            atual = atual.next;
            count++;
        }

        atual.prev.next = atual.next;
        atual.next.prev = atual.prev;

        this.tamanho--;

        return atual.value;
    }

    // size()
    // verifica o tamanho da lista
    verTamanho(){
        return this.tamanho;
    }

    // isEmpty()
    // verifica se a lista esta vazia
    estaVazia(){
        if(this.tamanho === 0){
            return true;
        } else {
            return false;
        }
    }










}

module.exports = ListaDinamicaEncadeada;