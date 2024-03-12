import {Produto} from "./produto";
import {Cliente} from "./cliente";

export class Pedido {
    produtos: { produto: Produto, quantidade: number }[] = []
    cliente: Cliente


    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    addProduto(produto: Produto, quantidade: number): void {
        this.produtos.push({produto, quantidade})
        console.log(`Produto adicionado!!`)
    }

    calcTotal(): number {
        return this.produtos.reduce((total, item) => {
            return total + item.produto.preco * item.quantidade
        }, 0)
    }

    finalizarPedido(): void {
        console.log('Resumo do pedido:')
        console.log(`Cliente: ${this.cliente.nome}`)
        console.log(`Endereço de entrega: ${this.cliente.endereco}`)
        console.log('Produtos: ')

        this.produtos.forEach(item => {
            console.log(`${item.produto.nome} - Quantidade: ${item.quantidade} - Valor Unitário: $${item.produto.preco} - Valor Total: $${(item.produto.preco) * item.quantidade} `)
        })
        console.log(`Total do pedido: $${this.calcTotal().toFixed(2)}`)
    }
}