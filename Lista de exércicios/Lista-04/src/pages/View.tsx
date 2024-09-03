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

interface ProductProps {
  name: string;
  description: string;
  price: number;
  created_at: Date | null;
  updated_at: Date | null;
}

const View = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts().then((data) => {
      if (data) {
        setProduct({
          name: data.name,
          description: data.description,
          price: data.price,
          created_at: data.createdAt ? new Date(data.createdAt) : null,
          updated_at: data.updatedAt ? new Date(data.updatedAt) : null,
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
              <IonCardSubtitle>
                Descrição: {product.description}
              </IonCardSubtitle>
              <IonCardSubtitle>Preço: {product.price}</IonCardSubtitle>
              <IonCardSubtitle>
                Data de criação:{" "}
                {product.created_at
                  ? product.created_at.toLocaleDateString("pt-BR")
                  : "Sem data"}
              </IonCardSubtitle>
              <IonCardSubtitle>
                Data de atualização:{" "}
                {product.updated_at
                  ? product.updated_at.toLocaleDateString("pt-BR")
                  : ""}
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default View;
