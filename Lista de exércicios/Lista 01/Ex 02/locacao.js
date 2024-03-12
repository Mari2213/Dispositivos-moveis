"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
var Locacao = /** @class */ (function () {
    function Locacao(cliente) {
        this.filmesAlugados = [];
        this.cliente = cliente;
    }
    Locacao.prototype.alugarFilme = function (f) {
        this.filmesAlugados.push(f);
        console.log("Filme alugado com sucesso: ".concat(f.titulo));
    };
    Locacao.prototype.exibirFilmesAlg = function () {
        if (this.filmesAlugados.length === 0) {
            console.log('Nenhum filme alugado!!');
        }
        else {
            console.log('----------- Filmes alugados -----------');
            this.filmesAlugados.forEach(function (filme) {
                console.log("".concat(filme.titulo));
            });
        }
    };
    return Locacao;
}());
exports.Locacao = Locacao;
