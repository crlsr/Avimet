import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import appFirebase from "../../../credenciales";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Navbar.module.css";
import global from "../../global.module.css";
import avimetLogo from "../../assets/avimet-logo.png";
import profilePhoto from "../../assets/foto-predeterminada.png";

const auth = getAuth(appFirebase);

export default function Navbar() {
  const navigation = useNavigate();
  const { logged, profile } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li>
            <Link to="/">
              <img src={avimetLogo} alt="Avimet" />
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navbar_link}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/profile" className={styles.navbar_link}>
              Destinos
            </Link>
          </li>
          <li>
            {logged ? (
              <Link to="/" className={styles.navbar_link}>
                Reserva tu viaje
              </Link>
            ) : (
              <Link to="/login" className={styles.navbar_link}>
                Reserva tu viaje
              </Link>
            )}
          </li>
          <li>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.search_input}
            />
          </li>
          <li>
            <div className={styles.auth_container}>
              {logged ? (
                <>
                  <Link to="/profile">
                    <img className={styles.user_info} src={profilePhoto} alt={profile.email}></img>
                  </Link>
                  <button className={global.btn3} onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={global.btn3}
                    onClick={() => navigation("/login")}
                  >
                    Iniciar Sesión
                  </button>
                </>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
