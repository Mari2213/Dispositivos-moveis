import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import "./Home.css";
import { Link, Redirect, Route } from "react-router-dom";
import RegisterStudents from "../RegisterStudents/RegisterStudents";
import { IonReactRouter } from "@ionic/react-router";

setupIonicReact();
const Home = () => {
  return (
    <>
      <IonReactRouter>
        <IonRouterOutlet>
          <IonPage>
            <IonHeader className="ion-text-center">
              <IonToolbar>
                <IonTitle>Lista de Exercícios 2</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-text-center ion-padding-top">
              <Link to="/cadastro-alunos">
                <IonButton>Cadastro de Alunos</IonButton>
              </Link>
            </IonContent>
          </IonPage>

          {/*Rotas*/}
          <Route exact path="/cadastro-alunos">
            <RegisterStudents />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </>
  );
};

export default Home;
