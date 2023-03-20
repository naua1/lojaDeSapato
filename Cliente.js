export default  class Cliente{

    #nome;
    #dinheiro;
    #tamanhoPe;

    constructor(nome,dinheiro,tamanhoPe){
        this.#nome = nome; 
        this.#dinheiro = dinheiro; 
        this.#tamanhoPe= tamanhoPe; 
    }
    get nome(){
        return this.#nome;
    }
    get dinheiro(){
        return this.#dinheiro;
    }
    get tamanhoPe(){
        return this.#tamanhoPe;
    }
    set tamanhoPe(numero){
        this.#tamanhoPe = numero;
    }
}

