
const Tarefas = require("./Tarefas")
const tarefas = new Tarefas()

tarefas.adicionar("estudar")
tarefas.adicionar("por em pratica")
tarefas.adicionar("treinar")
tarefas.adicionar("aprender mais")
tarefas.adicionar("evoluir")

console.table(tarefas.getTarefas())

console.log("Tarefa removida " + tarefas.remover())

console.table(tarefas.getTarefas())
