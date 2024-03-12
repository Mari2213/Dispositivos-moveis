import { Filme } from './filme'
import { Cliente } from "./cliente";
import { Locacao } from './locacao'

const filme1 = new Filme("Filme A", "Ação", 123)
const filme2 = new Filme("Filme B", "Drama", 153)
const cliente1 = new Cliente("Cliente A", 24)

const locacao1 = new Locacao(cliente1)

locacao1.alugarFilme(filme1)
locacao1.alugarFilme(filme2)

locacao1.exibirFilmesAlg()