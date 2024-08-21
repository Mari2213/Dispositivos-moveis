import { IonButton, IonContent, IonInput, IonLabel } from "@ionic/react";
import { FormEvent, useState } from "react";

const FormsProduct = ({ onSubmit }: { onSubmit: (product: any) => void }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name && !description && !price) {
      setError("Nome, descrição e preço do produto são obrigatórios");
    } else {
      const product = { name, description, price };
      onSubmit(product);
      setName("");
      setDescription("");
      setPrice(0);
    }
  };
  return (
    <IonContent>
      <form onSubmit={handleSubmit} className={"ion-padding"}>
        <IonInput
          type="text"
          label="Nome:"
          value={name}
          onIonChange={(e) => setName(e.detail.value!)}
        ></IonInput>
        <IonInput
          type="text"
          label="Descrição:"
          value={description}
          onIonChange={(e) => setDescription(e.detail.value!)}
        ></IonInput>
        <IonInput
          type="number"
          label="Preço:"
          value={price}
          onIonChange={(e) => setPrice(Number(e.detail.value!))}
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
