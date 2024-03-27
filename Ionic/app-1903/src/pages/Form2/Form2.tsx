import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const Form2 = () => {
  const [dados, setDados] = useState({
    nome: "",
    genero: "",
    preferencias: false,
  });

  const submitForn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      console.log("Formulário", dados);
      setDados({
        nome: "",
        genero: "",
        preferencias: false,
      });
    } else {
      console.log("Formulário inválido");
    }
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Form2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={submitForn}>
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput
              type="text"
              name="nome"
              value={dados.nome}
              required={true}
              onIonChange={(e) => setDados({ ...dados, nome: e.detail.value! })}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Gênero</IonLabel>
            <IonSelect
              name="genero"
              value={dados.genero}
              aria-required={true}
              interface="action-sheet"
              onIonChange={(e) =>
                setDados({ ...dados, genero: e.detail.value! })
              }
            >
              <IonSelectOption value="masculino">Masculino</IonSelectOption>
              <IonSelectOption value="femenino">Femenino</IonSelectOption>
              <IonSelectOption value="outro">Outro</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Preferências</IonLabel>
            <IonCheckbox
              name="preferencias"
              value={dados.preferencias}
              aria-required={true}
              onIonChange={(e) =>
                setDados({ ...dados, preferencias: e.detail.checked })
              }
            ></IonCheckbox>
          </IonItem>
          <IonButton type="submit" expand="block">
            Enviar
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Form2;
