import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareas = [
    { nombre: "elegir plataforma", estado: true },
    { nombre: "elegir color", estado: false },
    { nombre: "cambiar estado", estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyectos: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareas.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareas.map((t) => <Tarea></Tarea>)
        )}
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
