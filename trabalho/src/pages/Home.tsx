import {
  IonCard,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import ButtonFloating from "../components/ButtonFloating";
import { useHistory, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import {
  DeleteProduct,
  ListProduct,
  UpdateProductStatus,
} from "../services/productsServices";
import { Product } from "../models/product";

const Home: React.FC = () => {
  const history = useHistory();
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [presentAlert, dismissAlert] = useIonAlert();
  const location = useLocation();
  const [totalNotAcquired, setTotalNotAcquired] = useState<number>(0);
  const [segment, setSegment] = useState("naoAdquiridos");

  useEffect(() => {
    loadProducts().then((r) => r);
  }, [location]);

  const loadProducts = async () => {
    const listProducts = new ListProduct();
    const result = await listProducts.listProducts();
    setProductsData(result);
    calculateTotalNotAcquired(result);
  };

  const calculateTotalNotAcquired = (product: Product[]) => {
    const total = product
      .filter((product) => !product.status)
      .reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotalNotAcquired(total);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const editProductStatus = async (id: string, status: boolean | undefined) => {
    const newStatus = !status;
    const updateStatus = new UpdateProductStatus();
    await updateStatus.updateProductStatus(id, newStatus);

    const updatedProduct = productsData.map((product) =>
      product.id === id ? { ...product, status: newStatus } : product,
    );
    setProductsData(updatedProduct);
    calculateTotalNotAcquired(updatedProduct);
  };

  const viewProduct = (id: string) => {
    history.push(`/view-product/${id}`);
  };

  const editProduct = async (id: string) => {
    history.push(`/edit-product/${id}`);
  };

  const deleteProduct = async (id: string) => {
    await presentAlert({
      header: "Confirmação de exclusão",
      message: "Deseja realmente excluir o produto?",
      buttons: [
        { text: "Cancelar", role: "cancel", handler: () => dismissAlert() },
        {
          text: "Confirmar",
          handler: async () => {
            const deleteProduct = new DeleteProduct();
            const result = await deleteProduct.deleteProduct(id);
            const allProducts = productsData.filter(
              (product) => product.id !== id,
            );
            setProductsData(allProducts);
            calculateTotalNotAcquired(allProducts);
            console.log(result);
          },
        },
      ],
    });
  };

  if (!productsData) {
    return (
      <IonCard>
        <IonCardTitle>Loading...</IonCardTitle>
      </IonCard>
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={"ion-padding"}>
        <ButtonFloating onclick={() => history.push("/product")} />
        <IonSegment
          value={segment}
          onIonChange={(e) => setSegment(e.detail.value as string)}
        >
          <IonSegmentButton value="naoAdquiridos">
            <IonLabel>Não adquiridos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="adquiridos">
            <IonLabel>Adquiridos</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonList>
          {productsData
            .filter(
              (product) =>
                (segment === "naoAdquiridos" && !product.status) ||
                (segment === "adquiridos" && product.status),
            )
            .map((product) => (
              <IonItemSliding key={product.id}>
                <IonItemOptions side="start">
                  <IonItemOption
                    color="danger"
                    onClick={() => product.id && deleteProduct(product.id)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>

                <IonItem>
                  <IonCheckbox
                    checked={product.status}
                    onIonChange={() =>
                      product.id &&
                      editProductStatus(product.id, product.status)
                    }
                    labelPlacement="end"
                  >
                    {product.name}
                  </IonCheckbox>
                  <IonLabel className={"ion-margin-horizontal"}>
                    {formatCurrency(product.price)}
                  </IonLabel>
                  <IonLabel className={"ion-margin-horizontal"}>
                    Qtd {product.quantity}
                  </IonLabel>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption
                    onClick={() => product.id && editProduct(product.id)}
                  >
                    Edit
                  </IonItemOption>
                  <IonItemOption
                    color="light"
                    onClick={() => product.id && viewProduct(product.id)}
                  >
                    View
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
        </IonList>
        <IonLabel className={"ion-padding"}>
          Total R$ {formatCurrency(totalNotAcquired)}
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Home;
