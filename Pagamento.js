



export default class Pagamento{

            
    pagamento(Cliente, Sapato,cor,numeroCliente){

        if(Cliente.dinheiro >= Sapato.preco){
        return console.log(`você acabou de comprar um ${Sapato.tipo} do tamanho ${numeroCliente} e da cor ${cor} por ${Sapato.preco}R$`);
        } return `você não tem o valor necessário para comprar o ${Sapato.tipo}, falta ${Cliente. dinheiro - Sapato.preco}R$`
    } 
    }



