
const Funcionario = require("./Funcionario")

class Gerente extends Funcionario{

    constructor(nome, salario){
        super(nome, salario)
    }

    /**
     * 
     * @override
     */
    calcularBonus(){
        return this.getSalario() * 0.2
    }
}

module.exports = Gerente