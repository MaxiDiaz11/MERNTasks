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
          tareas.map((t) => <Tarea tarea={t}></Tarea>)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
