export class Cliente {
    private _nome : string
    private _endereco : string


    constructor(nome: string, endereco: string) {
        this._nome = nome;
        this._endereco = endereco;
    }


    get nome(): string {
        return this._nome;
    }

    get endereco(): string {
        return this._endereco;
    }
}