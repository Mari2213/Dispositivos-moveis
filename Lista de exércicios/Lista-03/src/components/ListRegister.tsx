import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from "@ionic/react";
import { archive, pencil, trash } from "ionicons/icons";

interface PropsListRegister {
  userData: any[];
  onEdit: (index: number) => void;
  onView: (index: number) => void;
  onDelete: (index: number) => void;
}

const ListRegister = ({
  userData,
  onEdit,
  onView,
  onDelete,
}: PropsListRegister) => {
  const handleDelete = (index: number) => {
    onDelete(index);
  };

  const handleView = (index: number) => {
    onView(index);
  };

  const handleEdit = (index: number) => {
    onEdit(index);
  };

  console.log("ListRegister: received userData prop", userData);

  return (
    <IonContent color="light">
      {userData.length > 0 ? (
        <IonList inset={true}>
          {userData.map((user, index) => (
            <IonItemSliding key={user.id}>
              <IonItemOptions side="start">
                <IonItemOption
                  color="danger"
                  onClick={() => handleDelete(index)}
                >
                  <IonIcon slot="start" icon={trash}></IonIcon>
                  DELETE
                </IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>{user.name}</IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption onClick={() => handleView(index)}>
                  <IonIcon slot="start" icon={archive}></IonIcon>
                  Visualizar
                </IonItemOption>
                <IonItemOption
                  color="secondary"
                  onClick={() => handleEdit(index)}
                >
                  <IonIcon slot="start" icon={pencil}></IonIcon>
                  Editar
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      ) : (
        <IonLabel>Not users found</IonLabel>
      )}
    </IonContent>
  );
};

export default ListRegister;
