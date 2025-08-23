
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
        return `Bairro : ${this.#bairro}, Rua : ${this.#rua}, Numero : ${this.#numero}`
    }
}

module.exports = Endereco