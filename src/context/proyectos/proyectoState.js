import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';
import { OBTENER_PROYECTOS } from '../../types';


const ProyectoState = props => {

    const proyectos = [{ id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Tienda de animales" },
    { id: 3, nombre: "Tienda de tecnologia" }]

    const initialState = {
        formulario: false,
        proyectos: [
        ]
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

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                mostrarFormulario,
                obtenerProyectos
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;