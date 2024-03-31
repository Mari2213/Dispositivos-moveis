import { AlunoFormData } from "../types";
import { createContext, ReactNode, useContext, useState } from "react";

interface StudentContextData {
  students: AlunoFormData[];
  addStudent: (student: AlunoFormData) => void;
}

const StudentContext = createContext<StudentContextData>({
  students: [],
  addStudent: () => {},
});

const useStudentsContext = () => useContext(StudentContext);

interface StudentProviderProps {
  children: ReactNode;
}

const StudentProvider = ({ children }: StudentProviderProps) => {
  const [students, setStudents] = useState<AlunoFormData[]>([]);

  const addStudent = (student: AlunoFormData) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentProvider, useStudentsContext };
