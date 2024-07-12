var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPubli) {
        this._titulo = titulo;
        this._autor = autor;
        this._anoPubli = anoPubli;
    }
    Object.defineProperty(Livro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "anoPubli", {
        get: function () {
            return this._anoPubli;
        },
        enumerable: false,
        configurable: true
    });
    return Livro;
}());
var User = /** @class */ (function () {
    function User(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(User.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [];
        this.users = [];
    }
    Biblioteca.prototype.addLivro = function (l) {
        this.acervo.push(l);
    };
    Biblioteca.prototype.addUser = function (u) {
        this.users.push(u);
    };
    Biblioteca.prototype.emprestarLivro = function (l, u) {
        if ((this.acervo.some(function (liv) { return liv === l; })) && (this.users.some(function (user) { return user === u; })))
            console.log("Empréstimo realizado com sucesso!");
        else
            console.log("Livro e/ou user não encontrados");
    };
    return Biblioteca;
}());
var livro1 = new Livro("Livro A", "Autor A", 1998);
var user1 = new User("Marianna", 25);
var user2 = new User("Marianna", 25);
var bibl1 = new Biblioteca();
bibl1.addLivro(livro1);
bibl1.addUser(user1);
bibl1.emprestarLivro(livro1, user1);
