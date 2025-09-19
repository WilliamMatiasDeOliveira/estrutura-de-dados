
class Animal{
    constructor(nome){
        this.nome = nome
    }

    fazerSom(){
        console.log("o animal faz o som ....")
    }
}

class Cachorro extends Animal{
    fazerSom(){ // polimorfismo sobrescrevendo o metodo da classe pai
        console.log("Au, Au, Ao")
    }
}

class Gato extends Animal{
    fazerSom(){ // polimorfismo sobrescrevendo o metodo da classe pai
        console.log("Miau")
    }
}

const dog = new Cachorro()
const cat = new Gato()

dog.fazerSom()
cat.fazerSom()