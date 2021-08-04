import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    agregarProyecto,
    errorFormulario,
    mostrarError,
  } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  //extraer nombre de proyecto
  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usurio envie el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);

    //reiniciar el form
    setProyecto({
      nombre: "",
    });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorFormulario ? (
        <p className="mensaje error">El nombre del proyecto es obbligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
