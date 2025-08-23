
const Endereco = require("./Endereco")

class Cliente{

    #nome
    #email
    #endereco
    

    constructor(_nome, _email, _endereco){
        this.#nome = _nome
        this.#email = _email
        this.#endereco = _endereco
    }

    mostraDados(){
        console.log(this.#nome)
        console.log(this.#email)
        console.log(this.#endereco.mostraEndereco()) // metodo da classe Endereco
    }
}

module.exports = Cliente