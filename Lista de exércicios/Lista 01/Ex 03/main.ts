import {Cliente} from "./cliente";
import {Produto} from "./produto";
import {Pedido} from "./pedido";

const prod1 : Produto = new Produto('Produto A', 2.30)
const prod2 : Produto = new Produto('Produto B', 5.60)
const prod3 : Produto = new Produto('Produto C', 3.00)
const prod4 : Produto = new Produto('Produto D', 2.50)

const cliente1 : Cliente = new Cliente('Maria', 'Rua X')

const pedido1 : Pedido = new Pedido(cliente1)

pedido1.addProduto(prod1, 3)
pedido1.addProduto(prod2, 4)

pedido1.finalizarPedido()
