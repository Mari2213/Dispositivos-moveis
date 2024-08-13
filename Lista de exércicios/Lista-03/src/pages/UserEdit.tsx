import { useState } from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "../context/UserContext";
import { userSchema, User } from "../models/userSchema";
import { useParams } from "react-router";
import UserForm from "../components/UserForms";
import { useHistory } from "react-router-dom";

const UserEdit = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { getUser, editUser } = useUserContext();
  const user = getUser(Number(id));

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: user,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const onError = (errors: object) => {
    setShowToast(true);
    setToastMessage("Erro ao editar usuário");
    setToastColor("danger");
    console.error(errors);
  };

  const onSubmit = (data: User) => {
    setShowToast(true);
    setToastMessage("Usuário editado com sucesso");
    setToastColor("success");
    editUser(data, Number(id));
    history.push("/users");
  };

  const handleHobbiesItem = (item: string) => {
    const hobbies = getValues("hobbies");
    const newInteresses = hobbies.includes(item)
      ? hobbies.filter((hobbies) => hobbies !== item)
      : [...hobbies, item];
    setValue("hobbies", newInteresses);
  };

  if (!user) {
    return <h1>Usuário não encontrado</h1>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Usuário</IonTitle>
          <IonButtons slot={"start"}>
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
};

export default UserEdit;
