class AVLTree{
    constructor(){
        this.root = undefined;
    }

    // função utilitaria para obter a altura de um nó
    getHeight(node){
        if(node){
            return node.height;
        } else {
            return 0;
        }
    }

    // calcula o fator de balanciamento de um nó
    getBalanceFactor(node){
        if(node){
            return this.getHeight(node.left) - this.getHeight(node.right);
        } else {
            return 0
        }
    }

    // Atualiza a altura de um nó
    updateHeight(node){
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.height));
    }

    // rotação simples a direita
    rotateRight(y){
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // rotação simples a esquerda
    rotateLeft(x){
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // inserção com balanciamento AVL
    insert(value){
        this.root = this._insert(this.root, value);
    }

    _insert(node, value){
        if(!node) return new AVLNode(value);

        if(value < node.value){
            node.left = this._insert(node.left, value);
        } else if(value > node.value){
            node.right = this._insert(node.right, value);
        } else {
            return node;//valor duplicado não é inserido
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // caso de desbalanceamento
        if(balance > 1 && value < node.left.value){
            return this.rotateRight(node);//Esquerda - Esquerda
        }

        // inserir um nó na arvore
        if(balance < -1 && value > node.right.value){
            return this.rotateLeft(node);//Direita - Direita
        }
        if(balance > 1 && value > node.left.value){
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);//Esquerda - Direita
        }
        if(balance < -1 && value < node.right.value){
            node.right = this.rotateRight(node.Right);
            return this.rotateLeft(node);//Direita-esquerda
        }

        return node;
    }

    // exibir percurso in-order (opcional)
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

}

module.exports = AVLTree;