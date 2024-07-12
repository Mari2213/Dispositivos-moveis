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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "../../toast";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userName, password);
    if (userName === "admin" && password === "admin") {
      console.log("Login efetuado com sucesso");
      toast("Login efetuado com sucesso");
      navigate("/home", { replace: true });
    } else {
      console.log("Usuário ou senha incorretos");
      toast("Usuário ou senha incorretos");
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
        <form onSubmit={login}>
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
          >
            Entrar
          </IonButton>
          <div className="ion-margin-start">
            <p>
              Não tem conta? <Link to="/register">Registre-se</Link>
            </p>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
