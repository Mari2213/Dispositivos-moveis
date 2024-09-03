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
import { FormEvent, useEffect, useState } from "react";
import { GetProduct, UpdateProduct } from "../services/productsServices";
import { Products } from "../models/products";
import React from "react";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Products>({} as Products);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    loadProduct().then((p) => p);
  }, [id]);

  const loadProduct = async () => {
    const getProduct = new GetProduct();
    const result = await getProduct.getProduct(id);
    setProducts(result);
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(products);
    try {
      const updateProduct = new UpdateProduct();
      await updateProduct.updateProduct(id, products);
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
            type={"text"}
            label={"Nome:"}
            name="name"
            value={products.name}
            onIonChange={(e) =>
              setProducts({ ...products, name: String(e.detail.value) })
            }
          ></IonInput>
          <IonInput
            type={"text"}
            label={"Descrição:"}
            name="description"
            value={products.description}
            onIonChange={(e) =>
              setProducts({ ...products, description: String(e.detail.value) })
            }
          ></IonInput>
          <IonInput
            type={"number"}
            step={"0.01"}
            label={"Preço:"}
            name="price"
            value={products.price}
            onIonChange={(e) =>
              setProducts({ ...products, price: Number(e.detail.value) })
            }
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
