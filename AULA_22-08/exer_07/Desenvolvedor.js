
const Funcionario = require("./Funcionario")

class Desenvolvedor extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }

    calcularBonus(){
        return this.getSalario() * 0.15
    }
}

module.exports = Desenvolvedor