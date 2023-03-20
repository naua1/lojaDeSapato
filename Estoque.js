import Pagamento from "./Pagamento.js"

const pagamento = new Pagamento();
export default class Estoque{


             //quantidade/cor do Sapato/Sapato/cliente
    estoque(quantidadeCompras, cor, Sapato, Cliente){  

        const cores = Sapato.cor.includes(cor);
        const numero = Sapato.tamanho.find( (valor) => valor == Cliente.tamanhoPe);
        const corSapato = Sapato.cor.find( (valor) => valor == cor);

        if(quantidadeCompras <= Sapato.quantidade && cores == true && numero == Cliente.tamanhoPe){
            console.log("temos esse modelo")
            return pagamento.pagamento(Cliente, Sapato,corSapato,numero);

        }  
            return "não temos mais esse modelo"

}
}
