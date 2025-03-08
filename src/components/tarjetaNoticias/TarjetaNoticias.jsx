import React from "react";
import "./TarjetaNoticias.css";
import image1 from '../../assets/Avila.png.jpg';


const TarjetaNoticias = ({ imagen, titulo, fecha, descripcion }) => {
  return (
    <div className="tarjeta-noticia">
      <div
        className="imagen-fondo"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>
      <div className="contenido">
        <span className="fecha">{fecha}</span>
        <h2 className="titulonoticias">{titulo}</h2>
        <p className="descripcion">{descripcion}</p>
        <button className="boton">Ver más</button>
      </div>
    </div>
  );
};

export default TarjetaNoticias;

// Example data for the cards
export const noticiasData = [
  {
    imagen: image1,
    titulo: "Proyecto Ávila Inaugura Vivero Ecoeficiente",
    fecha: "10.07.2022",
    descripcion:
      "El Proyecto Ávila ha inaugurado un vivero ecoeficiente diseñado para producir al menos 5.000 plantas anuales. El vivero utiliza un sistema de riego interno interconectado con el sistema hídrico del cortafuego verde, manejado por gravedad y con aspersores."
  },
  {
    imagen: image1,
    titulo: "UNIMET, la universidad más sustentable de Venezuela",
    fecha: "10.07.2022",
    descripcion:
      "La Universidad Metropolitana, asumiendo con responsabilidad las mejoras para dar respuestas a los desafíos globales y locales, nuevamente ve premiado su esfuerzo durante el 2023, al ser reconocida como el primer campus sustentable del país."
  },

];