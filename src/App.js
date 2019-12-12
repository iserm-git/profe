import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./view/Main";
import Materias from "./view/Materias";
import Alumnos from "./view/Alumnos";
import Login from './view/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/materias" exact component={Materias} />
          <Route path="/alumnos" exact component={Alumnos} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
