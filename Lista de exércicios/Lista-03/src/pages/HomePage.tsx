import { IonPage } from "@ionic/react";
import ButtonFloating from "../components/ButtonFloating";
import Nav from "../components/Nav";
import { useHistory } from "react-router";
import ListRegister from "../components/ListRegister";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const history = useHistory();
  const [localUserData, setLocalUserData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setLocalUserData([JSON.parse(storedData)]);
    }
  }, []);

  console.log("Home: localUserData state", localUserData);

  const handleButtonClick = () => {
    history.push("/register");
  };

  const handleDelete = (index: number) => {
    // Delete functionality
  };

  const handleView = (index: number) => {
    // View functionality
  };

  const handleEdit = (index: number) => {
    // Edit functionality
  };

  return (
    <IonPage>
      <Nav />
      <ListRegister
        userData={localUserData}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onView={handleView}
      />
      <ButtonFloating onclick={handleButtonClick} />
    </IonPage>
  );
};

export default HomePage;
