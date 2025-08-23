
class Carro{
    
    modelo
    ano
    velocidade

    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0
    }

    acelerar(){
        this.velocidade += 10
        console.log(`Carro do modelo ${this.modelo}`)
        console.log(`Do ano ${this.ano}`)
        console.log(`Sua velocidade atual é ${this.velocidade} Km/h`)

    }

    freiar(){
        this.velocidade -= 5
        console.log(`Sua velocidade atual é ${this.velocidade} Km/h`)
    }
}

module.exports = Carro;