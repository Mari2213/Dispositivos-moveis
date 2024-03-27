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
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    console.log(userName, password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Login</IonTitle>
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
        <IonButton
          type="submit"
          shape="round"
          expand="full"
          color="success"
          className="ion-margin-top"
          onClick={loginUser}
        >
          Entrar
        </IonButton>

        <p>
          Não tem conta? <Link to="/register">Registre-se</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
