import React from "react";
import styles from "./TarjetaDestinos.module.css";
import image1 from '../../assets/Avila.png.jpg'

const TarjetaDestinos = ({ imagen, titulo, descripcion, colorClase }) => {
  return (
    <div className={`${styles.tarjetaDestino} ${styles[colorClase]}`}>
      <img src={imagen} alt={titulo} className={styles.imagenDestino} />
      <div className={styles.contenidoDestino}>
        <h2 className={styles.tituloDestino}>{titulo}</h2>
        <p className={styles.descripcionDestino}>{descripcion}</p>
        <button className={styles.botonMasInfo}>Más información</button>
      </div>
    </div>
  );
};

export default TarjetaDestinos;

export const destinosData = [
    {
        imagen: image1,
        titulo: "Quebrada Quintero",
        descripcion: "La Quebrada Quintero, cerca de Municipio Sucre, Miranda, es un bellísimo destino paradisíaco lleno de rocas y un ambiente natural perfecto para disfrutar junto a amigos o familia. Esta ruta de 6.3 km tarda alrededor de 2h 38 m en ser recorrida, no suele ser un recorrido muy movido, siendo una de las rutas más sencillas de realizar si solo deseas pasar un buen rato.",
        colorClase: "darkgreen" 
    },
    {
        imagen: image1,
        titulo: "Quebrada Quintero",
        descripcion: "La Quebrada Quintero, cerca de Municipio Sucre, Miranda, es un bellísimo destino paradisíaco lleno de rocas y un ambiente natural perfecto para disfrutar junto a amigos o familia. Esta ruta de 6.3 km tarda alrededor de 2h 38 m en ser recorrida, no suele ser un recorrido muy movido, siendo una de las rutas más sencillas de realizar si solo deseas pasar un buen rato.",
        colorClase: "lightgreen" 
    },
];