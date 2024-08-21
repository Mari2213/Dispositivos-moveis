import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/Register";
import View from "./pages/View";
import EditProduct from "./pages/EditProduct";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={"/"}>
          <Redirect to={"/products"} />
        </Route>
        <Route exact path={"/products"} component={Home}></Route>
        <Route exact path={"/product"} component={Register}></Route>
        <Route exact path={"/view-product/:productId"} component={View}></Route>
        <Route
          exact
          path={"/edit-product/:productId"}
          component={EditProduct}
        ></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
