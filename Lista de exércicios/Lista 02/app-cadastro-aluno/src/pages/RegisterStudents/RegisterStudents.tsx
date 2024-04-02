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
import { AlunoFormData } from "../../models/types";
import { StudentService } from "../../service/StudentService";

const studentService = new StudentService();

const RegisterStudents: React.FC = () => {
  const [aluno, setAluno] = useState<AlunoFormData>({
    nome: "",
    sexo: "",
    telefone: "",
    matricula: "",
    bilingue: false,
    cursos: [],
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (event.currentTarget.checkValidity()) {
      console.log("Form", aluno);
      studentService.addStudent(aluno);
      setAluno({
        nome: "",
        sexo: "",
        telefone: "",
        matricula: "",
        bilingue: false,
        cursos: [],
      });
    } else {
      console.log("Form inválido!!!");
    }
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
          <form onSubmit={submitForm}>
            <IonItem>
              <IonInput
                name="nome"
                type="text"
                label="Nome:"
                placeholder="Digite seu nome"
                value={aluno.nome}
                required={true}
                onIonChange={(e) =>
                  setAluno({ ...aluno, nome: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonSelect
                name="sexo"
                label="Sexo:"
                labelPlacement="fixed"
                placeholder="Selecione o sexo"
                aria-required={true}
                value={aluno.sexo}
                onIonChange={(e) =>
                  setAluno({ ...aluno, sexo: e.detail.value! })
                }
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
                required={true}
                onIonChange={(e) =>
                  setAluno({ ...aluno, telefone: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                name="matricula"
                type="text"
                label="Matrícula:"
                placeholder="Digite a sua matrícula"
                value={aluno.matricula}
                required={true}
                onIonChange={(e) =>
                  setAluno({ ...aluno, matricula: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle
                name="bilingue"
                checked={aluno.bilingue}
                onIonChange={(e) =>
                  setAluno({ ...aluno, bilingue: e.detail.checked })
                }
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
                  name="HTML"
                  justify="start"
                  alignment="center"
                  value={aluno.cursos.includes("html")}
                  onIonChange={(e) =>
                    setAluno({
                      ...aluno,
                      cursos: e.detail.checked
                        ? [...aluno.cursos, "html"]
                        : aluno.cursos.filter((c) => c !== "html"),
                    })
                  }
                >
                  HTML
                </IonCheckbox>
                <IonCheckbox
                  name="CSS"
                  justify="start"
                  alignment="center"
                  value={aluno.cursos.includes("css")}
                  onIonChange={(e) =>
                    setAluno({
                      ...aluno,
                      cursos: e.detail.checked
                        ? [...aluno.cursos, "css"]
                        : aluno.cursos.filter((c) => c !== "css"),
                    })
                  }
                >
                  CSS
                </IonCheckbox>
                <IonCheckbox
                  name="JavaScript"
                  justify="start"
                  alignment="center"
                  value={aluno.cursos.includes("javascript")}
                  onIonChange={(e) =>
                    setAluno({
                      ...aluno,
                      cursos: e.detail.checked
                        ? [...aluno.cursos, "javascript"]
                        : aluno.cursos.filter((c) => c !== "javascript"),
                    })
                  }
                >
                  JavaScript
                </IonCheckbox>
                <IonCheckbox
                  name="Java"
                  justify="start"
                  alignment="center"
                  value={aluno.cursos.includes("java")}
                  onIonChange={(e) =>
                    setAluno({
                      ...aluno,
                      cursos: e.detail.checked
                        ? [...aluno.cursos, "java"]
                        : aluno.cursos.filter((c) => c !== "java"),
                    })
                  }
                >
                  Java
                </IonCheckbox>
                <IonCheckbox
                  name="TypeScript"
                  justify="start"
                  alignment="center"
                  value={aluno.cursos.includes("typescript")}
                  onIonChange={(e) =>
                    setAluno({
                      ...aluno,
                      cursos: e.detail.checked
                        ? [...aluno.cursos, "typescript"]
                        : aluno.cursos.filter((c) => c !== "typescript"),
                    })
                  }
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
