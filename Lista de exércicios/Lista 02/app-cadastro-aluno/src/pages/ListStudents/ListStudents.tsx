import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useStudentsContext } from "../../service/StudentContext";

const ListStudents: React.FC = () => {
  const { students } = useStudentsContext();
  return (
    <>
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Listar dados do Alunos</IonTitle>
        </IonToolbar>
        <IonContent>
          {students.map((student) => (
            <IonCard color="light" key={student.matricula}>
              <IonCardHeader>
                <IonCardTitle>{student.nome}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>{student.sexo}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>{student.matricula}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>{student.telefone}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>{student.bilingue ? "Sim" : "Não"}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Cursos</IonLabel>
                  <IonLabel>
                    {student.cursos.map((course, index) => (
                      <span key={index}>
                        {course}
                        {index !== student.cursos.length - 1 && ", "}
                      </span>
                    ))}
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListStudents;
