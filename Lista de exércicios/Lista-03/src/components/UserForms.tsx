import React from "react";
import {
  IonButton,
  IonCheckbox,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToggle,
} from "@ionic/react";
import { disc } from "ionicons/icons";
import {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { User } from "../models/userSchema";

interface UserFormProps {
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
  setValue: UseFormSetValue<User>;
  getValues: UseFormGetValues<User>;
  handleSubmit: UseFormHandleSubmit<User>;
  onSubmit: SubmitHandler<User>;
  onError: (errors: object) => void;
  handleHobbiesItem: (item: string) => void;
}

function UserForms({
  register,
  errors,
  setValue,
  getValues,
  handleSubmit,
  onSubmit,
  onError,
  handleHobbiesItem,
}: UserFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <IonList>
        <IonItem className={"ion-margin-bottom"}>
          <IonInput
            className={`${errors.nome ? "ion-invalid ion-touched" : ""}`}
            {...register("nome")}
            name={"nome"}
            type={"text"}
            label={"Nome:"}
            errorText={errors.nome?.message}
          />
        </IonItem>
        <IonItem className={"ion-margin-bottom"}>
          <IonInput
            className={`${errors.idade ? "ion-invalid ion-touched" : ""}`}
            {...register("idade")}
            name={"idade"}
            type={"number"}
            label={"Idade:"}
            errorText={errors.idade?.message}
          />
        </IonItem>
        <IonItem className={"ion-margin-bottom"}>
          <IonInput
            className={`${errors.email ? "ion-invalid ion-touched" : ""}`}
            {...register("email")}
            name={"email"}
            type={"email"}
            label={"Email:"}
            errorText={errors.email?.message}
          />
        </IonItem>
        <IonItem className={"ion-margin-bottom"}>
          <IonInput
            className={`${errors.telefone ? "ion-invalid ion-touched" : ""}`}
            {...register("telefone")}
            name={"telefone"}
            type={"tel"}
            label={"Telefone:"}
            errorText={errors.telefone?.message}
          />
        </IonItem>
        <IonItem className={"ion-margin-bottom"}>
          <IonInput
            className={`${errors.endereco ? "ion-invalid ion-touched" : ""}`}
            {...register("endereco")}
            name={"endereco"}
            type={"text"}
            label={"Endereço:"}
            errorText={errors.endereco?.message}
          />
        </IonItem>
        <IonList className={"ion-padding"}>
          <IonLabel>Gênero</IonLabel>
          <IonRadioGroup
            value={getValues("genero")}
            {...register("genero")}
            onIonChange={(e) => setValue("genero", e.detail.value)}
          >
            <IonItem className={"ion-margin-top"}>
              <IonRadio value={"masculino"}>Masculino</IonRadio>
            </IonItem>
            <IonItem>
              <IonRadio value={"feminino"}>Feminino</IonRadio>
            </IonItem>
            <IonItem className={"ion-margin-bottom"}>
              <IonRadio value={"outro"}>Outro</IonRadio>
            </IonItem>
          </IonRadioGroup>
          {errors.genero && (
            <IonText color={"danger"}>{errors.genero.message}</IonText>
          )}
        </IonList>
        <IonItem>
          <IonSelect
            value={getValues("cidade")}
            {...register("cidade")}
            cancelText={"Cancelar"}
          >
            <div slot="label">
              Cidade{" "}
              <IonText color={"danger"} className={"ion-padding"}>
                {errors.cidade?.message}
              </IonText>
            </div>
            <IonSelectOption value={"sao-paulo"}>São Paulo</IonSelectOption>
            <IonSelectOption value={"rio-de-janeiro"}>
              Rio de Janeiro
            </IonSelectOption>
            <IonSelectOption value={"belo-horizonte"}>
              Belo Horizonte
            </IonSelectOption>
            <IonSelectOption value={"outro"}>Outro</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonList className={"ion-padding"}>
          <IonLabel>Interesses</IonLabel>
          <IonItem className={"ion-margin-top"}>
            <IonCheckbox
              checked={getValues("hobbies").includes("esportes")}
              onIonChange={() => handleHobbiesItem("esportes")}
            >
              Esportes
            </IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox
              checked={getValues("hobbies").includes("musica")}
              onIonChange={() => handleHobbiesItem("musica")}
            >
              Música
            </IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox
              checked={getValues("hobbies").includes("leitura")}
              onIonChange={() => handleHobbiesItem("leitura")}
            >
              Leitura
            </IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox
              checked={getValues("hobbies").includes("viagens")}
              onIonChange={() => handleHobbiesItem("viagens")}
            >
              Viagens
            </IonCheckbox>
          </IonItem>
        </IonList>
        <IonItem>
          <IonToggle
            {...register("alertas")}
            name={"alertas"}
            checked={getValues("alertas")}
            onIonChange={(e) => setValue("alertas", e.detail.checked)}
          >
            <IonLabel>Receber notificações</IonLabel>
          </IonToggle>
        </IonItem>
        <IonButton type={"submit"} expand={"full"} className={"ion-margin"}>
          Salvar
          <IonIcon slot="start" icon={disc}></IonIcon>
        </IonButton>
      </IonList>
    </form>
  );
}

export default UserForms;
