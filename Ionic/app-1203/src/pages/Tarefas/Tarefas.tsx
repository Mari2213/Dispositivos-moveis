import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";

const Tarefas: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Comprar pão", completed: false },
    { id: 2, title: "Lavar roupas", completed: false },
    { id: 3, title: "Limpar casa", completed: true },
    { id: 4, title: "Estudar para prova", completed: false },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "Nova Tarefa",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.map((task) => (
            <IonItem
              key={task.id}
              button
              onClick={() => toggleTaskCompletion(task.id)}
            >
              <IonLabel>{task.title}</IonLabel>
              <IonIcon
                slot="end"
                icon={task.completed ? "checkmark" : "ellipsis-hotizontal"}
              />
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="block">
          <IonIcon slot="start" icon={add} />
          Adicionar tarefa
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tarefas;
