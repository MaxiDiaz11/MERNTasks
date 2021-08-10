import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareasContext";
const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext)
  const { tareaSeleccionada, agregarTarea, validarTarea, errorTarea, obtenerTareas,
    actualizarTarea, limpiarTarea } = tareasContext;

  //state del formulario
  const [tarea, setTarea] = useState({
    nombre: ''
  })

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada)
    } else {
      setTarea({
        nombre: ''
      })
    }
  }, [tareaSeleccionada])

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //revisar si es edicion
    if (tareaSeleccionada === null) {
      //agregar nueva tarea al state de tarea
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea)
      limpiarTarea()
    }

    //obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //reiniciar el form
    setTarea({
      nombre: ""
    })
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            className="input-text"
            placeholder="Nombre tarea..."
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errorTarea ? <p className="mensaje error">El nombre no puede estar vacio</p> : null}
    </div>
  );
};

export default FormTarea;
