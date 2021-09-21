import React, { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext'
import autenticacionContext from "../../context/autenticacion/autenticacionContext";


const Login = (props) => {

  //extraer valores del context
  const alertaContext = useContext(AlertaContext)
  const authContext = useContext(autenticacionContext)

  const { iniciarSesion, mensaje, autenticado } = authContext
  const { alerta, mostrarAlerta } = alertaContext;

  //en caso de que el usuario o password no exista
  useEffect(() => {
    if (autenticado) {
        props.history.push('/proyectos')
    }
    if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
}, [mensaje, autenticado, props.history])



  //state de usuario
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  //extraer de usuario
  const { email, password } = usuario;
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
    if (email.trim() === '' ||
      password.trim() === '') {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
      return;
    }
    //pasarlo al action
    iniciarSesion({ email, password })
  };

  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Inicia Sesión</h1>
        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
