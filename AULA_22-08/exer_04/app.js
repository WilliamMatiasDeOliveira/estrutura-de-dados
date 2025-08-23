
const ContaBancaria = require("./ContaBancaria")
const conta = new ContaBancaria();
const read = require("readline-sync")

let opcao

do{
    console.log("======  BEM VINDO AO AppBank  =====")
    console.log("1 - PARA DEPOSITAR")
    console.log("2 - PARA SACAR")
    console.log("3 PARA VER SALDO")
    console.log("0 PARA SAIR")
    opcao = parseInt(read.question(" : "))

    switch(opcao){
        case 1:
            let deposito = read.question("Qual o Valor a ser Depositado : ")
            conta.depositar(deposito)
            break
        case 2:
            let saque = read.question("Qual o Valor a ser Sacado : ")
            conta.sacar(saque)
            break
        case 3:
            conta.verSaldo()
            break
        case 0:
            console.log("Obrigado por usar nossos serviços")
            break
        default:
            console.log("Digite uma opcao valida")
    }

}while(opcao !== 0)