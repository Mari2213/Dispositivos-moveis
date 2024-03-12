import { Filme } from './filme';
import { Cliente } from './cliente'
export class Locacao {
    protected filmesAlugados : Filme[] = []
    protected cliente : Cliente

    constructor(cliente : Cliente) {
        this.cliente = cliente
    }

    public alugarFilme(f : Filme) : void{
        this.filmesAlugados.push(f)
        console.log(`Filme alugado com sucesso: ${f.titulo}`)
    }

    public exibirFilmesAlg() : void{
        if (this.filmesAlugados.length === 0){
            console.log('Nenhum filme alugado!!')
        } else {
            console.log('----------- Filmes alugados -----------')
            this.filmesAlugados.forEach(filme => {
                console.log(`${filme.titulo}`)
            })
        }
    }
}