
class MinhaPilha{
    estrutura = [];
    tamanho = 0;

    // A pilha só aceita adição de itens no topo (FIM)
    adicionar(value){
        this.estrutura[this.tamanho] = value;
        this.tamanho ++;
    }

    // Os itens da pilha só podem ser removidos do topo (FIM) 
    remover(){
        if(this.tamanho === 0){
            return undefined;
        }
        const topo = this.estrutura[this.tamanho -1];
        delete this.estrutura[this.tamanho -1];
        this.tamanho --;
        return topo;
    }

    limpar(){
        if(this.tamanho === 0){
            return undefined;
        }

        this.estrutura = [];
        this.tamanho = 0;
    }

    verTopo(){
        if(this.tamanho === 0){
            return undefined;
        } else {
            const topo = this.estrutura[this.tamanho -1];
            return topo;
        }
    }

    estaVazia(){
        if(this.tamanho === 0){
            return true;
        } else {
            return false;
        }
    }

    verTamanho(){
        const tam = this.tamanho;
        return tam;
    }
}

module.exports = MinhaPilha;

