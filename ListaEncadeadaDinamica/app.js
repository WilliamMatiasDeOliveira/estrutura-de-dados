const ListaDinamicaEncadeada = require("./ListaEncadeadaDinamica");
const listaDinamica = new ListaDinamicaEncadeada();

listaDinamica.inserirFim(1);
listaDinamica.inserirFim(2);
listaDinamica.inserirFim(3);
listaDinamica.inserirFim(4);
listaDinamica.inserirFim(5);

listaDinamica.inserirInicio(30);

console.log(`O item removido do fim foi ${listaDinamica.removerFim()}`);
console.log(`O item removido do inicio foi ${listaDinamica.removerInicio()}`);

listaDinamica.mostrarInicio();
listaDinamica.mostrarFim();