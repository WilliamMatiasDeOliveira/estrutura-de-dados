const Node = require("./Node");

class ListaDinamicaEncadeada {
    inicio = undefined;
    fim = undefined;
    tamanho = 0

    mostrarInicio(){
        if(this.inicio === undefined){
            return;
        } else {
            let atual = this.inicio;
            let list = "";

            while(atual){
                list += atual.value + " -> ";
                console.log(list);
                atual = atual.next;
            }
        }
    }

    mostrarFim(){
        if(this.inicio === undefined){
            return "A lista esta vazia";
        }

        let atual = this.fim;

        let list = "";

        while(atual){
            list += atual.value + " -> ";
            console.log(list);
            atual = atual.prev;
        }


    }

    inserirFim(value){
        const node = new Node(value);

        if(this.inicio === undefined){
            this.inicio = node;
            this.fim = node;
        } else {
           this.fim.next = node;
           node.prev = this.fim;
           this.fim = node;
        }

        this.tamanho ++;
    }

    inserirInicio(value){
        if(this.inicio === undefined){
            this.inicio = node;
            this.fim = node;
        } else {
            const node = new Node(value);
            node.next = this.inicio;
            this.inicio.prev = node;
            this.inicio = node;
        }

        this.tamanho ++;
    }

    removerFim(){
        if(this.fim === undefined){
            return undefined;
        } else {
            const nodeDelete = this.fim.value;

            if(this.fim === this.inicio){
                this.inicio = undefined;
                this.fim = undefined
            } else {
                this.fim = this.fim.prev;
                this.fim.next = undefined;
            }

            this.tamanho --;
            return nodeDelete;
        }
    }

    removerInicio(){
        if(this.inicio === undefined){
            return undefined;
        } else {
            const nodeDelete = this.inicio.value;

            if(this.inicio === this.fim){
                this.inicio = undefined;
                this.fim = undefined;
            } else {
                this.inicio = this.inicio.next;
                this.inicio.prev = undefined;
            }

            this.tamanho --;

            return nodeDelete;
        }
    }

    // inserir um no em uma posição especifica
    // encontrar o indice de um valor especifico
    // remover um no em uma posição especifica
    // verifica o tamanho da lista
    // verifica se a lista esta vazia






}

module.exports = ListaDinamicaEncadeada;