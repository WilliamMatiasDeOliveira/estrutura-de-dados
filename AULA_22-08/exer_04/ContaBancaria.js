
class ContaBancaria {
    #saldo

    constructor(){
        this.#saldo = 0
    }

    formatarValor(valor){
        return "R$ " + Number(valor).toFixed(2).replace(".", ",")
    }

    depositar(valor) {
        console.log(`Saldo anterior ${this.formatarValor(this.#saldo)}`)
        this.#saldo += valor
        console.log(`Seu saldo atual é ${this.formatarValor(this.#saldo)}`)
    }

    sacar(valor) {
        console.log(`Saldo anterior ${this.formatarValor(this.#saldo)}`)
        this.#saldo -= valor
        console.log(`Seu saldo atual é ${this.formatarValor(this.#saldo)}`)
    }

    verSaldo() {
        console.log(`Seu saldo atual é ${this.formatarValor(this.#saldo)}`)
    }
}

module.exports = ContaBancaria