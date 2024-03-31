export type Sex = "masculino" | "feminino" | "";
export type Course = "html" | "css" | "javascript" | "java" | "typescript";
export type Bilingue = boolean | any;

export interface AlunoFormData {
  nome: string;
  sexo: Sex;
  telefone: string;
  matricula: string;
  bilingue: Bilingue;
  cursos: Course[];
}
