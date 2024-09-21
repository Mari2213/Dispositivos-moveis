import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

interface PropsButtonFloating {
  onclick?: () => void;
}

const ButtonFloating = ({ onclick }: PropsButtonFloating) => {
  return (
    <IonFab vertical={"bottom"} horizontal={"end"}>
      <IonFabButton onClick={onclick}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};
export default ButtonFloating;
