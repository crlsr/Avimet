import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import image from "../assets/montana-login.png";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import appFirebase from "../../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
  const navigation = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const functAuthentication = async (e) => {
    e.preventDefault();
    try {
      if ((email, password == "")) {
        setError("Complete todos los campos solicitados");
        return;
      }
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setLoading(false);
      navigation("/");
      console.log(user.user.email);
    } catch (error) {
      setLoading(false);
      if (error.message == "Firebase: Error (auth/invalid-credential).") {
        setError("Usuario no existente. Email o contraseña inválida");
      } else if (
        error.message == "Firebase: Error (auth/network-request-failed)."
      ) {
        setError("Opss. Revise su conexión a Internet");
      }
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Bienvenido/a a tu guía aventurera</h1>
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={functAuthentication} onChange={() => setError("")}>
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
            />
            <div className="input-wrapper">
              <input
                className="input-field password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"} //"password"
                placeholder="Contraseña"
                id="password"
              />
              <span
                className="eye-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
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
            <button className="btn1" type="submit">
              Iniciar Sesión
            </button>
          </form>
          <div className="social-login">
            <button className="btn2">
              <img src={googleLogo} alt="Google" className="icon" />
              Iniciar sesión con Google
            </button>
            <button className="btn2">
              <img src={facebookLogo} alt="Facebook" className="icon" />
              Iniciar sesión con Facebook
            </button>
          </div>
          <p>
            ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
          </p>

          {loading && <div className="loading">Cargando...</div>}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="Montaña" className="image_mountain" />
      </div>
    </>
  );
};

export default Login;
