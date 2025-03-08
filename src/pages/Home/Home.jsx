import React from "react";
import styles from "./Home.module.css";

import MainCard from "../../components/MainCardSection/MainCardSection";
import AvilaMountain from "../../components/AvilaMountain/AvilaMountain";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

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
      </div>
    </>
  );
};

export default Home;
