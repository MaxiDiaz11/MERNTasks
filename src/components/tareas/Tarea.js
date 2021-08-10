import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareasContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(tareaContext)
  const { eliminarTarea, obtenerTareas, modificarEstadoTarea, guardarTareaActual } = tareasContext;

  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext;

  //funcion que se ejecuta cuando el usr presiona el boton de eliminar
  const eliminar = (id) => {
    eliminarTarea(id)
    obtenerTareas(proyecto[0].id);
  }

  //funcion para modificar estado tarea
  const cambiarEstado = tareaActual => {
    if (tarea.estado) {
      tarea.estado = false
    } else {
      tarea.estado = true
    }
    modificarEstadoTarea(tareaActual)
  }

  //funcion para guardar tarea actual
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
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
