import { IonButton, IonContent, IonInput } from "@ionic/react";
import { useRef } from "react";
import React from "react";
import { CreateProduct } from "../services/productsServices";
import { useHistory } from "react-router";

interface Product {
  name: string;
  description: string;
  price: number;
}

const FormsProduct = () => {
  const nameRef = useRef<HTMLIonInputElement | null>(null);
  const descriptionRef = useRef<HTMLIonInputElement | null>(null);
  const priceRef = useRef<HTMLIonInputElement | null>(null);
  const navigate = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product: Product = {
      name: (nameRef.current?.value as string) || "",
      description: (descriptionRef.current?.value as string) || "",
      price: parseFloat((priceRef.current?.value as string) || "0"),
    };
    console.log(product);
    try {
      const createProduct = new CreateProduct();
      const response = await createProduct.createProduct(product);
      console.log(response);
      if (nameRef.current) nameRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (priceRef.current) priceRef.current.value = "";
      navigate.push("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonContent>
      <form className={"ion-padding"} onSubmit={handleSubmit}>
        <IonInput ref={nameRef} type="text" label="Nome:"></IonInput>
        <IonInput
          ref={descriptionRef}
          type="text"
          label="Descrição:"
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
  );
};

export default FormsProduct;
