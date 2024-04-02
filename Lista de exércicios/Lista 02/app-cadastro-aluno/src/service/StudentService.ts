import { AlunoFormData } from "../types";

export class StudentService {
  private students: AlunoFormData[] = [];

  public addStudent(student: AlunoFormData): void {
    this.students.push(student);
    console.log("Add");
  }

  public getStudents(): AlunoFormData[] {
    return this.students;
  }
}
