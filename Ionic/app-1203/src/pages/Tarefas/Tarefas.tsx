import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, checkmark, ellipsisHorizontal } from "ionicons/icons";
import React, { useState } from "react";

const Tarefas: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Comprar pão", completed: false },
    { id: 2, title: "Lavar roupas", completed: false },
    { id: 3, title: "Limpar casa", completed: true },
    { id: 4, title: "Estudar para prova", completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    addTask();
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
        <form onSubmit={handlerSubmit}>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Nova tarefa"
              value={newTaskTitle}
              onIonChange={(e) => setNewTaskTitle(e.detail.value!)}
            />
          </IonItem>
          <IonButton type="submit" expand="block">
            <IonIcon slot="start" icon={add} />
            Adicionar tarefa
          </IonButton>
        </form>
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
                icon={task.completed ? checkmark : ellipsisHorizontal}
                role="img"
                className="ios"
              ></IonIcon>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tarefas;
