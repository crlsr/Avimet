import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../../../credenciales";

import styles from "./Navbar.module.css";
import global from "../../global.module.css";
import avimetLogo from "../../assets/avimet-logo.png";
import profilePhoto from "../../assets/foto-predeterminada.png";
import { IoIosSearch } from "react-icons/io";

const auth = getAuth(appFirebase);

export const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logged, profile } = useContext(UserContext);
  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.mobileHeader}>
        <Link to="/">
          <img src={avimetLogo} alt="Avimet" className={styles.logoMobile} />
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={styles.menuHeader}>
          <span className={styles.closeIcon} onClick={toggleMenu}>
            ✖
          </span>
        </div>

        <ul className={styles.menuList}>
          <li>
            <Link to="/" className={styles.navbar_link} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={styles.navbar_link}
              onClick={toggleMenu}
            >
              Destinos
            </Link>
          </li>
          <li>
            {logged ? (
              <Link to="/reserve" className={styles.navbar_link} onClick={toggleMenu}>
                Reserva tu viaje
              </Link>
            ) : (
              <Link
                to="/login"
                className={styles.navbar_link}
                onClick={toggleMenu}
              >
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
      </div>
    </div>
  );
};
