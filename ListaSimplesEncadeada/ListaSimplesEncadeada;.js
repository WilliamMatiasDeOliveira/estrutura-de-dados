const Node = require("./Node");

class ListaSimplesEncadeada {
    inicio = undefined;
    tamanho = 0;

    verLista() {
        if (this.inicio === undefined) {
            return;
        } else {
            let atual = this.inicio;

            console.log("///////////////////////////////");
            let list = "";
            while (atual) {
                // console.log(atual.value);
                list += atual.value + " -> ";
                console.log(list);
                atual = atual.next;
            }
            console.log("///////////////////////////////");
        }
    }

    adicionarInicio(value) {
        const node = new Node(value);

        if (this.inicio === undefined) {
            this.inicio = node;
        } else {

            node.next = this.inicio;
            this.inicio = node;

            this.tamanho++;
        }
    }

    adicionarFim(value) {

        const node = new Node(value);
        if (this.inicio === undefined) {
            this.inicio = node;
        } else {
            let atual = this.inicio;

            while (atual.next !== undefined) {
                atual = atual.next;
            }

            atual.next = node;
            this.tamanho++
        }

    }

    removerValor(value) {

        if (this.inicio.value === value) {
            this.inicio = this.inicio.next;
        } else {
            let atual = this.inicio;

            while (atual.next !== undefined && atual.next.value !== value) {
                atual = atual.next;
            }
            const item = atual.next.value;

            atual.next = atual.next.next;
            this.tamanho--;

            return item;
        }
    }

    buscarValor(value) {
        let atual = this.inicio;

        while(atual){
            console.log(atual.value);
            if(atual.value === value){
                return atual.value;
            }
            atual = atual.next;
        }

        return undefined;

    }

    verTamanho(){
        let count = 0;
        let atual = this.inicio;

        while(atual){
            count ++;
            atual = atual.next;
        }

        return count;
    }

    estaVazia(){
        if(this.inicio === undefined){
            return true;
        } else {
            return false;
        }
    }



}

module.exports = ListaSimplesEncadeada;