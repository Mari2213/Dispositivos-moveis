import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./style.css";
import React from "react";
import { StudentService } from "../../service/StudentService";
import { caretForwardOutline } from "ionicons/icons";

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
            <IonCard color="primary" key={index}>
              <IonCardHeader>
                <IonItem
                  color="primary"
                  button
                  detail={true}
                  detailIcon={caretForwardOutline}
                >
                  <IonCardTitle className="font-title">
                    {student.nome}
                  </IonCardTitle>
                </IonItem>
              </IonCardHeader>
              <IonCardContent className="font-card-content">
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
