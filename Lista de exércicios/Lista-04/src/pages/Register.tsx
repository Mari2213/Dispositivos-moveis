import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FormsProduct from "../components/FormsProduct";
import { addProduct } from "../services/productsServices";

const Register = () => {
  const handlerSubmit = async (product: any) => {
    try {
      const resp = await addProduct(product);
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

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
      <FormsProduct onSubmit={handlerSubmit} />
    </IonPage>
  );
};

export default Register;
