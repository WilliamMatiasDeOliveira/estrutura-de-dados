
class Tarefas{
    #tarefas
    #tamanho

    constructor(){
        this.#tarefas = []
        this.#tamanho = 0
    }

    adicionar(tarefa){
        this.#tarefas[this.#tamanho] = tarefa
        this.#tamanho ++
    }

    remover(){
        const ultimaTarefa = this.#tarefas[this.#tamanho -1]
        delete this.#tarefas[this.#tamanho - 1]
        this.tamanho --
        return ultimaTarefa
    }

    getTarefas(){
        const listaTarefas = this.#tarefas
        return listaTarefas
    }
}

module.exports = Tarefas