import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const ListStudents: React.FC = () => {
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
          <IonCard color="light">
            <IonCardHeader>
              <IonCardTitle>Nome do usuario</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel>Sexo</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Matrícula</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Telefone</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Bilíngue</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Cursos</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ListStudents;
