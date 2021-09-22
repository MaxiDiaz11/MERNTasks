import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from "./context/proyectos/proyectoState"
import TareaState from "./context/tareas/tareasState"
import AlertaState from './context/alertas/alertaState';
import AutenticacionState from './context/autenticacion/autenticacionState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

//Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <div className="App">
      <ProyectoState>
        <TareaState>
          <AutenticacionState>
            <AlertaState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login}></Route>
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
                  <RutaPrivada exact path="/proyectos" component={Proyectos}></RutaPrivada>
                </Switch>
              </Router>
            </AlertaState>
          </AutenticacionState>
        </TareaState>
      </ProyectoState>
    </div>
  );
}

export default App;
