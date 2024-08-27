import { IonButton, IonContent, IonInput, IonLabel } from "@ionic/react";
import { useState } from "react";

interface Product {
  name: string;
  description: string;
  price: number;
}

const FormsProduct = ({
  onSubmit,
}: {
  onSubmit: (product: Product) => void;
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [error, setError] = useState("");

  const validateInput = (input: string) => {
    if (!input.trim()) {
      return "Field is required";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = [
      validateInput(name),
      validateInput(description),
      validateInput(price.toString()),
    ];
    if (errors.some((error) => error !== "")) {
      setError("Please fill in all fields");
      return;
    }
    const product: Product = { name, description, price };
    onSubmit(product);
    setName("");
    setDescription("");
    setPrice(0.0);
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
          step="0.01"
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
