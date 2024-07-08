import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

interface ButtonFloatingProps {
  slot: string;
  vertical: "top" | "bottom" | "center";
  horizontal: "center" | "start" | "end";
  color:
    | "danger"
    | "dark"
    | "light"
    | "medium"
    | "primary"
    | "secondary"
    | "success"
    | "tertiary"
    | "warning"
    | string
    | undefined;
}

const ButtonFloating = ({
  slot,
  vertical,
  horizontal,
  color,
}: ButtonFloatingProps) => {
  return (
    <IonFab slot={slot} vertical={vertical} horizontal={horizontal}>
      <IonFabButton color={color} href={"/register"}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};

export default ButtonFloating;
