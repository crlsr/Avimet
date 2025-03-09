import * as React from "react";
import styles from "./AvilaMountain.module.css";
import ProductCarousel from "../productCarousel/ProductCarousel";
import image from '../../assets/background-avila.jpg'

function AvilaMountainHero() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.Carousel}>
          <ProductCarousel 
            images={[image,image,image,image,image,image,image,image]}
            className=""
          />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <article className={styles.contentWrapper}>
          <h1 className={styles.title}>
            <span className={styles.titleStart}>El Ávila, </span>
            <span className={styles.titleEnd}>
              el Guardian Natural de Caracas
            </span>
          </h1>
          <p className={styles.description}>
            El Ávila, oficialmente conocido como el Parque Nacional Waraira
            Repano, es mucho más que un ícono de la ciudad de Caracas: es un
            escudo protector que combina belleza natural, biodiversidad y un
            espacio de esparcimiento para quienes buscan desconectarse del ritmo
            urbano.
          </p>
        </article>
      </div>
    </div>
  );
}

export default AvilaMountainHero;
