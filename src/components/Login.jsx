import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";
import image from "../assets/montana-login.png";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Importar modulos de firebase para autentificación
import { authProviders, providerGoogle, providerFacebook } from "../credenciales";
import { signInWithPopup } from "firebase/auth";

const facebookClick = () => {
  signInWithPopup(authProviders, providerFacebook).then((result) => {
      console.log(result); // Falta comprobar la informacion del usuario en la base de datos
    })
    .catch((error) => {
      console.log(error);
    });
};

const googleClick = () => {
  signInWithPopup(authProviders, providerGoogle).then((result) => {
      console.log(result); // Falta comprobar la informacion del usuario en la base de datos
    })
    .catch((error) => {
      console.log(error);
    });
};

function validateExistentUser() {
  //event.preventDefault();
  //alert("Usuario no registrado");
}

const Login = () => {
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
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
            <div className="input-wrapper">
              <input
                className="input-field password-input"
                type={passwordVisible ? "text" : "password"}
                placeholder="Contraseña"
                required
              />
              <span className="eye-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="options">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>Recuérdame</p>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button className="btn1" type="submit" onClick={validateExistentUser}>
              Iniciar Sesión
            </button>
          </form>
          <div className="social-login">
            <button className="btn2" onClick={googleClick} >
              <img src={googleLogo} alt="Google" className="icon" />
              Iniciar sesión con Google
            </button>
            <button className="btn2" onClick={facebookClick} >
              <img src={facebookLogo} alt="Facebook" className="icon"/>
              Iniciar sesión con Facebook
            </button>
          </div>
          <p>
            ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="Montaña" className="image_mountain" />
      </div>
    </>
  );
};

export default Login;
