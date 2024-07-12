export class Filme{
    protected _titulo : string
    protected _genero : string
    protected _duracao : number

    constructor(titulo : string, genero : string, duracao : number) {
        this._titulo = titulo
        this._genero = genero
        this._duracao = duracao
    }

    get titulo(): string {
        return this._titulo;
    }

    get genero(): string {
        return this._genero;
    }

    get duracao(): number {
        return this._duracao;
    }
}