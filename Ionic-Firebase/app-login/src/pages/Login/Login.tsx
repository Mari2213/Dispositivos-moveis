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
import { loginUser } from "../../firebase";
import { toast } from "../../toast";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(userName, password);
    if (!res) {
      toast("Error logging with your credent", 2000);
    } else {
      toast("You have logged in!", 2000);
    }
  }

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
          onClick={login}
        >
          Entrar
        </IonButton>
        <div className="ion-margin-start">
          <p>
            Não tem conta? <Link to="/register">Registre-se</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
