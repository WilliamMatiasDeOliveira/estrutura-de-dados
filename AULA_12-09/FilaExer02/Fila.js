class Fila{
    #fila = []
    #inicio = 0
    #fim = 0
    #tamanhoFila = 0
    #doc = []

    adicionar(nome, tamanho){
        if(this.#tamanhoFila < 5){
            this.#fila[this.#fim] = {nome , tamanho}
            this.#fim++
            this.#tamanhoFila++
        } else {
            console.log("A fila esta cheia")
            return
        }
    }

    mostrar(){
        for (let i = 0; i < this.#fila.length; i++) {
           console.log(this.#fila[i].nome)
           console.log(this.#fila[i].tamanho)
        }
    }
}

module.exports = Fila