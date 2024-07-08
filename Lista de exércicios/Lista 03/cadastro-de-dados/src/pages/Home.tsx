import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import ButtonFloating from "../components/ButtonFloating";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ButtonFloating
          slot={"fixed"}
          vertical={"bottom"}
          horizontal={"end"}
          color={"secondary"}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
