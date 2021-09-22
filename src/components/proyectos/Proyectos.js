import React, { useContext, useEffect } from "react";
import Barra from "../layout/Barra";
import SideBar from "../layout/SideBar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
import AutenticacionContext from "../../context/autenticacion/autenticacionContext";

const Proyectos = () => {

  // extraer la informacion de autenticacion
  const authContext = useContext(AutenticacionContext);
  const { obtenerUsuarioAutenticado } = authContext;

  useEffect(() => {
    obtenerUsuarioAutenticado()
  }, [])

  return (
    <div className="contenedor-app">
      <SideBar></SideBar>
      <div className="seccion-principal">
        <Barra></Barra>
        <main>
          <FormTarea></FormTarea>
          <div className="contenedor-tareas">
            <ListadoTareas></ListadoTareas>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
