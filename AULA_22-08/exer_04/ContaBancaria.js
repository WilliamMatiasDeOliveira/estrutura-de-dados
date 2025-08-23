
class ContaBancaria{

    #saldo

    constructor(){
        this.#saldo = 0
    }

    depositar(valor){
        console.log(`Saldo anterior ${this.#saldo}`)
        this.#saldo += valor
        console.log(`Saldo atual ${this.#saldo}`)
    }

    sacar(valor){
        console.log(`Saldo anterior ${this.#saldo}`)
        this.#saldo -= valor
        console.log(`Saldo atual ${this.#saldo}`)
    }

    verSaldo(){
        console.log(`Seu saldo é de ${this.#saldo}`)
    }
}

module.exports = ContaBancaria