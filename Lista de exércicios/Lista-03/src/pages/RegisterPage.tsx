import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import useForms from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Page Register</IonTitle>
      </IonToolbar>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonInput
              {...register("name")}
              type="text"
              label="Name:"
            ></IonInput>
          </IonItem>
          {errors.name && <p>{errors.name.message}</p>}
          <IonItem>
            <IonInput
              {...register("age")}
              type="number"
              label="Age:"
            ></IonInput>
          </IonItem>
          {errors.age && <p>{errors.age.message}</p>}
          <IonItem>
            <IonLabel>Genre</IonLabel>
            <IonRadioGroup value="start">
              <IonRadio justify="start">Female</IonRadio>
              <IonRadio justify="start">Male</IonRadio>
            </IonRadioGroup>
          </IonItem>
          <IonItem>
            <IonInput type="email" label="Email:"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="tel" label="Phone:"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" label="Andress:"></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect label="City">
              <IonSelectOption value="">São Paulo</IonSelectOption>
              <IonSelectOption value="">Rio de Janeiro</IonSelectOption>
              <IonSelectOption value="">Belo Horizonte</IonSelectOption>
              <IonSelectOption value="">Outra</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem className="">
            <IonLabel>Hobbies</IonLabel>
            <IonList>
              <IonCheckbox justify="start">Sports</IonCheckbox>
              <IonCheckbox justify="start">Music</IonCheckbox>
              <IonCheckbox justify="start">Reading</IonCheckbox>
              <IonCheckbox justify="start">Trips</IonCheckbox>
            </IonList>
          </IonItem>
          <IonItem>
            <IonToggle>
              Do you want to subscribe to the Newsletter subscription?
            </IonToggle>
          </IonItem>
          <IonButton color="secondary" expand="full" shape="round">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
