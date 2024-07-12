import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center">
        <IonButton
          routerLink="/login"
          shape="round"
          expand="full"
          className="ion-padding"
        >
          Login
        </IonButton>
        <IonContent>
          <IonButton
            routerLink="/register"
            shape="round"
            expand="full"
            color="secondary"
            className="ion-padding"
          >
            Cadastro
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
