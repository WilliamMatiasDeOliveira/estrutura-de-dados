// ///////////////////////////////////////////////////
// EXEMPLO PILHAS E FILAS
// ///////////////////////////////////////////////////

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

function removerInicio() {
    if (tamanho === 0) {
        console.log(`A estrutura esta vazia`)
    }
    const item = estrutura[0]

    for (let i = 0; i < tamanho; i++) {
        estrutura[i] = estrutura[i + 1]
    }

    tamanho--
    console.log(`O item removido do inicio foi ${item}`)

}

function removerFim() {
    if (tamanho === 0) {
        console.log(`A estrutura esta vazia`)
    }
    const item = estrutura[tamanho - 1]
    delete estrutura[tamanho - 1]
    tamanho--
    console.log(`O item removido do fim foi ${item}`)

}

function inserirPos(valor, pos) {
    if(pos < 0 || pos > tamanho){
        console.log(`Posição invalida`)
    }

    for(let i = tamanho; i > pos; i--){
        estrutura[i] = estrutura[i -1]
    }
    estrutura[pos] = valor
    tamanho ++
}

function removerPos(pos){
    const item = estrutura[pos]

    for(let i = pos; i < tamanho -1; i++){
        estrutura[i] = estrutura[i +1]
    }
    tamanho --
    console.log(`O item removido da posição ${pos} foi ${item}`)
}







inserirInicio(1)
inserirInicio(2)
inserirInicio(3)
inserirInicio(4)
inserirInicio(5)

// removerPos(2)

// inserirPos("will", 2)

// inserirFim(30)

// removerFim()

// removerInicio()





for (let i = 0; i < tamanho; i++) {
    console.log(estrutura[i])
}