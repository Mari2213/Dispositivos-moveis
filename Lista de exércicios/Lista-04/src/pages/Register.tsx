import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FormsProduct from "../components/FormsProduct";
import React from "react";

const Register = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Register Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <FormsProduct />
    </IonPage>
  );
};

export default Register;
