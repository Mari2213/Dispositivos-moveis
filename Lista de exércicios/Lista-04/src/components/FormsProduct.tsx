import { IonButton, IonContent, IonInput, IonLabel } from "@ionic/react";
import { useState } from "react";
import { Products } from "../models/products";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";

const FormsProduct = ({ onSubmit }: { onSubmit: (product: any) => void }) => {
  const [product, setProduct] = useState<Products>({
    id: uuidv4(),
    name: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!product.name) {
      setError("Nome do produto é obrigatório");
      return;
    } else {
      // setError("Sucesso");
      onSubmit(product);
      dispatch(addProduct(product));
      setProduct({ id: uuidv4(), name: "" });
      history.push("/");
    }
  };
  return (
    <IonContent>
      <form onSubmit={handleSubmit}>
        <IonInput
          type="text"
          value={product.name}
          onIonChange={(e) =>
            setProduct({ ...product, name: e.detail.value || "" })
          }
          label="Nome do produto:"
        ></IonInput>
        <IonLabel className="ion-color-danger">{error}</IonLabel>
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
