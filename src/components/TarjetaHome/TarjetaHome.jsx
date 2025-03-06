import React from "react";
import styles from "./TarjetaHome.module.css";
import imageAvila from '../../assets/Avila.png.jpg';

const TarjetaHome = ({ titulo, subtitulo, botonTexto, imagen }) => {
  // Divide el título en dos partes
  const [primeraParte, ...resto] = titulo.split(" ");

  return (
    <div className={styles.pageContainer}>
      <div className={styles.tarjetaHome}>
        <div className={styles.contenido}>
          <p className={styles.subtitulo}>{subtitulo}</p>
          <h1 className={styles.titulo}>
            <span className={styles.primeraParte}>{primeraParte}</span> {resto.join(" ")}
          </h1>
          <button className={styles.boton}>{botonTexto}</button>
        </div>
        <div className={styles.imagenContainer}>
          <img src={imagen} alt={titulo} className={styles.imagen} />
        </div>
      </div>
    </div>
  );
};

export default TarjetaHome;

// Datos de ejemplo para la tarjeta
export const homeData = {
  imagen: imageAvila,
  titulo: "en El Ávila",
  subtitulo: "Explora tus destinos favoritos",
  botonTexto: "Empieza la aventura"
};