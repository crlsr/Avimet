import React from 'react';
import "./LoginSignup.css";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import TarjetaDestinos, { destinosData } from "../components/TarjetaDestinos/TarjetaDestinos";
import TarjetaMisionVision from "../components/TarjetaMisionVision/TarjetaMisionVision";

const Home = () => {
    return (
        <>
        <div className="container">
            <h1>Bienvenido</h1>
            <ProductCarousel/>
        </div>
        {/* Sección de tarjetas de información */}
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
      <div>
        <TarjetaMisionVision />
      </div>
        </>

    )
}

export default Home
