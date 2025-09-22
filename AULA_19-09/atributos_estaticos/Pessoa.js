
class Pessoa{
    static especie = "humano"

    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        console.log(`Olá meu nome é ${this.nome}`)
        console.log(`E sou da especie ${Pessoa.especie}`)
    }
}

const pessoa1 = new Pessoa("william")
pessoa1.apresentar()
console.log(Pessoa.especie)