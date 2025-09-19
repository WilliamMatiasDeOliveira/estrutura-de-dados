
class Fila{

    #fila = []
    #inicio = 0
    #fim = 0

    mostrar(){
        for (let i = 0; i < this.#fila.length; i++) {
            console.log(this.#fila[i])
        }
    }

    entrar(elemento){
        this.#fila[this.#fim] = elemento
        this.#fim++
    }

    atender(){
        if(this.#inicio === this.#fim){
            return undefined
        }
        const cliente = this.#fila[this.#inicio]
        delete this.#fila[this.#inicio]
        this.#inicio++
        return cliente
    }

    inicio(){
        if(this.#inicio === this.#fim){
            return undefined
        }
        return this.#fila[this.#inicio]
    }

    tamanho(){
        if (this.#inicio === this.#fim){
            return undefined
        }
        return this.#fim - this.#inicio
    }
}

module.exports = Fila