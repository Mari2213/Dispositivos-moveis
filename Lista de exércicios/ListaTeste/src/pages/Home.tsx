import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import { FormEvent, useEffect, useRef, useState } from "react";
import { api } from "../axios/axiosConfig";
import "./Home.css";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
}

const Home = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const nameRef = useRef<HTMLIonInputElement | null>(null);
  const emailRef = useRef<HTMLIonInputElement | null>(null);

  useEffect(() => {
    loadCustomers().then((r) => r);
  }, []);

  const loadCustomers = async () => {
    const response = await api.get("/customers");
    setCustomers(response.data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
    });
    console.log(response.data);
    setCustomers((allCustomers) => [...allCustomers, response.data]);
    nameRef.current!.value = "";
    emailRef.current!.value = "";
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/customer/${id}`);
      const allCustomers = customers.filter((customer) => customer.id !== id);
      setCustomers(allCustomers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customer Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={"ion-padding"}>
        <IonCard color={"secondary"}>
          <IonCardHeader>
            <IonCardTitle className={"text"}>Form de Register</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form className={"ion-color-dark"} onSubmit={handleSubmit}>
              <IonInput
                type={"text"}
                label={"Nome:"}
                aria-label={"Nome"}
                ref={nameRef}
                className={"text"}
              ></IonInput>
              <IonInput
                type={"email"}
                label={"Email:"}
                aria-label={"Email"}
                ref={emailRef}
                className={"text"}
              ></IonInput>
              <IonButton
                type={"submit"}
                expand={"full"}
                color={"success"}
                shape={"round"}
                className={"text"}
              >
                Submit
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <IonCard color={"light"}>
          <IonCardHeader>
            <IonCardTitle className={"text"}>Customers</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className={"ion-color-dark"}>
            {customers.map((customer) => (
              <IonList key={customer.id} className={"ion-padding"}>
                <IonItem>
                  <IonRow
                    className={
                      "ion-justify-content-between ion-align-items-center"
                    }
                  >
                    <IonCol className={"ion-padding-end"}>
                      <IonCardSubtitle>Name: {customer.name}</IonCardSubtitle>
                      <IonCardSubtitle>Email: {customer.email}</IonCardSubtitle>
                      <IonCardSubtitle>
                        Status: {customer.status ? "Ativo" : "Inativo"}
                      </IonCardSubtitle>
                    </IonCol>
                    <IonButton
                      expand={"block"}
                      color={"danger"}
                      onClick={() => handleDelete(customer.id)}
                    >
                      <IonIcon icon={trash} color="light"></IonIcon>
                    </IonButton>
                  </IonRow>
                </IonItem>
              </IonList>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
