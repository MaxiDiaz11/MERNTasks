import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import autenticacionContext from '../../context/autenticacion/autenticacionContext';

const RutaPrivada = ({ component: Component, ...props }) => {
    const authContext = useContext(autenticacionContext)
    const { autenticado, obtenerUsuarioAutenticado, cargando } = authContext;

    useEffect(() => {
        obtenerUsuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Route
            {...props} render={props => !autenticado && !cargando ? (
                <Redirect to="/"></Redirect>
            ) : (
                <Component {...props}></Component>
            )}
        />

    );
}

export default RutaPrivada;
