
const Endereco = require("./Endereco")

class Cliente extends Endereco{
    
    #nome
    #email

    constructor(_nome, _email, _bairro, _rua, _numero){
        super(_bairro, _rua, _numero)
        this.#nome = _nome
        this.#email = _email
    }

    mostraDados(){
        console.log(`Nome: ${this.#nome}`)
        console.log(`Email: ${this.#email}`)
        super.mostraEndereco()
    }
}

module.exports = Cliente