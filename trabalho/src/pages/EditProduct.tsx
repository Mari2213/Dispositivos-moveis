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
import { useHistory, useParams } from "react-router";
import { FormEvent, useEffect, useRef, useState } from "react";
import { GetProduct, UpdateProduct } from "../services/productsServices";
import React from "react";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const nameRef = useRef<HTMLIonInputElement>(null);
  const quantityRef = useRef<HTMLIonInputElement>(null);
  const priceRef = useRef<HTMLIonInputElement>(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    loadProduct().then();
  }, [id]);

  const loadProduct = async () => {
    const getProduct = new GetProduct();
    const result = await getProduct.getProduct(id);

    if (nameRef.current) nameRef.current.value = result.name;
    if (quantityRef.current) quantityRef.current.value = result.quantity;
    if (priceRef.current) priceRef.current.value = result.price.toString();

    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const updatedProduct = {
      name: (nameRef.current?.value as string) || "",
      quantity: parseInt((quantityRef.current?.value as string) || "0"),
      price: parseFloat((priceRef.current?.value as string) || "0"),
    };
    console.log(updatedProduct);
    try {
      const updateProduct = new UpdateProduct();
      await updateProduct.updateProduct(id, updatedProduct);
      history.push("/products");
    } catch (error) {
      console.error("Failed", error);
    }
  };

  if (loading) {
    return <IonContent className={"ion-padding"}>Loading...</IonContent>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Edit Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className={"ion-padding"} onSubmit={handleSubmit}>
          <IonInput
            ref={nameRef}
            type={"text"}
            label={"Nome:"}
            name="name"
          ></IonInput>
          <IonInput
            ref={quantityRef}
            type={"number"}
            label={"Quantidade:"}
            name="quantity"
          ></IonInput>
          <IonInput
            ref={priceRef}
            type={"number"}
            step={"0.01"}
            label={"Preço:"}
            name="price"
          ></IonInput>
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
