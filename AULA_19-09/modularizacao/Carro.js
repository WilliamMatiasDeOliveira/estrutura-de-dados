
class Carro{

    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }

    acelerar(){
        console.log(`O ${this.modelo} do ano ${this.ano} esta acelerando ...`)
    }
}

// exportando a classe
module.exports = Carro