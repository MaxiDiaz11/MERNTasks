import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {


  const proyectosContext = useContext(proyectoContext)
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener proyectos cuando cargue el componente
  useEffect(() => {
    obtenerProyectos();
  }, [])

  if (proyectos.lenght === 0) return null

  return (
    <ul className="listado-proyectos">
      {proyectos.map((p) => (
        <Proyecto key={p.id} proyecto={p}></Proyecto>
      ))}
    </ul>
  );
};

export default ListadoProyectos;
