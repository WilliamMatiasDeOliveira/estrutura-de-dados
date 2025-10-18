const ListaDinamicaEncadeada = require("./ListaEncadeadaDinamica");
const listaDinamica = new ListaDinamicaEncadeada();

listaDinamica.inserirFim(1);
listaDinamica.inserirFim(2);
listaDinamica.inserirFim(3);
listaDinamica.inserirFim(4);
listaDinamica.inserirFim(5);

listaDinamica.mostrarInicio();
listaDinamica.mostrarFim();

listaDinamica.inserirInicio(30);
listaDinamica.mostrarInicio();

listaDinamica.inserir_em(32, 3);
listaDinamica.mostrarInicio();

console.log(`O item removido do fim foi ${listaDinamica.removerFim()}`);
listaDinamica.mostrarInicio();

console.log(`O item removido do inicio foi ${listaDinamica.removerInicio()}`);
listaDinamica.mostrarInicio();

let indice = listaDinamica.buscarIndiceAtravesDeUmValor(32);
console.log(`O item buscado tem o indice ${indice}`);

let valor = listaDinamica.removerUmNoAtravesDoIndice(3);
console.log(`O valor removido foi ${valor}`);

console.log(`O tamanho da lista é ${listaDinamica.verTamanho()}`);

console.log(`A lista esta vazia ? ${listaDinamica.estaVazia()}`);

listaDinamica.mostrarInicio();
