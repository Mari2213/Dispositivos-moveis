import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

const Register: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const registerUser = () => {
    console.log(userName, password, cpassword);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonInput
            label="Usermane"
            placeholder="Digite o seu usuário"
            type="text"
            onIonChange={(e: any) => setUserName(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Password"
            placeholder="Digite sua senha"
            type="password"
            onIonChange={(e: any) => setPassword(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            onIonChange={(e: any) => setCPassword(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonButton
          type="submit"
          shape="round"
          expand="full"
          onClick={registerUser}
        >
          Entrar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
