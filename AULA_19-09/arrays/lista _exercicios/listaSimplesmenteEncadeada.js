
class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = undefined
    }
}

class LinkedList {
    constructor() {
        this.inicio = undefined
        this.tamanho = 0
    }

    mostrar() {
        let atual = this.inicio

        while (atual) {
            console.log(atual.valor)
            atual = atual.proximo
        }
    }

    inserirInicio(valor) {
        const no = new Node(valor)

        no.proximo = this.inicio
        this.inicio = no
        this.tamanho++

    }

    inserirFim(valor) {
        const no = new Node(valor)
        let atual = this.inicio

        while (atual.proximo) {
            atual = atual.proximo
        }
        atual.proximo = no
        this.tamanho++
    }

    inserirPos(valor, pos) {
        if (pos < 0 || pos > this.tamanho) {
            console.log("Posição inválida !")
            return
        }

        const no = new Node(valor)
        let atual = this.inicio
        let anterior = undefined

        for (let i = 0; i < pos; i++) {
            anterior = atual
            atual = atual.proximo
        }

        no.proximo = atual
        anterior.proximo = no
        this.tamanho++

    }

    removerInicio() {
        if (this.tamanho === 0) {
            console.log("A lista esta vazia !")
            return
        }
        const item = this.inicio
        this.inicio = this.inicio.proximo
        console.log(`O item removido do inicio foi ${item.valor}`)
    }

    removerFim() {
        if (this.tamanho === 0) {
            console.log("A lista esta vazia !")
            return
        }
        let atual = this.inicio
        let anterior = undefined

        while (atual.proximo) {
            anterior = atual
            atual = atual.proximo
        }
        const item = atual
        anterior.proximo = undefined
        this.tamanho--
        console.log(`O item removido do fim foi ${item.valor}`)
    }

    removerPos(pos) {
        if(pos < 0 || pos > this.tamanho){
            console.log("Posição inválida !")
            return
        }
        if (this.tamanho === 0) {
            console.log("A lista esta vazia !")
            return
        }

        let atual = this.inicio
        let anterior = undefined

        for(let i = 0; i < pos; i++){
            anterior = atual
            atual = atual.proximo
        }
        
        const item = atual
        anterior.proximo = atual.proximo

        console.log(`O item removido da posição ${pos} foi o ${item.valor}`)

    }

}





const lista = new LinkedList()

lista.inserirInicio(1)
lista.inserirInicio(2)
lista.inserirInicio(3)
lista.inserirInicio(4)
lista.inserirInicio(5)

// lista.removerPos(2)

// lista.removerFim()

// lista.removerInicio()

// lista.inserirPos("will", 2)

// lista.inserirFim(30)

lista.mostrar()