import React, { useContext, useEffect } from "react";
import AutenticacionContext from "../../context/autenticacion/autenticacionContext";

const Barra = () => {

  const authContext = useContext(AutenticacionContext)
  const { obtenerUsuarioAutenticado, usuario } = authContext;

  useEffect(() => {
    obtenerUsuarioAutenticado()
  }, [])

  return (
    <header className="app-header">
      {usuario ? <p className="nombre-usuario">
        Hola <span>{usuario.usuario.nombre}</span>
      </p> : null}
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </header>
  );
};

export default Barra;
