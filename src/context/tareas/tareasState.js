import React, { useReducer } from "react";
import tareaContext from "./tareasContext";
import TareaReducer from "./tareasReducer";
import {
  TAREAS_PROYECTOS,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  VALIDAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";
import { v4 as uuidv4 } from "uuid";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, proyectoId: 2, nombre: "elegir color", estado: false },
      { id: 2, proyectoId: 1, nombre: "elegir plataforma", estado: true },
      { id: 3, proyectoId: 3, nombre: "cambiar estado", estado: true },
      { id: 4, proyectoId: 2, nombre: "elegir color", estado: false },
      { id: 5, proyectoId: 3, nombre: "cambiar estado", estado: true },
      { id: 6, proyectoId: 1, nombre: "elegir plataforma", estado: true },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaSeleccionada: null,
  };

  //crear dispatch
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //CREAR LAS FUNCIONES
  //obtener las tareas de un proyecto en especifico
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTOS,
      payload: proyectoId,
    });
  };

  //AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREAS,
      payload: tarea,
    });
  };

  //validar y muestra error formulario tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eliminar tarea
  const eliminarTarea = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId,
    });
  };

  //modificar estado de tarea
  const modificarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //EXTRAE UNA TAREA PARA EDICION
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //Actualizar Tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //elimina la tareaSeleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        modificarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
