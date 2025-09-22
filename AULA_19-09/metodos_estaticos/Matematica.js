
class Matematica{

    static somar(a, b){
        return a + b
    }

    static subtrair(a, b){
        return a - b
    }

    static multiplicar(a, b){
        return a * b
    }

    static dividir(a, b){
        return a / b
    }
}

/**
 * METODOS ESTATICOS
 * Aqui os metodos são chamados diretamente
 * sem a necessidade de instanciar a classe
 */
console.log(Matematica.somar(2, 2))
console.log(Matematica.subtrair(2, 2))
console.log(Matematica.multiplicar(2, 2))
console.log(Matematica.dividir(2, 2))