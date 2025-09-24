// class Node{
//     constructor(valor){
//         this.valor = valor
//         this.proximo = null
//     }
// }

// class ListaEncadeada{
//     constructor(){
//         this.inicio = null
//         this.tamanho = 0
//     }

//     inserirInicio(valor){
//         const novoNo = new Node(valor)
//         novoNo.proximo = this.inicio
//         this.inicio = novoNo
//         this.tamanho ++
//     }
// }

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

    inserirInicio(valor){
        const novoNo = new Node(valor)
        novoNo.proximo = this.inicio
        this.inicio = novoNo
        this.tamanho ++
    }

    mostrar(){
        let atual = this.inicio
        while(atual){
            console.log(atual.valor)
            atual = atual.proximo
        }
    }
}

const lista = new LinkedList()


lista.inserirInicio(1)
lista.inserirInicio(2)
lista.inserirInicio(3)
lista.inserirInicio(4)
lista.inserirInicio(5)

lista.mostrar()












