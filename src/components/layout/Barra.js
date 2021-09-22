import React, { useContext, useEffect } from "react";
import AutenticacionContext from "../../context/autenticacion/autenticacionContext";

const Barra = () => {

  const authContext = useContext(AutenticacionContext)
  const { obtenerUsuarioAutenticado, usuario, cerrarSesion } = authContext;

  useEffect(() => {
    obtenerUsuarioAutenticado()
  }, [obtenerUsuarioAutenticado])

  return (
    <header className="app-header">
      {usuario ? <p className="nombre-usuario">
        Hola <span>{usuario.usuario.nombre}</span>
      </p> : null}
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Barra;
