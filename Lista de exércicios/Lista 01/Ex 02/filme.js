"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, genero, duracao) {
        this._titulo = titulo;
        this._genero = genero;
        this._duracao = duracao;
    }
    Object.defineProperty(Filme.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "duracao", {
        get: function () {
            return this._duracao;
        },
        enumerable: false,
        configurable: true
    });
    return Filme;
}());
exports.Filme = Filme;
