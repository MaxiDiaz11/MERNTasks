import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext'

const NuevaCuenta = () => {

    //extraer valores del context
    const alertaContext = useContext(AlertaContext)

    const { alerta, mostrarAlerta } = alertaContext;

    //state de usuario
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: ""
    });

    //extraer de usuario
    const { nombre, email, password, confirmar } = usuario;
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (nombre.trim() === '' || email.trim() === '' ||
            password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
            return;
        }

        //password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta("La contraseña debe ser al menos de 6 caracteres.", "alerta-error")
            return;
        }

        //igualdad de passwords
        if (password !== confirmar) {
            mostrarAlerta("Las contraseñas no son iguales.", "alerta-error")
            return;
        }

        //pasarlo al action

    };

    return (
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar"> Confirmar Password</label>
                        <input
                            type="password"
                            name="confirmar"
                            id="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
