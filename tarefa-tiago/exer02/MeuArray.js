 class MeuArray{

    constructor(){
        this.item = []
    }

    adicionar(valor){
        this.item.push(valor)
    }

    remover(){
        this.item.pop()
    }

    tamanhoArray(){
        return this.item.length;
    }


 }

 module.exports = MeuArray;