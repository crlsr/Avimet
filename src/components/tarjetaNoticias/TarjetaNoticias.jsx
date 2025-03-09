import React from "react";
import styles from "./TarjetaNoticias.module.css";
import image1 from "../../assets/Avila.png.jpg";

const TarjetaNoticias = ({ titulo, fecha, descripcion }) => {
    /*ESTE PEDAZO DE CODIGO TAMBIEN VA EN LA PAGINA DONDE UTILICEMOS LAS TARJETAS
      <div className={styles.tarjetasnoticias_container}>
          {noticiasData.map((noticia, index) => (
            <TarjetaNoticias
              key={index}
              imagen={noticia.imagen}
              titulo={noticia.titulo}
              fecha={noticia.fecha}
              descripcion={noticia.descripcion}
            />
          ))}
            </div>
        </div>*/
  return (
    <div className={styles.tarjeta_noticia}>
      <div className={styles.contenido}>
        <span className={styles.fecha}>{fecha}</span>
        <h2 className={styles.titulonoticias}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
        <button className={styles.boton}>Ver más</button>
      </div>
    </div>
  );
};

export default TarjetaNoticias;

export const noticiasData = [
  {
    imagen: image1,
    titulo: "Proyecto Ávila Inaugura Vivero Ecoeficiente",
    fecha: "10.07.2022",
    descripcion:
      "El Proyecto Ávila ha inaugurado un vivero ecoeficiente diseñado para producir al menos 5.000 plantas anuales. El vivero utiliza un sistema de riego interno interconectado con el sistema hídrico del cortafuego verde, manejado por gravedad y con aspersores.",
  },
  {
    imagen: image1,
    titulo: "UNIMET, la universidad más sustentable de Venezuela",
    fecha: "10.07.2022",
    descripcion:
      "La Universidad Metropolitana, asumiendo con responsabilidad las mejoras para dar respuestas a los desafíos globales y locales, nuevamente ve premiado su esfuerzo durante el 2023, al ser reconocida como el primer campus sustentable del país.",
  },
];
