import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
          <Route exact path="/proyectos" component={Proyectos}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
