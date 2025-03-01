import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Bienvenido/a a tu guía aventurera</h1>
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Email o Usuario"
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Contraseña"
            required
          />
          <div className="options">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Recuérdame</p>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button className="btn1" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <div className="social-login">
          <button className="btn2">Iniciar sesión con Google</button>
          <button className="btn2">Iniciar sesión con Facebook</button>
        </div>
        <p>
          No tienes una cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
