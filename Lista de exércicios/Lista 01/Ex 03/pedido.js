"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente) {
        this.produtos = [];
        this.cliente = cliente;
    }
    Pedido.prototype.addProduto = function (produto, quantidade) {
        this.produtos.push({ produto: produto, quantidade: quantidade });
        console.log("Produto adicionado!!");
    };
    Pedido.prototype.calcTotal = function () {
        return this.produtos.reduce(function (total, item) {
            return total + item.produto.preco * item.quantidade;
        }, 0);
    };
    Pedido.prototype.finalizarPedido = function () {
        console.log('Resumo do pedido:');
        console.log("Cliente: ".concat(this.cliente.nome));
        console.log("Endere\u00E7o de entrega: ".concat(this.cliente.endereco));
        console.log('Produtos: ');
        this.produtos.forEach(function (item) {
            console.log("".concat(item.produto.nome, " - Quantidade: ").concat(item.quantidade, " - Valor Unit\u00E1rio: $").concat(item.produto.preco, " - Valor Total: $").concat(item.produto.preco * item.quantidade, " "));
        });
        console.log("Total do pedido: $".concat(this.calcTotal().toFixed(2)));
    };
    return Pedido;
}());
exports.Pedido = Pedido;
