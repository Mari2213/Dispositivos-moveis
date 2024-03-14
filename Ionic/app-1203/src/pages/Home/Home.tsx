import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer/ExploreContainer';
import './Home.css';
import Tarefas from "../Tarefas/Tarefas";

const Home: React.FC = () => {
    return (
        <Tarefas/>
    );
};

export default Home;
