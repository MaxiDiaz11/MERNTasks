import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {

  const proyectosContext = useContext(proyectoContext)
  const { proyectos, obtenerProyectos, mensaje } = proyectosContext;

  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  //obtener proyectos cuando cargue el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje])

  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

  return (
    <ul className="listado-proyectos">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>Error al eliminar el proyecto</div>) : null}
      <TransitionGroup>
        {proyectos.map((p) => (
          <CSSTransition key={p._id} timeout={200} classNames="proyecto"><Proyecto proyecto={p}></Proyecto></CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
