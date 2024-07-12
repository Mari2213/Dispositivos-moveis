export class Cliente {
    protected _nome : string
    protected _idade : number


    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }


    get nome(): string {
        return this._nome;
    }

    get idade(): number {
        return this._idade;
    }
}