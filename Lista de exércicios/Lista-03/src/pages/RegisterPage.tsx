import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import useForms from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";
import { useHistory } from "react-router";

const RegisterPage = () => {
  const { register, handleSubmit, errors, reset, setValue, getValues } =
    useForms();
  const history = useHistory();

  const onsubmit = (data: FormSchema) => {
    try {
      console.log(data);
      const storedData = localStorage.getItem("userData");
      const users = storedData ? JSON.parse(storedData) : [];
      users.push(data);
      localStorage.setItem("userData", JSON.stringify(users));
      reset();
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Page Register</IonTitle>
      </IonToolbar>
      <IonContent>
        <form onSubmit={handleSubmit(onsubmit)}>
          <IonItem>
            <IonInput
              id="name"
              {...register("name")}
              type="text"
              label="Name:"
            ></IonInput>
          </IonItem>
          {errors.name && <p>{errors.name.message}</p>}
          <IonItem>
            <IonInput
              id="age"
              {...register("age", { valueAsNumber: true })}
              type="number"
              label="Age:"
            ></IonInput>
          </IonItem>
          {errors.age && <p>{errors.age.message}</p>}
          <IonItem>
            <IonLabel>Genre</IonLabel>
            <IonRadioGroup>
              <IonRadio justify="start" {...register("genre")} value="Female">
                Female
              </IonRadio>
              <IonRadio justify="start" {...register("genre")} value="Male">
                Male
              </IonRadio>
            </IonRadioGroup>
          </IonItem>
          {errors.genre && <p>{errors.genre.message}</p>}
          <IonItem>
            <IonInput
              id="email"
              {...register("email")}
              type="email"
              label="Email:"
            ></IonInput>
          </IonItem>
          {errors.email && <p>{errors.email.message}</p>}
          <IonItem>
            <IonInput
              id="phone"
              {...register("phone")}
              type="tel"
              label="Phone:"
            ></IonInput>
          </IonItem>
          {errors.phone && <p>{errors.phone.message}</p>}
          <IonItem>
            <IonInput
              id="address"
              {...register("address")}
              type="text"
              label="Andress:"
            ></IonInput>
          </IonItem>
          {errors.address && <p>{errors.address.message}</p>}
          <IonItem>
            <IonSelect id="city" {...register("city")} label="City">
              <IonSelectOption value="São Paulo">São Paulo</IonSelectOption>
              <IonSelectOption value="Rio de Janeiro">
                Rio de Janeiro
              </IonSelectOption>
              <IonSelectOption value="Belo Horizonte">
                Belo Horizonte
              </IonSelectOption>
              <IonSelectOption value="Outras">Outra</IonSelectOption>
            </IonSelect>
          </IonItem>
          {errors.city && <p>{errors.city.message}</p>}
          <IonItem>
            <IonLabel>Hobbies</IonLabel>
            <IonList>
              <IonCheckbox
                id="sports"
                onIonChange={(e) => {
                  if (e.target.checked) {
                    setValue("hobbies", [
                      ...(getValues("hobbies") ?? []),
                      "Sports",
                    ]);
                  } else {
                    setValue(
                      "hobbies",
                      getValues("hobbies")?.filter(
                        (hobby: string) => hobby !== "Sports",
                      ),
                    );
                  }
                }}
                checked={getValues("hobbies")?.includes("Sports")}
                justify="start"
              >
                Sports
              </IonCheckbox>
              <IonCheckbox
                id="music"
                onIonChange={(e) => {
                  if (e.target.checked) {
                    setValue("hobbies", [
                      ...(getValues("hobbies") ?? []),
                      "Music",
                    ]);
                  } else {
                    setValue(
                      "hobbies",
                      getValues("hobbies")?.filter(
                        (hobby: string) => hobby !== "Music",
                      ),
                    );
                  }
                }}
                checked={getValues("hobbies")?.includes("Music")}
                justify="start"
              >
                Music
              </IonCheckbox>
              <IonCheckbox
                id="reading"
                onIonChange={(e) => {
                  if (e.target.checked) {
                    setValue("hobbies", [
                      ...(getValues("hobbies") ?? []),
                      "Reading",
                    ]);
                  } else {
                    setValue(
                      "hobbies",
                      getValues("hobbies")?.filter(
                        (hobby: string) => hobby !== "Reading",
                      ),
                    );
                  }
                }}
                checked={getValues("hobbies")?.includes("Reading")}
                justify="start"
              >
                Reading
              </IonCheckbox>
              <IonCheckbox
                id="trips"
                onIonChange={(e) => {
                  if (e.target.checked) {
                    setValue("hobbies", [
                      ...(getValues("hobbies") ?? []),
                      "Trips",
                    ]);
                  } else {
                    setValue(
                      "hobbies",
                      getValues("hobbies")?.filter(
                        (hobby: string) => hobby !== "Trips",
                      ),
                    );
                  }
                }}
                checked={getValues("hobbies")?.includes("Trips")}
                justify="start"
              >
                Trips
              </IonCheckbox>
            </IonList>
            {errors.hobbies && <p>{errors.hobbies.message}</p>}
          </IonItem>
          <IonItem>
            <IonToggle id="newsletter" {...register("newsletter")}>
              Do you want to subscribe to the Newsletter subscription?
            </IonToggle>
          </IonItem>
          {errors.newsletter && <p>{errors.newsletter.message}</p>}
          <IonButton
            type="submit"
            color="secondary"
            expand="full"
            shape="round"
          >
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
