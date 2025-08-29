
class Rh{
    #funcionarios
    #tamanho

    constructor(){
        this.#funcionarios = []
        this.#tamanho = 0
    }

    adicionar(funcionario){
        this.#funcionarios[this.#tamanho] = funcionario
        this.#tamanho ++
    }

    getFuncionario(indice){
        if(indice < 0 || indice >= this.#tamanho -1){
            console.log("O indice informado não é valido")
        }else{
            return this.#funcionarios[indice]
        }

    }

    showFuncionarios(){
        const funcionarios = this.#funcionarios
        return funcionarios
    }

    limpar(){
        this.#funcionarios = []
        this.#tamanho = 0
    }
}

module.exports = Rh