import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { v4 as uuidv4 } from 'uuid';
import { FORMULARIO_PROYECTO } from '../../types';
import { OBTENER_PROYECTOS, ELIMINAR_PROYECTO } from '../../types';
import { AGREGAR_PROYECTOS, VALIDAR_FORMULARIO, PROYECTO_ACTUAL } from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: "Tienda virtual" },
        { id: 2, nombre: "Tienda de animales" },
        { id: 3, nombre: "Tienda de tecnologia" }
    ]

    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false,
        proyecto: null
    }

    //  Distpatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }

    //VALIDAR FORMULARIO
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que el usuario dio click
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //ELIMINA UN PROYECTO
    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;