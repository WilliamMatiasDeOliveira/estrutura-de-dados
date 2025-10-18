const ArvoreBinaria = require("./ArvoreBinaria.js");
const tree = new ArvoreBinaria();

tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em ordem.");
tree.inOrder();

console.log("buscar valor: 18");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("remover valor 10");
tree.remove(10);
tree.inOrder();
