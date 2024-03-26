import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink="/login" shape="round" className="ion-padding">
          Login
        </IonButton>
        <IonButton
          routerLink="/register"
          shape="round"
          color="secondary"
          className="ion-padding"
        >
          Cadastro
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
