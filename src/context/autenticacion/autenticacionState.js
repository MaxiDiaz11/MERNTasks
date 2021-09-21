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
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

const AutenticacionState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(autenticacionReducer, initialState);

    //funciones
    const registrarUsuario = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos)
            console.log(respuesta.data)
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.usuario
            })
            //obtener el usuario
            obtenerUsuarioAutenticado()
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    const obtenerUsuarioAutenticado = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            tokenAuth(token)
            try {
                const respuesta = await clienteAxios.get('/api/auth')
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
                dispatch({
                    type: LOGIN_ERROR
                })
            }
        }
    }

    const iniciarSesion = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            obtenerUsuarioAutenticado()
        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    return (
        <autenticacionContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion
            }}
        >
            {props.children}
        </autenticacionContext.Provider>
    )
}

export default AutenticacionState;