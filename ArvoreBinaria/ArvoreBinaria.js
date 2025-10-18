const Node = require("./Node.js");

class ArvoreBinaria {
    // constructor() {
    //     // atualmente a arvore esta vazia então a raiz é undefined
    //     this.root = undefined;
    // }

    root = undefined;

    // metodo para inserir um valor na arvore
    insert(value) {
        const newNode = new Node(value);
        if (this.root === undefined) {
            // se a arvore estiver vazia o nó se torna a raiz
            this.root = newNode;
        } else {
            // caso contrario insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    // metodo privado auxiliar para encontrar a posição correta para inserir o nó na arvore
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // se o valor do novo nó for menor que o valor do nó atual, va para subarvore esquerda
            if (node.left === undefined) {
                // se não houver nó a esquerda insere o nó aki
                node.left = newNode;
            } else {
                // caso contrario, chama o metodo recursivamente na subarvore esquerda
                this._insertNode(node.left, newNode);
            }

        } else {
            // se o valor do novo nó for maior ou igual ao valor do nó atual, va para subarvore direita
            if (node.right === undefined) {
                // se não houver nó a direita insere o novo nó aki
                node.right = newNode;
            } else {
                // caso contrario, chama o metodo recursivamente na subarvore direita
                this._insertNode(node.right, newNode);
            }
        }
    }

    // ************ ESTE METODO DEU ERRO **************************
    // Percursso em ordem: visita a subarvore esquerda, o nó atual e a subarvore direita
    inOrder(node = this.root) {
        if (node !== undefined) {
            this.inOrder(node.left);//visita a subarvore esquerda
            console.log(node.value);//visita o nó atual
            this.inOrder(node.right);//visita a subarvore direita
        }
    }
    // percurso pré-ordem visita o no atual a subarvore esquerda e a subarvore direita
    preOrder(node = this.root) {
        if (node !== undefined) {
            this.preOrder(node.left);//visita a subarvore esquerda
            this.preOrder(node.right);//visita a subarvore direita
            console.log(node.value);//visita o nó atual
        }
    }

    // percurso pós-ordem: visita a subarvore esquerda, a subarvore direita e o nó atual
    postOrder(node = this.root) {
        if (node !== undefined) {
            this.preOrder(node.left);//visita a subarvore esquerda
            this.preOrder(node.right);//visita a subarvore direita
            console.log(node.value);//visita o nó atual
        }
    }

    // metodo para buscar um valor na arvore
    search(value) {
        // inicia a busca a partir da raiz
        return this._searchNode(this.root, value);
    }

    // metodo privado auxiliar para realizar a busca recursivamente
    _searchNode(node, value) {
        if (node === undefined) {
            // se o no atual é undefined o valor não esta na arvore
            return false;
        }
        if (value === node.value) {
            // se o valor é encontrado retorna true
            return true;
        } else if (value < node.value) {
            // se o valor procurado é menor, continua a busca na subarvore esquerda
            return this._searchNode(node.left, value);
        } else {
            // se o valor procurado é maior, continua a busca na arvore direita
            return this._searchNode(node.right, value);
        }
    }

    // metodo para remover um nó com o valor especificado
    remove(value) {
        // inicia a remoção a partir da raiz
        this.root = this._removeNode(this.root, value);
    }

    // metodo auxiliar para remover o nó recursivamente
    _removeNode(node, value) {
        if (node === undefined) {
            return undefined;//se o nó é undefined não há nada para remover
        }

        if (value < node.value) {
            // se o valor há ser removido é menor, continua na subarvore esquerda
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            // se o valor a ser removido é maior, continua na subarvore direita
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // se o valor é igual ao nó atual, este é o nó a ser removido

            // caso 1: Nó sem filhos (Nó folha)
            if (node.left === undefined && node.right === undefined) {
                node = undefined;//remove o nó definindo ele como undefined
                return node;
            }

            // caso 2: Nó com um filho
            if (node.left === undefined) {
                node = node.right;
                return node;
            } else if (node.right === undefined) {
                node = node.left;
                return node;
            }

            // caso 3: Nó com dois filhos
            // encontra o nó com o menor valor na subarvore direita
            const aux = this.findMinNode(node.right);
            node.value = aux.value;//substitue o valor do nó atual pelo valor minimo encontrado
            node.right = this._removeNode(node.right, aux.value);
            return node;
        }
    }

    // metodo auxiliar para encontrar o no com menor valor
    _findMinNode(node){
        while(node.left !== undefined){
            // Continua indo para a esquerda até encontrar o menor valor
            node = node.left;
        }

        return node;
    }

}

module.exports = ArvoreBinaria;