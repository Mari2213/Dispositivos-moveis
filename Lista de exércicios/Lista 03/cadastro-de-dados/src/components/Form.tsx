import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";
import useForms from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <>
      <IonContent>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonInput
              label="Nome:"
              id="name"
              {...register("name")}
              placeholder="Digite o seu nome"
              type="text"
            ></IonInput>
            {errors.name && <small>{errors.name.message}</small>}
            <IonInput
              label="Idade:"
              id="age"
              placeholder="Digite a sua idade"
              type="number"
            ></IonInput>
            {errors.age && <small>{errors.age.message}</small>}
            <IonRadioGroup
              allowEmptySelection={true}
              aria-label="Generos"
              id="gender"
              {...register("gender")}
            >
              <div slot="label">Gêneros</div>
              <IonRadio value="masculino" justify="start">
                Masculino
              </IonRadio>
              <IonRadio value="femenino" justify="space-between">
                Femenino
              </IonRadio>
              <IonRadio value="outros" justify="space-between">
                Outros
              </IonRadio>
            </IonRadioGroup>
            {errors.gender && <small>{errors.gender.message}</small>}
            <IonInput
              label="Email:"
              id="email"
              {...register("email")}
              placeholder="Digite o seu email"
              type="email"
            ></IonInput>
            {errors.email && <small>{errors.email.message}</small>}
            <IonInput
              label="Telefone:"
              id="phone"
              {...register("phone")}
              placeholder="Digite o seu telefone"
              type="number"
            ></IonInput>
            {errors.phone && <small>{errors.phone.message}</small>}
            <IonInput
              label="Endereço:"
              id="adreess"
              {...register("address")}
              placeholder="Digite o seu endereço"
              type="text"
            ></IonInput>
            {errors.address && <small>{errors.address.message}</small>}
            <IonSelect aria-label="Cidade" id="city" {...register("city")}>
              <div slot="label">Cidade</div>
              <IonSelectOption value="sãopaulo">São Paulo</IonSelectOption>
              <IonSelectOption value="goiania">Goiania</IonSelectOption>
              <IonSelectOption value="uruacu">Uruaçu</IonSelectOption>
              <IonSelectOption value="niquelandia">Niquelandia</IonSelectOption>
              <IonSelectOption value="campinorte">Campinorte</IonSelectOption>
              <IonSelectOption value="altohorizonte">
                Alto-Horizonte
              </IonSelectOption>
              <IonSelectOption value="anapolis">Anapolis</IonSelectOption>
            </IonSelect>
            {errors.city && <small>{errors.city.message}</small>}
            <IonList id="interest" {...register("interest")}>
              <div slot="label">Interesses</div>
              <IonItem>
                <IonCheckbox value="Esporte">Esporte</IonCheckbox>
              </IonItem>
              <IonItem>
                <IonCheckbox value="Musica">Musica</IonCheckbox>
              </IonItem>
              <IonItem>
                <IonCheckbox value="Leitura">Leitura</IonCheckbox>
              </IonItem>
              <IonItem>
                <IonCheckbox value="Viagens">Viagens</IonCheckbox>
              </IonItem>
            </IonList>
            {errors.interest && <small>{errors.interest.message}</small>}
            <IonToggle
              enableOnOffLabels={true}
              id="acceptNewsletters"
              {...register("acceptNewsletters")}
            >
              Assinatura de Newsletter
            </IonToggle>
            {errors.acceptNewsletters && (
              <small>{errors.acceptNewsletters.message}</small>
            )}
            <IonButtons slot="secondary">
              <IonButton type="submit" fill="solid">
                Cadastrar
              </IonButton>
            </IonButtons>
          </form>
        </div>
      </IonContent>
    </>
  );
};

export default Form;
