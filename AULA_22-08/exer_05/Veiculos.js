
class Carro{

    #marca
    #ano

    constructor(_marca, _ano){
        this.#marca = _marca
        this.#ano = _ano
    }

    andar(){
        console.log("estou andando ...")
    }

    freiar(){
        console.log ("estou freiando ...")
    }
}

class Moto{
    #modelo
    #ano

    constructor(_modelo, _ano){
        this.modelo = _modelo
    }

    enpinar(){
        console.log("estou enpinando")
    }

    cair(){
        console.log("eu cai kkkkk")
    }
}

module.exports = {Carro, Moto}