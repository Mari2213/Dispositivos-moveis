import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import "./Home.css";

setupIonicReact();
const Home = () => {
  return (
    <>
      <IonPage>
        <IonHeader className="ion-text-center">
          <IonToolbar>
            <IonTitle>Lista de Exercícios 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-text-center ion-padding-top">
          <IonButton routerLink="/cadastrar-alunos" shape="round" expand="full">
            Cadastro de Alunos
          </IonButton>
          <IonContent>
            <IonButton routerLink="/listar-dados" shape="round" expand="full">
              Listar dados
            </IonButton>
          </IonContent>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
