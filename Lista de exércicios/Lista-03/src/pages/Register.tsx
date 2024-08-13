import React, { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "../context/UserContext";
import { userSchema, User } from "../models/userSchema";
import UserForm from "../components/UserForms";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const { addUser, getUsers } = useUserContext();
  const {
    reset,
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      id: getUsers().length + 1,
      cidade: "",
      genero: "",
      hobbies: [],
      alertas: false,
    },
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const onError = (errors: FieldErrors<User>) => {
    setShowToast(true);
    setToastMessage("Erro ao salvar usuário");
    setToastColor("danger");
    console.error(errors);
  };

  const onSubmit = (data: User) => {
    addUser(data);
    setShowToast(true);
    setToastMessage("Usuário salvo com sucesso");
    setToastColor("success");
    reset();
    history.push("/users");
  };

  const handleHobbiesItem = (item: string) => {
    const hobbies = getValues("hobbies");
    const newInteresses = hobbies.includes(item)
      ? hobbies.filter((hobbies) => hobbies !== item)
      : [...hobbies, item];
    setValue("hobbies", newInteresses);
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Cadastrar</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text={"Voltar"} defaultHref={"/users"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={"ion-padding"}>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
          color={toastColor}
        ></IonToast>
        <UserForm
          {...{
            register,
            errors,
            setValue,
            getValues,
            handleSubmit,
            onSubmit,
            onError,
            handleHobbiesItem,
          }}
        />
      </IonContent>
    </IonPage>
  );
}

export default Register;
