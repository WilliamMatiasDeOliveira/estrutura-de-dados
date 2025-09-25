class Node{
    constructor(valor){
        this.valor = valor
        this.proximo = undefined
    }
}

class LinkedList{
    constructor(){
        this.inicio = undefined
        this.tamanho = 0
    }

    mostrar(){
        let atual = this.inicio

        while(atual){
            console.log(atual)
            atual = atual.proximo
        }
    }

    inserirInicio(valor){
        const novoNo = new Node(valor)
        novoNo.proximo = this.inicio
        this.inicio = novoNo
        this.tamanho ++
    }

    inserirFim(valor){
        const novoNo = new Node(valor)

        if(this.inicio === undefined){
            this.inicio = novoNo
        } else {
            let atual = this.inicio

            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
        this.tamanho ++
    }

    inserirPos(valor, pos){
        if(pos < 0 || pos > this.tamanho){
            console.log("Posição invalida")
            return
        } else {
            if(this.tamanho === 0){
                this.inserirInicio(valor)
                return
            }
           
            const novoNo = new Node(valor)
            let atual = this.inicio
            let anterior

            for(let i = 0; i < pos; i++){
                anterior = atual
                atual = atual.proximo
            }

            novoNo.proximo = atual
            anterior.proximo = novoNo
            this.tamanho ++
        }
    }

}

const lista = new LinkedList()

lista.inserirInicio(1)
lista.inserirInicio(2)
lista.inserirInicio(3)
lista.inserirInicio(4)
lista.inserirInicio(5)

lista.inserirFim(30)

lista.inserirPos("will", 2)

lista.mostrar()