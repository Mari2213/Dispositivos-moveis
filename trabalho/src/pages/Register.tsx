import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useHistory } from "react-router";
import { CreateProduct } from "../services/productsServices";

interface Product {
  name: string;
  quantity: number;
  price: number;
}
const Register = () => {
  const nameRef = useRef<HTMLIonInputElement | null>(null);
  const quantityRef = useRef<HTMLIonInputElement | null>(null);
  const priceRef = useRef<HTMLIonInputElement | null>(null);
  const navigate = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product: Product = {
      name: (nameRef.current?.value as string) || "",
      quantity: parseInt((quantityRef.current?.value as string) || "0"),
      price: parseFloat((priceRef.current?.value as string) || "0"),
    };
    console.log(product);
    try {
      const createProduct = new CreateProduct();
      const response = await createProduct.createProduct(product);
      console.log(response);
      if (nameRef.current) nameRef.current.value = "";
      if (quantityRef.current) quantityRef.current.value = "";
      if (priceRef.current) priceRef.current.value = "";
      navigate.push("/products");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Page Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleSubmit} className={"ion-padding"}>
            <IonInput ref={nameRef} type="text" label="Nome:"></IonInput>
            <IonInput
              ref={quantityRef}
              type="number"
              label="Quantidade:"
            ></IonInput>
            <IonInput
              ref={priceRef}
              type="number"
              step="0.01"
              label="Preço:"
            ></IonInput>
            <IonButton
              type={"submit"}
              color="success"
              expand="full"
              shape="round"
              className="ion-margin-top"
            >
              Register
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Register;
