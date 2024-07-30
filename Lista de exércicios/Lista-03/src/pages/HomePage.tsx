import { IonPage } from "@ionic/react";
import ButtonFloating from "../components/ButtonFloating";
import Nav from "../components/Nav";
import { useHistory } from "react-router";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/register");
  };

  return (
    <IonPage>
      <Nav />
      <ButtonFloating onclick={handleButtonClick} />
    </IonPage>
  );
};

export default HomePage;
