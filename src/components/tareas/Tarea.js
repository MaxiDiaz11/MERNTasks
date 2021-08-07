import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareasContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(tareaContext)
  const { eliminarTarea, obtenerTareas } = tareasContext;

  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext;

  //fnucion que se ejecuta cuando el usr presiona el boton de eliminar
  const eliminar = (id) => {
    eliminarTarea(id)
    obtenerTareas(proyecto[0].id);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => eliminar(tarea.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
