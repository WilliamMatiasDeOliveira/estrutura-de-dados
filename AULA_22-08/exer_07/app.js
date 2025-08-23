
const Gerente = require("./Gerente")
const Desenvolvedor = require("./Desenvolvedor")

const gerente = new Gerente("pedro", parseFloat(15500))
const dev = new Desenvolvedor("william", parseFloat(8000))

console.log(`O gerente ${gerente.getNome()}`)
console.log(`Com o salario de ${formatarMoeda(gerente.getSalario())}`)
console.log(`Recebeu um bonus de ${formatarMoeda(gerente.calcularBonus())}`)

console.log(`O dev ${dev.getNome()}`)
console.log(`Com o salario de ${formatarMoeda(dev.getSalario())}`)
console.log(`Recebeu um bonus de ${formatarMoeda(dev.calcularBonus())}`)


function formatarMoeda(valor){
    return "R$" + valor
            .toFixed(2)
            .replace(".", ",")
}