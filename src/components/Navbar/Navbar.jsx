import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import appFirebase from "../../../credenciales";
import { getAuth, signOut } from "firebase/auth";

import styles from "./Navbar.module.css";
import global from "../../global.module.css";
import avimetLogo from "../../assets/avimet-logo.png";
import profilePhoto from "../../assets/foto-predeterminada.png";
import { IoIosSearch } from "react-icons/io";

import { MenuHamburguesa } from "./HamNavbar";

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
          <li className={styles.logo}>
            <Link to="/">
              <img src={avimetLogo} alt="Avimet" />
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navbar_link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className={styles.navbar_link}>
              Destinos
            </Link>
          </li>
          <li>
            {logged ? (
              <Link to="/reserve" className={styles.navbar_link}>
                Reserva tu viaje
              </Link>
            ) : (
              <Link to="/login" className={styles.navbar_link}>
                Reserva tu viaje
              </Link>
            )}
          </li>
          <li className={styles.search_container}>
            <IoIosSearch className={styles.search_icon} />
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
                    <img
                      className={styles.user_info}
                      src={profilePhoto}
                      alt={profile.email}
                    />
                  </Link>
                  <button className={global.btn3} onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className={global.btn3}
                  onClick={() => navigation("/login")}
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </li>
        </ul>
        <MenuHamburguesa />
      </nav>
      <Outlet />
    </>
  );
}
