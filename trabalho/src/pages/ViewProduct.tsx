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
import { useParams } from "react-router";
import { GetProduct } from "../services/productsServices";
import { useEffect, useState } from "react";
import React from "react";
import { Product } from "../models/product";

const View = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts().then((data) => {
      if (data) {
        setProduct({
          name: data.name,
          quantity: data.quantity,
          price: data.price,
        });
      }
      setLoading(false);
    });
  }, [id]);

  const loadProducts = async () => {
    const getProducts = new GetProduct();
    return await getProducts.getProduct(id);
  };

  if (loading) {
    return <IonContent>Loading...</IonContent>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products"></IonBackButton>
          </IonButtons>
          <IonTitle>Page View Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {product && (
          <IonCard className={"ion-padding"} color={"light"}>
            <IonTitle>{product.name}</IonTitle>
            <IonCardContent>
              <IonCardSubtitle>Quantidade: {product.quantity}</IonCardSubtitle>
              <IonCardSubtitle>Preço: R$ {product.price}</IonCardSubtitle>
              <IonCardSubtitle>
                Status: {product.status ? "Adquirido" : "Nao adquirido"}
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default View;
