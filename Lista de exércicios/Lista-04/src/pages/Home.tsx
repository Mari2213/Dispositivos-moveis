import {
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useIonAlert } from "@ionic/react";
import ButtonFloating from "../components/ButtonFloating";
import { useHistory } from "react-router";
import { eye, pencil, trash } from "ionicons/icons";
import { useEffect, useState } from "react";
import { DeleteProduct, ListProduct } from "../services/productsServices";

interface ProductProps {
  id: string;
  name: string;
}

const Home = () => {
  const history = useHistory();
  const [productsData, setProductsData] = useState<ProductProps[]>([]);
  const [presentAlert, dismissAlert] = useIonAlert();

  useEffect(() => {
    loadProducts().then((r) => r);
  }, []);

  const loadProducts = async () => {
    const listProducts = new ListProduct();
    const result = await listProducts.listProducts();
    setProductsData(result);
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
      <IonContent>
        <ButtonFloating onclick={() => history.push("/product")} />
        <IonList className="ion-margin">
          {productsData.map((product) => (
            <IonItemSliding key={product.id}>
              <IonItemOptions side="start">
                <IonItemOption
                  color="danger"
                  expandable
                  onClick={() => product.id && deleteProduct(product.id)}
                >
                  <IonIcon slot={"start"} icon={trash}></IonIcon>
                  Delete
                </IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>{product.name}</IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => product.id && editProduct(product.id)}
                >
                  <IonIcon slot={"start"} icon={pencil}></IonIcon>
                  Edit
                </IonItemOption>
                <IonItemOption
                  color="light"
                  expandable
                  onClick={() => product.id && viewProduct(product.id)}
                >
                  <IonIcon slot={"start"} icon={eye}></IonIcon>
                  View
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
