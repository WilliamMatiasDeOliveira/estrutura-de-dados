const ListaSimplesEncadeada = require("./ListaSimplesEncadeada;");
const listaSimples = new ListaSimplesEncadeada();

listaSimples.adicionarInicio(5); // fim
listaSimples.adicionarInicio(4);
listaSimples.adicionarInicio(3);
listaSimples.adicionarInicio(2);
listaSimples.adicionarInicio(1); //inicio

listaSimples.verLista();

listaSimples.adicionarFim(30);

listaSimples.verLista();

console.log(`O item removido foi ${listaSimples.removerValor(3)}`);

listaSimples.verLista();

console.log(`valor encontrado ${listaSimples.buscarValor(4)}`);

console.log(`O tamanho da lista é ${listaSimples.verTamanho()}`);

console.log(`A lista esta vazia ? ${listaSimples.estaVazia()}`);