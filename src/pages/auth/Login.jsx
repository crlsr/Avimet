import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import global from "../../global.module.css";
import image from "../../assets/montana-login.png";
import googleLogo from "../../assets/google.png";
import facebookLogo from "../../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import appFirebase from "../../../credenciales";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import {
  authProviders,
  providerGoogle,
  providerFacebook,
} from "../../../credenciales";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Login = () => {
  const navigation = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (savedUser) {
      setEmail(savedUser.email);
      setPassword(savedUser.password);
      setRememberMe(true);
    }
  }, []);

  const googleClick = async () => {
    try {
      const result = await signInWithPopup(authProviders, providerGoogle);
      const userDoc = await getDoc(doc(db, "users", result.user.uid));
      if (userDoc.exists()) {
        navigation("/");
      } else {
        setError("Usuario no registrado. Asegúrese de registrarse primero.");
        await auth.signOut();
      }
    } catch (error) {
      setError("Error al iniciar sesión con google: " + error.message);
    }
  };

  const facebookClick = async () => {
    try {
      const result = await signInWithPopup(authProviders, providerFacebook);
      const userDoc = await getDoc(doc(db, "users", result.user.uid));
      if (userDoc.exists()) {
        navigation("/");
      } else {
        setError("Usuario no registrado. Asegúrese de registrarse primero.");
        await auth.signOut();
      }
    } catch (error) {
      setError("Error al iniciar sesión con facebook: " + error.message);
    }
  };

  const functAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("Complete todos los campos solicitados");
        return;
      }
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ email, password }));
      } else {
        localStorage.removeItem('rememberedUser');
      }
      setEmail("");
      setPassword("");
      setLoading(false);
      navigation("/");
      console.log(user.user.email);
    } catch (error) {
      setLoading(false);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Usuario no existente. Email o contraseña inválida");
      } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
        setError("Opss. Revise su conexión a Internet");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <h1>Bienvenido/a a tu guía aventurera</h1>
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={functAuthentication} onChange={() => setError("")}>
            <input
              className={global.input_field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
            />
            <div className="input-wrapper">
              <input
                className={global.password_input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
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
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
              <p>Recuérdame</p>
              <p><Link to="/password-recovery">¿Olvidaste tu contraseña?</Link></p> 
            </div>
            <button className="btn-primary auth-btn" type="submit">
              Iniciar Sesión
            </button>
          </form>
          <div className="social-login">
            <button className="btn-secondary auth-btn social-auth-btn" onClick={googleClick}>
              <img src={googleLogo} alt="Google" className="icon" />
              Iniciar sesión con Google
            </button>
            <button className="btn-secondary auth-btn social-auth-btn" onClick={facebookClick}>
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
    </div>
  );
};

export default Login;