import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import image from "../assets/montana-login.png";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//importacion de modulos de firebase
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

//falta hacer la autenticacion con google y facebook
const SignUp = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@correo\.unimet\.edu\.ve$/;
  const phoneRegex = /^\+58-\d{4}-\d{3}-\d{4}$/;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const functAuthentication = async (e) => {
    e.preventDefault();
    try {
      if ((name, email, phone, password, confirmPassword == "")) {
        setError("Complete todos los campos solicitados");
        return;
      }
      if (!emailRegex.test(email)) {
        setError("El correo debe ser @correo.unimet.edu.ve");
        return;
      }
      if (!phoneRegex.test(phone)) {
        setError("El número debe estar en el formato +58-XXXX-XXX-XXXX");
        return;
      }
      if (password != confirmPassword) {
        setError("Validación de contraseña inválida");
        return;
      }

      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
      navigation("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);

      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        setError("El correo ya está en uso");
      } else if (
        error.message == "Firebase: Error (auth/network-request-failed)."
      ) {
        setError("Opss. Revise su conexión a Internet");
      } else if (
        error.message ==
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setError("Su contraseña debe tener por lo menos 6 carácteres");
      } else if (error.message == "Firebase: Error (auth/invalid-email).") {
        setError("Email invalido");
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1>Regístrate y sé un aventurero más</h1>
        <div className="login-box">
          <h2>Crear Usuario</h2>
          <form onSubmit={functAuthentication} onChange={() => setError("")}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              type="text"
              placeholder="Nombre y Apellido"
              id="name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              type="email"
              placeholder="Email"
              id="email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
              type="phone"
              placeholder="Teléfono"
              id="phone"
            />
            <div className="input-wrapper">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field password-input"
                type={passwordVisible ? "text" : "password"}
                placeholder="Contraseña (min. 8 caracteres)"
                id="password"
              />
              <span
                className="eye-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="input-wrapper">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field password-input"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Repetir contraseña"
                id="confirm-password"
              />
              <span
                className="eye-icon"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="btn1" type="submit">
              Crear Cuenta
            </button>
          </form>
          <div className="social-login">
            <button className="btn2">
              <img src={googleLogo} alt="Google" className="icon" />
              Registrarme con Google
            </button>
            <button className="btn2">
              <img src={facebookLogo} alt="Facebook" className="icon" />
              Registrarme con Facebook
            </button>
          </div>
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </p>
        </div>
        {loading && <div className="loading">Cargando...</div>}
        {error && <div className="error">{error}</div>}
      </div>
      <div className="image-container">
        <img src={image} alt="Montaña" className="image_mountain" />
      </div>
    </>
  );
};

export default SignUp;
