const MinhaFila = require('./MinhaFila');
const fila = new MinhaFila();

fila.adicionar(5);
fila.adicionar(4);
fila.adicionar(3);
fila.adicionar(2);
fila.adicionar(1);

console.log(`O primeiro item da fila é ${fila.primeiro()}`);
console.log(`O item removido do inicio foi ${fila.remover()}`);
console.log(`O item removido do inicio foi ${fila.remover()}`);

fila.adicionar(40);

console.log(`O tamanho da fila é de ${fila.tamanho()}`);
console.log(`O primeiro item da fila é ${fila.primeiro()}`);
console.log(`A fila esta vazia ? ${fila.estaVazia()}`);
