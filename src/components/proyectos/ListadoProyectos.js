import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda virtual" },
    { nombre: "Tienda de animales" },
    { nombre: "Tienda de tecnologia" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((p) => (
        <Proyecto proyecto={p}></Proyecto>
      ))}
    </ul>
  );
};

export default ListadoProyectos;
