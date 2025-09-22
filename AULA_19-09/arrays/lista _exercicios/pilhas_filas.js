const estrutura = []
let tamanho = 0

function inserirInicio(valor) {
    for (let i = tamanho; i > 0; i--) {
        estrutura[i] = estrutura[i - 1]
    }
    estrutura[0] = valor
    tamanho++
}

function inserirFim(valor) {
    estrutura[tamanho] = valor
    tamanho++
}

function deleteInicio() {
    if (tamanho === 0) {
        console.log("A estrutura esta vazia")
    } else {
        const item = estrutura[0]

        for (let i = 0; i < tamanho; i++) {
            estrutura[i] = estrutura[i + 1]
        }

        tamanho--
        console.log(`O item removido do inicio foi ${item}`)
    }
}

function deleteFim() {
    if (tamanho === 0) {
        console.log('A estrutura esta vazia')
    } else {
        const item = estrutura[tamanho - 1]
        delete estrutura[tamanho - 1]
        tamanho--
        console.log(`O item removido do fim foi ${item}`)
    }
}

function insertPos(pos, valor) {
    if (pos < 0 || pos > tamanho) {
        console.log("Posição inválida")
    } else {

        for (let i = tamanho; i > pos; i--) {
            estrutura[i] = estrutura[i - 1]
        }
        estrutura[pos] = valor
        tamanho++
    }
}

function deletePos(pos) {
    if (pos < 0 || pos > tamanho) {
        console.log("Posição inválida")
    } else {
        const item = estrutura[pos]

        for (let i = pos; i < tamanho - 1; i++) {
            estrutura[i] = estrutura[i + 1]
        }
        tamanho--
        console.log(`O item emovido da posição ${pos} foi ${item}`)
    }
}






inserirInicio(1)
inserirInicio(2)
inserirInicio(3)
inserirInicio(4)
inserirInicio(5)

inserirFim(30)

deleteInicio()

insertPos(2, "will")

deleteFim()

deletePos(3)



for (let i = 0; i < tamanho; i++) {
    console.log(estrutura[i])
}