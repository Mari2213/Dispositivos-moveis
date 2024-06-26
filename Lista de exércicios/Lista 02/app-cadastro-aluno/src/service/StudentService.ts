import { AlunoFormData } from "../models/types";

export class StudentService {
  private students: AlunoFormData[] = [];

  public addStudent(student: AlunoFormData): void {
    this.students.push(student);
    this.saveStudents();
    console.log("Add", this.students);
  }

  public updateStudent(index: number, updateStudent: AlunoFormData): void {
    this.students[index] = updateStudent;
    this.saveStudents();
  }

  public deleteStudent(index: number): void {
    this.students.splice(index, 1);
    this.saveStudents();
  }

  public getStudents(): AlunoFormData[] {
    this.loadStudents();
    return this.students;
  }

  public saveStudents(): void {
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  public loadStudents(): void {
    const studentsJson = localStorage.getItem("students");
    if (studentsJson) {
      this.students = JSON.parse(studentsJson);
    }
  }
}
