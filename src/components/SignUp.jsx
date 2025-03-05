import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";
import image from "../assets/montana-login.png";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

/*
// Importar modulos de firebase para verificar datos
import { collection, addDoc } from "firebase/firestore";
import { db } from "../credenciales";


// Función para validar el email dentro de la base de datos
const validateEmail = () => {
  //event.preventDefault();
  //alert("Usuario no registrado");
};

// Función para agregar un usuario a la base de datos
const addUser = async () => {}
*/

// Función para registrar un usuario con Google
const signUpGoogle = () => {}

// Función para registrar un usuario con Facebook
const signUpFacebook = () => {}



const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <>
      <div className="container">
        <h1>Regístrate y sé un aventurero más</h1>
        <div className="login-box">
          <h2>Crear Usuario</h2>
          <form>
            <input className="input-field" type="text" placeholder="Nombre y Apellido" required />
            <input className="input-field" type="text" placeholder="Email" required />
            <input className="input-field" type="text" placeholder="Teléfono" required />

            {/* Input de contraseña con icono dentro */}
            <div className="input-wrapper">
              <input
                className="input-field password-input"
                type={passwordVisible ? "text" : "password"}
                placeholder="Contraseña (min. 8 caracteres)"
                required
              />
              <span className="eye-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="input-wrapper">
              <input
                className="input-field password-input"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Repetir contraseña"
                required
              />
              <span className="eye-icon" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="btn1" type="submit">Crear Cuenta</button>
          </form>
          <div className="social-login">
            <button className="btn2" onClick={signUpGoogle}>
              <img src={googleLogo} alt="Google" className="icon"/>
              Registrarme con Google
            </button>
            <button className="btn2" onClick={signUpFacebook}>
              <img src={facebookLogo} alt="Facebook" className="icon" />
              Registrarme con Facebook
            </button>
          </div>
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="Montaña" className="image_mountain" />
      </div>
    </>
  );
};

export default SignUp;
