import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const View = () => {
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
        <IonCard>
          <IonTitle>Nome do produto</IonTitle>
          <IonCardContent>
            <IonCardSubtitle>Descrição do produto</IonCardSubtitle>
            <IonCardSubtitle>Preço do produto</IonCardSubtitle>
            <IonCardSubtitle>Data de criação do produto</IonCardSubtitle>
            <IonCardSubtitle>Data de atualização do produto</IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default View;
