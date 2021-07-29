import React from "react";
import Barra from "../layout/Barra";
import SideBar from "../layout/SideBar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
const Proyectos = () => {
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
