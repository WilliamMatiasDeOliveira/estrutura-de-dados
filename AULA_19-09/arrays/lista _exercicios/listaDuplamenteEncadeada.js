class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = undefined
        this.anterior = undefined
    }
}

class DoubleLinkedList {
    constructor() {
        this.inicio = undefined
        this.fim = undefined
        this.tamanho = 0
    }

    inserirInicio(valor) {
        const no = new Node(valor)

        if (this.tamanho === 0) {
            this.inicio = no
            this.fim = no
        } else {
            no.proximo = this.inicio
            this.inicio.anterior = no
            this.inicio = no
        }

        this.tamanho++
    }

    inserirFim(valor) {

        if (this.tamanho === 0) {
            this.inserirInicio(valor)
            return
        } else {
            const no = new Node(valor)
            this.fim.proximo = no
            no.anterior = this.fim
            this.fim = no
        }

        this.tamanho++
    }

    inserirPos(valor, pos) {

        if (pos < 0 || pos > this.tamanho) {
            console.log("Posição invalida")
            return
        }
        if (pos === 0) {
            this.inserirInicio(valor)
            return
        }
        if (pos === this.tamanho) {
            this.inserirFim(valor)
            return
        }

        const no = new Node(valor)
        let atual = this.inicio

        for (let i = 0; i < pos; i++) {
            atual = atual.proximo
        }

        no.proximo = atual
        no.anterior = atual.anterior
        atual.anterior.proximo = no
        atual.anterior = no

        this.tamanho++
    }

    removerInicio() {
        if (this.tamanho === 0) {
            console.log("A lista esta vazia")
            return
        }

        const item = this.inicio.valor

        this.inicio = this.inicio.proximo

        if (this.inicio === undefined) {
            this.fim = undefined
        } else {
            this.inicio.anterior = undefined
        }

        this.tamanho--
        console.log(`O item removido do inicio foi ${item}`)
    }

    removerFim() {

        if (this.tamanho === 0) {
            console.log("A lista esta vazia")
            return
        }

        const item = this.fim.valor

        this.fim = this.fim.anterior

        if (this.fim === undefined) {
            this.inicio = undefined
        } else {
            this.fim.proximo = undefined
        }

        this.tamanho--
        console.log(`O item removido do fim foi ${item}`)

    }

    removerPos(pos) {
        if (pos < 0 || pos > this.tamanho - 1) {
            console.log("Posição invalida")
            return
        }
        if (pos === 0) {
            this.removerInicio()
            return
        }
        if (pos === this.tamanho - 1) {
            this.removerFim()
            return
        }

        let atual = this.inicio

        for (let i = 0; i < pos; i++) {
            atual = atual.proximo
        }

        const item = atual.valor
        atual.anterior.proximo = atual.proximo
        atual.proximo.anterior = atual.anterior

        this.tamanho--
        console.log(`O item removido da posição ${pos} foi o ${item}`)
    }

    buscar(valor) {
        let atual = this.inicio
        let pos = 0

        while (atual) {
            if (atual.valor === valor) {
                console.log(`O item buscado esta na posição ${pos}`)
                return
            }
            atual = atual.proximo
            pos++
        }

        return -1 // caso não encontrado
    }

    mostrarFrente() {
        let atual = this.inicio
        let res = ""

        while (atual) {
            res += atual.valor + " <-> "
            atual = atual.proximo
        }

        console.log(res + undefined)
    }

    mostrarTraz(){
        let atual = this.fim
        let res = ""

        while(atual){
            res += atual.valor + " <-> "
            atual = atual.anterior
        }
        console.log(res + undefined)
    }







}



const lista = new DoubleLinkedList()

lista.inserirInicio(5)
lista.inserirInicio(4)
lista.inserirInicio(3)
lista.inserirInicio(2)
lista.inserirInicio(1)

// lista.inserirFim(30)

// lista.inserirPos("will", 2)

// lista.removerInicio()

// lista.removerFim()

// lista.removerPos(2)

// lista.buscar(4)

lista.mostrarFrente()

lista.mostrarTraz()