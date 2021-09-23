import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareasContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext)
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext)
  const { tareasProyecto } = tareasContext

  //si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyectos: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : <TransitionGroup>
          {tareasProyecto.map((t) => <CSSTransition key={t.id} timeout={200} classNames="tarea" ><Tarea tarea={t}></Tarea></CSSTransition>)}
        </TransitionGroup>}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={() => eliminarProyecto(proyectoActual._id)}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
