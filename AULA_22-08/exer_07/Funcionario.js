
class Funcionario {

    #nome
    #salario

    constructor(nome, salario) {
        this.#nome = nome
        this.#salario = salario
    }

    getNome() {
        return this.#nome
    }

    getSalario(){
        return this.#salario
    }

    calcularBonus(){
        return this.#salario * 0.1
    }
}

module.exports = Funcionario