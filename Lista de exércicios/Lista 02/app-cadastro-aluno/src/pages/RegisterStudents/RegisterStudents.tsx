import {
  InputChangeEventDetail,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

type Sex = "masculino" | "feminino" | "";
type Course = "html" | "css" | "javascript" | "java" | "typescript";
type Bilingue = boolean | any;

interface AlunoFormData {
  nome: string;
  sexo: Sex;
  telefone: string;
  matricula: string;
  bilingue: Bilingue;
  cursos: Course[];
}

const RegisterStudents: React.FC = () => {
  const [aluno, setAluno] = useState<AlunoFormData>({
    nome: "",
    sexo: "",
    telefone: "",
    matricula: "",
    bilingue: false,
    cursos: [],
  });

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form", aluno);
    setAluno({
      nome: "",
      sexo: "",
      telefone: "",
      matricula: "",
      bilingue: false,
      cursos: [],
    });
    //resetForm();
  };

  const handleInputChange = (
    e: React.InputHTMLAttributes<InputChangeEventDetail>,
    key: keyof AlunoFormData,
  ) => {
    // @ts-ignore
    const { value } = e.target;
    const updateAluno: AlunoFormData = {
      ...aluno,
      [key]: value,
    };
    setAluno(updateAluno);
  };

  const handleCheckboxChange = (course: Course) => {
    if (aluno.cursos.includes(course)) {
      setAluno({
        ...aluno,
        cursos: aluno.cursos.filter((c) => c !== course),
      });
    } else {
      setAluno({ ...aluno, cursos: [...aluno.cursos, course] });
    }
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLIonToggleElement>) => {
    setAluno({ ...aluno, bilingue: e.target.checked });
  };

  return (
    <>
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Cadasto de Alunos</IonTitle>
        </IonToolbar>
        <IonContent>
          <form onSubmit={handleSubmission} method="post">
            <IonItem>
              <IonInput
                name="nome"
                type="text"
                label="Nome:"
                placeholder="Digite seu nome"
                value={aluno.nome}
                onIonChange={(e) => handleInputChange(e, "nome")}
                required={true}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonSelect
                name="sexo"
                label="Sexo:"
                labelPlacement="fixed"
                placeholder="Selecione o sexo"
                value={aluno.sexo}
                onIonChange={(e) => handleInputChange(e, "sexo")}
              >
                <IonSelectOption value="femenino">Femenino</IonSelectOption>
                <IonSelectOption value="masculino">Masculino</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonInput
                name="telefone"
                type="tel"
                label="Telefone:"
                placeholder="Digite o seu telefone"
                value={aluno.telefone}
                onIonChange={(e) => handleInputChange(e, "telefone")}
                required={true}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                name="matricula"
                type="text"
                label="Matrícula:"
                placeholder="Digite a sua matrícula"
                value={aluno.matricula}
                onIonChange={(e) => handleInputChange(e, "matricula")}
                required={true}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle
                name="bilingue"
                checked={aluno.bilingue}
                onIonChange={() => handleToggleChange}
              >
                Aluno Bilingue?
              </IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-center">Cursos</IonLabel>
            </IonItem>
            <IonItem>
              <IonList>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  checked={aluno.cursos.includes("html")}
                  onIonChange={() => handleCheckboxChange("html")}
                >
                  HTML
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  checked={aluno.cursos.includes("css")}
                  onIonChange={() => handleCheckboxChange("css")}
                >
                  CSS
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  checked={aluno.cursos.includes("javascript")}
                  onIonChange={() => handleCheckboxChange("javascript")}
                >
                  JavaScript
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  checked={aluno.cursos.includes("java")}
                  onIonChange={() => handleCheckboxChange("java")}
                >
                  Java
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  checked={aluno.cursos.includes("typescript")}
                  onIonChange={() => handleCheckboxChange("typescript")}
                >
                  TypeScript
                </IonCheckbox>
              </IonList>
            </IonItem>
            <IonButton
              type="submit"
              className="ion-padding"
              expand="full"
              shape="round"
            >
              Cadastrar
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default RegisterStudents;
