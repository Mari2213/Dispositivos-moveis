import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";

const RegisterStudents = () => {
  return (
    <>
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Cadasto de Alunos</IonTitle>
        </IonToolbar>
        <IonContent>
          <form action="">
            <IonItem>
              <IonInput
                type="text"
                label="Nome:"
                placeholder="Digite seu nome"
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Sexo:"
                labelPlacement="fixed"
                placeholder="Selecione o sexo"
              >
                <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                <IonSelectOption value="Maculino">Maculino</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonInput
                type="tel"
                label="Telefone:"
                placeholder="Digite o seu telefone"
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                label="Matrícula:"
                placeholder="Digite a sua matrícula"
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonToggle>Aluno Bilingue?</IonToggle>
            </IonItem>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default RegisterStudents;
