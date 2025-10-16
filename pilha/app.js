
const MinhaPilha = require("./minhaPilha");

const pilha = new MinhaPilha();

pilha.adicionar(1); // base
pilha.adicionar(2);
pilha.adicionar(3);
pilha.adicionar(4);
pilha.adicionar(5);
pilha.adicionar(6); // topo

console.log("O item removido da pilha foi " + pilha.remover());
console.log(`O topo da pilha é ${pilha.verTopo()}`);
console.log(`A pilha esta vazia ? ${pilha.estaVazia()}`);
console.log(`O tamanho da pilha é ${pilha.verTamanho()}`);

for(let i = 0; i < pilha.tamanho; i++){
    console.log(pilha.estrutura[i]);
}


console.log(`A pilha foi limpa esta com o valor de  ${pilha.limpar()}`);
console.log(`O seu tamanho agora é ${pilha.tamanho}`);
console.log(`A pilha esta vazia ? ${pilha.estaVazia()}`);