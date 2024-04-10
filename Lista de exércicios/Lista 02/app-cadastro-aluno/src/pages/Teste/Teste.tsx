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
import { AlunoFormData } from "../../models/types";
import { useState } from "react";
import { StudentService } from "../../service/StudentService";

const studentService = new StudentService();

const Teste: React.FC = () => {
  const [aluno, setAluno] = useState<AlunoFormData>({
    nome: "",
    sexo: "",
    telefone: "",
    matricula: "",
    bilingue: false,
    cursos: [],
  });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    studentService.addStudent(aluno);
  };

  const handleInputChange = (name: string, value: any) => {
    if (name === "cursos") {
      setAluno({ ...aluno, cursos: value });
    } else {
      setAluno({ ...aluno, [name]: value });
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
                required={true}
                value={aluno.nome}
                onIonChange={(e) => handleInputChange("nome", e.detail.value)}
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
                onIonChange={(e) => handleInputChange("sexo", e.detail.value)}
              >
                <IonSelectOption value="femenino">Femenino</IonSelectOption>
                <IonSelectOption value="masculino">Masculino</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonInput
                name="telefone"
                type="text"
                label="Telefone:"
                placeholder="Digite o seu telefone"
                required={true}
                value={aluno.telefone}
                onIonChange={(e) =>
                  handleInputChange("telefone", e.detail.value)
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                name="matricula"
                type="text"
                label="Matrícula:"
                placeholder="Digite a sua matrícula"
                required={true}
                value={aluno.matricula}
                onIonChange={(e) =>
                  handleInputChange("matricula", e.detail.value)
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle
                name="bilingue"
                checked={aluno.bilingue}
                onIonChange={(e) =>
                  handleInputChange("bilingue", e.detail.checked)
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
                  name="html"
                  value={aluno.cursos.includes("html")}
                  onIonChange={(e) =>
                    handleInputChange(
                      "cursos",
                      e.detail.checked
                        ? [...aluno.cursos, "html"]
                        : aluno.cursos.filter((curso) => curso !== "html"),
                    )
                  }
                >
                  HTML
                </IonCheckbox>
                <IonCheckbox
                  name="css"
                  value={aluno.cursos.includes("css")}
                  onIonChange={(e) =>
                    handleInputChange(
                      "cursos",
                      e.detail.checked
                        ? [...aluno.cursos, "css"]
                        : aluno.cursos.filter((curso) => curso !== "css"),
                    )
                  }
                >
                  CSS
                </IonCheckbox>
                <IonCheckbox
                  name="javascript"
                  value={aluno.cursos.includes("javascript")}
                  onIonChange={(e) =>
                    handleInputChange(
                      "cursos",
                      e.detail.checked
                        ? [...aluno.cursos, "javascript"]
                        : aluno.cursos.filter(
                            (curso) => curso !== "javascript",
                          ),
                    )
                  }
                >
                  JavaScript
                </IonCheckbox>
                <IonCheckbox
                  name="java"
                  value={aluno.cursos.includes("java")}
                  onIonChange={(e) =>
                    handleInputChange(
                      "cursos",
                      e.detail.checked
                        ? [...aluno.cursos, "java"]
                        : aluno.cursos.filter((curso) => curso !== "java"),
                    )
                  }
                >
                  Java
                </IonCheckbox>
                <IonCheckbox
                  name="typescript"
                  value={aluno.cursos.includes("typescript")}
                  onIonChange={(e) =>
                    handleInputChange(
                      "cursos",
                      e.detail.checked
                        ? [...aluno.cursos, "typescript"]
                        : aluno.cursos.filter(
                            (curso) => curso !== "typescript",
                          ),
                    )
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
              routerLink="/home"
            >
              Cadastrar
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Teste;
