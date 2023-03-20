import Cliente from "./Cliente.js";
import Sapato from "./Sapato.js";
import Estoque from "./Estoque.js";


const estoque = new Estoque();

const novoCliente = new Cliente('Karine',120,38);

const nikeRevolution = new Sapato('Tênis Nike Revolution 6 Next Nature Masculino',[41,42,43],300,
['vermelho','branco','verde'],6)
const nikeAirF= new Sapato('Tênis Nike Air Force 1 Feminino',[38,39],40,['branco', 'preto'],1)
const sapatoMasculino = new Sapato('sapato Casula Masculino',[41,42,43],30,['cinza','preto','laranja'],2)
const sapatoFemino = new Sapato('sapato Casual Feminino',[37,38,40],30,['vermelho'],21)

                            //quantidade/cor do Sapato/Sapato/cliente
console.log(estoque.estoque(1,'branco',nikeAirF,novoCliente));



 



