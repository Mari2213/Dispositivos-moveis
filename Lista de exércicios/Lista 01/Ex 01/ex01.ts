class Livro {
    private _titulo : string
    private _autor : string
    private _anoPubli : number

    constructor(titulo : string, autor : string, anoPubli : number) {
        this._titulo = titulo
        this._autor = autor
        this._anoPubli = anoPubli
    }

    get titulo(): string {
        return this._titulo;
    }

    get autor(): string {
        return this._autor;
    }

    get anoPubli(): number {
        return this._anoPubli;
    }
}

class User {
    private _nome : string
    private _idade : number

    constructor(nome : string, idade : number) {
        this._nome = nome
        this._idade = idade
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): number {
        return this._idade;
    }
}

class Biblioteca {
    acervo : Livro[]
    users : User[]

    constructor() {
        this.acervo = []
        this.users = []
    }

    public addLivro(l : Livro){
        this.acervo.push(l)
    }

    public addUser(u : User){
        this.users.push(u)
    }

    public emprestarLivro(l : Livro , u : User){
        if ( (this.acervo.some(liv => liv === l)) && (this.users.some(user => user === u)) )
            console.log("Empréstimo realizado com sucesso!")
        else
            console.log("Livro e/ou user não encontrados")
    }

}

let livro1 = new Livro("Livro A", "Autor A", 1998)
let user1 = new User("Marianna", 25)
let user2 = new User("Marianna", 25)
let bibl1 = new Biblioteca()

bibl1.addLivro(livro1)
bibl1.addUser(user1)
bibl1.emprestarLivro(livro1, user1)