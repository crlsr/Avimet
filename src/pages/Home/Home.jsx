import React from "react";
import styles from "./Home.module.css";

import MainCard from "../../components/MainCardSection/MainCardSection";
import AvilaMountain from "../../components/AvilaMountain/AvilaMountain";
import TarjetaDestinos, { destinosData } from "../../components/TarjetaDestinos/TarjetaDestinos";
import TarjetaNoticias, { noticiasData } from "../../components/TarjetaNoticias/TarjetaNoticias";
import VisionMissionSection from "../../components/VisionMissionSection/VisionMissionSection";
import CarruselConsejos from "../../components/CarruselConsejos/CarruselConsejos";



const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container1}>
          <MainCard />
        </div>
        <div className={styles.container2}>
          <AvilaMountain />
        </div>
        <div className="tarjetas-container">
        {destinosData.map((destino, index) => (
          <TarjetaDestinos
            key={index}
            imagen={destino.imagen}
            titulo={destino.titulo}
            descripcion={destino.descripcion}
            colorClase={destino.colorClase} // Pasa la clase de color aquí
          />
        ))}
        </div>
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
        <div className={styles.container3}>
          <VisionMissionSection />
      </div>
      <div className="carruselconsejos-container">
              <h2>Consejos para Aventureros</h2>
              <CarruselConsejos />
            </div>
      </div>
    </>
  );
};

export default Home;
