import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const EditProduct = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Edit Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className={"ion-padding"}>
          <IonInput type="text" label="Nome do produto:"></IonInput>
          <IonInput type="text" label="Descrição do produto:"></IonInput>
          <IonInput type="number" label="Preço do produto:"></IonInput>
          <IonLabel className="ion-color-danger"></IonLabel>
          <IonButton
            type={"submit"}
            color="success"
            expand="full"
            shape="round"
            className="ion-margin-top"
          >
            Salvar
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditProduct;
