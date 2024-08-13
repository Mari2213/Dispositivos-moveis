import {
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
import ButtonFloating from "../components/ButtonFloating";
import { useHistory } from "react-router";
import { eye, pencil, trash } from "ionicons/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  deleteProduct,
  updateProduct,
} from "../redux/productsSlice";
import { RootState } from "../redux/store";
import { Products } from "../models/products";
import { api } from "../axios/axiosConfig";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  const handleButtonClick = () => {
    history.push("/register");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await api.get("/products");
      const productsData = resp.data;
      dispatch(setProducts(productsData));
    };
    fetchProducts().then((r) => r);
    console.log(products);
  }, []);

  const viewProduct = (productId: string) => {
    // const resp = getProducts();
    // console.log(resp);
  };

  const deleteProducts = async (productId: string) => {
    try {
      await api.delete(`/products/${productId}`);
      dispatch(deleteProduct(productId));
      const update = products.filter((product) => product.id !== productId);
      dispatch(updateProduct(update));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ButtonFloating onclick={handleButtonClick} />
        <IonList>
          {products.map((product: Products) => (
            <IonItemSliding key={product.id}>
              <IonItemOptions side="start">
                <IonItemOption
                  color="danger"
                  expandable
                  onClick={() => deleteProducts(product.id)}
                >
                  <IonIcon slot={"start"} icon={trash}></IonIcon>
                  Delete
                </IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>{product.name}</IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption>
                  <IonIcon slot={"start"} icon={pencil}></IonIcon>
                  Edit
                </IonItemOption>
                <IonItemOption
                  color="light"
                  expandable
                  onClick={() => viewProduct(product.id)}
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
