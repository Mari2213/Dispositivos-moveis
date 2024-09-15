import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { logIn, logoGoogle, logOut } from "ionicons/icons";

const Login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={"ion-padding ion-text-center"}>
        <form action="">
          <IonInput type={"email"} label={"Email:"}></IonInput>
          <IonInput type={"password"} label={"Password:"}></IonInput>
          <IonButton shape={"round"} expand={"full"} color={"success"}>
            <IonIcon slot={"start"} icon={logIn}></IonIcon>
            Entrar
          </IonButton>
        </form>
        <IonLabel>ou</IonLabel>
        <IonButton shape={"round"} expand={"full"} color={"danger"}>
          <IonIcon slot={"start"} icon={logoGoogle}></IonIcon>
          Google
        </IonButton>
        <IonLabel>
          Nao tem conta ainda? <a href="/user-register">Cadastrar</a>
        </IonLabel>
      </IonContent>
      <IonContent className={"ion-padding"}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTitle>Informacoes da conta</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Usuario: Ze</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape={"round"} color={"secondary"}>
                Sair <IonIcon slot={"end"} icon={logOut}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
