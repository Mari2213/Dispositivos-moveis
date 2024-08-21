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
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { GetProduct, UpdateProduct } from "../services/productsServices";

interface ProductProps {
  name: string;
  description: string;
  price: number;
}

const EditProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const [products, setProducts] = useState<ProductProps | null>(null);

  useEffect(() => {
    loadProduct().then((r) => r);
  }, []);

  const loadProduct = async () => {
    const getProduct = new GetProduct();
    const result = await getProduct.getProduct(productId);
    setProducts(result);
    console.log(result);
  };

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
        <form className={"ion-padding"}>
          <IonInput type="text" label="Nome:" value={products?.name}></IonInput>
          <IonInput
            type="text"
            label="Descrição:"
            value={products?.description}
          ></IonInput>
          <IonInput
            type="number"
            label="Preço:"
            value={products?.price}
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
