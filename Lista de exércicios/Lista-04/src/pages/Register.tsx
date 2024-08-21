import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FormsProduct from "../components/FormsProduct";
import { CreateProduct } from "../services/productsServices";
import { useHistory } from "react-router";

const Register = () => {
  const navigate = useHistory();
  const handlerSubmit = async (product: any) => {
    const addProduct = new CreateProduct();
    const result = await addProduct.createProduct(product);
    console.log(result);
    navigate.push("/");
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
