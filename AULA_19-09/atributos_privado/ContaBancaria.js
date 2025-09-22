
class ContaBancaria{
    #saldo = 0

    depositar(valor){
        this.#saldo += valor
    }

    verSaldo(){
        return this.#saldo.toFixed(2)
    }

}

const conta = new ContaBancaria()

conta.depositar(1500)
console.log(conta.verSaldo())