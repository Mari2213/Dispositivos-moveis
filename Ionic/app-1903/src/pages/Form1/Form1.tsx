import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import React from "react";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm();

  const [formDataArray, setFormDataArray] = React.useState([]);

  const Submit = (data: never) => {
    setFormDataArray([...formDataArray, data]);
    reset();
    console.log(data);
  };
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Form1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(Submit)}>
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput
              type="text"
              {...register("nome", { required: true })}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              {...register("email", { required: true })}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Telefone</IonLabel>
            <IonInput
              type="tel"
              {...register("telefone", { required: true })}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mensagem</IonLabel>
            <IonTextarea
              {...register("mensagem", { required: true })}
            ></IonTextarea>
          </IonItem>
          <IonButton type="submit" expand="block" disabled={!isValid}>
            Enviar
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Form1;
