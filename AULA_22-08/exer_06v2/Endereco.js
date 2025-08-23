
class Endereco{

    #bairro
    #rua
    #numero

    constructor(_bairro, _rua, _numero){
        this.#bairro = _bairro
        this.#rua = _rua
        this.#numero = _numero
    }

    mostraEndereco(){
        console.log(`Bairro: ${this.#bairro}`)
        console.log(`Rua: ${this.#rua}`)
        console.log(`Numero: ${this.#numero}`)
    }
}

module.exports = Endereco