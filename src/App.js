// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { Login, Form, Unauthorized, Error404 } from "./components";
import { userAuth } from "./auth"

// Rutas Protegidas
const ProtectedForm = userAuth(Form);

function App() {
  return (
    <div style={{height:"100vh",  overflow: "hidden"}}>
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
