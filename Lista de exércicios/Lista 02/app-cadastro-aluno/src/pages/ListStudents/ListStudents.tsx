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
import { StudentService } from "../../service/StudentService";

const studentService = new StudentService();
const ListStudents: React.FC = () => {
  const students = studentService.getStudents();

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
          {students.map((student, index) => (
            <IonCard color="light" key={index}>
              <IonCardHeader>
                <IonCardTitle>{student.nome}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>Sexo: {student.sexo}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Telefone: {student.telefone}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Matricula: {student.matricula}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    Bilingue: {student.bilingue ? "Sim" : "Não"}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Cursos:</IonLabel>
                  <IonLabel>{student.cursos.join(", ")}</IonLabel>
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
