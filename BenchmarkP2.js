// =======================
// IMPORTAÇÃO DAS CLASSES
// =======================
const Grafo = require("./grafos/grafos1/Grafo");
const GrafoPonderado = require("./grafos/grafos2/GrafoPonderado");
const Buscas = require("./busca-e-ordenacao/Buscas");
const Sorter = require("./busca-e-ordenacao/Sorter");


// =======================
// FUNÇÃO PARA GERAR INTEIROS RANDOM
// =======================
function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// =======================
// TAMANHO DO TESTE
// =======================
const size = 50000;      // vertices e valores
const edges = 100000;    // arestas do grafo


console.log("============ BENCHMARK ============");
console.log(`Tamanho do teste: ${size}`);
console.log(`Arestas: ${edges}`);
console.log("===================================\n");


// =======================
// GRAFO SIMPLES
// =======================
const grafo = new Grafo();

console.time("timerGrafo_vertices");
for (let i = 0; i < size; i++) {
    grafo.adicionarVertice(i);
}
console.timeEnd("timerGrafo_vertices");


console.time("timerGrafo_arestas");
for (let i = 0; i < edges; i++) {
    const a = getRandomIntRange(0, size - 1);
    const b = getRandomIntRange(0, size - 1);
    grafo.adicionarAresta(a, b);
}
console.timeEnd("timerGrafo_arestas");



// =======================
// GRAFO PONDERADO
// =======================
const grafoP = new GrafoPonderado();

console.time("timerGrafoPonderado_vertices");
for (let i = 0; i < size; i++) {
    grafoP.adicionarVertice(i);
}
console.timeEnd("timerGrafoPonderado_vertices");


console.time("timerGrafoPonderado_arestas");
for (let i = 0; i < edges; i++) {
    const origem = getRandomIntRange(0, size - 1);
    const destino = getRandomIntRange(0, size - 1);
    const peso = getRandomIntRange(1, 100);
    grafoP.adicionarAresta(origem, destino, peso);
}
console.timeEnd("timerGrafoPonderado_arestas");



// =======================
// BUSCAS
// =======================
const array = Array.from({ length: size }, () => getRandomIntRange(0, size));
array.sort((a, b) => a - b);

const valor = array[getRandomIntRange(0, size - 1)];

console.time("timerBuscaSequencial");
Buscas.sequencial(array, valor);
console.timeEnd("timerBuscaSequencial");


console.time("timerBuscaBinaria");
Buscas.binaria(array, valor);
console.timeEnd("timerBuscaBinaria");


console.time("timerBuscaInterpolacao");
Buscas.interpolacao(array, valor);
console.timeEnd("timerBuscaInterpolacao");



// =======================
// ORDENAÇÕES
// =======================

const arr1 = Array.from({ length: size }, () => getRandomIntRange(0, size));
const arr2 = [...arr1];
const arr3 = [...arr1];


console.time("timerBubbleSort");
Sorter.bubbleSort(arr1);
console.timeEnd("timerBubbleSort");


console.time("timerQuickSort");
Sorter.quickSort(arr2);
console.timeEnd("timerQuickSort");


console.time("timerMergeSort");
Sorter.mergeSort(arr3);
console.timeEnd("timerMergeSort");



// =======================
// FIM
// =======================
console.log("\n============= FIM =============");
