import React, { useReducer } from 'react'
import autenticacionContext from './autenticacionContext'
import autenticacionReducer from './autenticacionReducer'
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from '../../types'

const AutenticacionState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(autenticacionReducer, initialState);

    //funciones
    

    return (
        <autenticacionContext.Provider
            value={{
                token: localStorage.getItem('token'),
                autenticado: null,
                usuario: null,
                mensaje: null
            }}
        >
            {props.children}
        </autenticacionContext.Provider>
    )
}

export default AutenticacionState;