export default class Sapato{
    #tipo;
    #quantidade;
    #tamanho = [];
    #preco;
    #cor = [];
    

    constructor(tipo,tamanho = [],preco,cor = [],quantidade){
     
        this.#quantidade = quantidade;
        this.#tipo = tipo; 
        this.#tamanho = tamanho 
        this.#preco=preco;
        this.#cor = cor; 
        
    }
    get quantidade(){
        return this.#quantidade;
    }
    get tamanho(){
        return this.#tamanho;
    }
    get tipo(){
        return this.#tipo;
    }
    get preco(){
        return this.#preco;
    }
get cor(){
    return this.#cor;
}
}