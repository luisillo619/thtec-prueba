// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Componentes
import { Login, Form, Unauthorized, Error404 } from "./components";
import { userAuth } from "./auth"
import styles from "./App.module.scss"

// Rutas Protegidas
const ProtectedForm = userAuth(Form);

// Aplicacion con enrutamiento
function App() {
  return (
    <div className={styles.app_container}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/form" component={ProtectedForm} />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route path="*" component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
