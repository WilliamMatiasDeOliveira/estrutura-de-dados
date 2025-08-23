
const read = require("readline-sync")
const ContaBancaria = require("./ContaBancaria")
const conta = new ContaBancaria()

let opcao
do{
    console.log("====== APP_BANK ======")
    console.log("1 - PARA DEPOSITAR")
    console.log("2 - PARA SACAR")
    console.log("3 - PARA VER SALDO")
    console.log("0 - PARA SAIR")
    opcao = parseInt(read.question(" : "))

    switch(opcao){
        case 1:
            let deposito = parseInt(read.question("Digite o valor para deposito : "))
            conta.depositar(deposito)
            conta.verSaldo()
            break
        case 2:
            let saque = parseInt(read.question("Quanto vc deseja sacar ? : "))
            conta.sacar(saque)
            conta.verSaldo()
            break
        case 3:
            conta.verSaldo()
            break
        case 0:
            console.log("Obrigado por usar nossos serviços !")
            break
        default:
            console.log("Digite uma opção valida")
    }


}while(opcao !== 0)