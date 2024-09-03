import {
  IonButton,
  IonContent,
  IonInput,
  InputCustomEvent,
} from "@ionic/react";
import { useState } from "react";
import React from "react";
import { CreateProduct } from "../services/productsServices";

interface Product {
  name: string;
  description: string;
  price: number;
}

const FormsProduct = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    try {
      const createProduct = new CreateProduct();
      const response = await createProduct.createProduct(product);
      console.log(response);
      setProduct({
        name: "",
        description: "",
        price: 0,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (name: string) => (e: InputCustomEvent) => {
    const value = e.detail.value;
    setProduct({ ...product, [name]: value });
  };
  return (
    <IonContent>
      <form className={"ion-padding"} onSubmit={handleSubmit}>
        <IonInput
          type="text"
          label="Nome:"
          value={product.name}
          onIonChange={handleChange("name")}
        ></IonInput>
        <IonInput
          type="text"
          label="Descrição:"
          value={product.description}
          onIonChange={handleChange("description")}
        ></IonInput>
        <IonInput
          type="number"
          step="0.01"
          label="Preço:"
          value={product.price}
          onIonChange={handleChange("price")}
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
