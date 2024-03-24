import {
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

const RegisterStudents = () => {
  const [aluno, setAluno] = useState({
    nome: "",
    sexo: "",
    telefone: "",
    matricula: "",
    bilingue: false,
    cursos: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(aluno);
    setAluno({
      nome: "",
      sexo: "",
      telefone: "",
      matricula: "",
      bilingue: false,
      cursos: [],
    });
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
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonInput
                name="nome"
                type="text"
                label="Nome:"
                placeholder="Digite seu nome"
                value={aluno.nome}
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonSelect
                name="sexo"
                label="Sexo:"
                labelPlacement="fixed"
                placeholder="Selecione o sexo"
                value={aluno.sexo}
              >
                <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                <IonSelectOption value="Maculino">Maculino</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonInput
                name="telefone"
                type="tel"
                label="Telefone:"
                placeholder="Digite o seu telefone"
                value={aluno.telefone}
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                name="matricula"
                type="text"
                label="Matrícula:"
                placeholder="Digite a sua matrícula"
                value={aluno.matricula}
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle name="bilingue" checked={aluno.bilingue}>
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
                  name="HTML"
                  value={aluno.cursos}
                >
                  HTML
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  name="CSS"
                  value={aluno.cursos}
                >
                  CSS
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  name="JavaScript"
                  value={aluno.cursos}
                >
                  JavaScript
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  name="Java"
                  value={aluno.cursos}
                >
                  Java
                </IonCheckbox>
                <IonCheckbox
                  justify="start"
                  alignment="center"
                  name="TypeScript"
                  value={aluno.cursos}
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
