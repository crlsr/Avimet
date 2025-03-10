import React from "react";
import "./auth/LoginSignup.css";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import TarjetaDestinos, { destinosData } from "../components/tarjetaDestinos/TarjetaDestinos";
import TarjetaMisionVision from "../components/tarjetaMisionVision/TarjetaMisionVision";
import TarjetaNoticias, { noticiasData } from "../components/TarjetaNoticias/TarjetaNoticias";
import TarjetaHome, { homeData } from "../components/tarjetaHome/TarjetaHome";
import InputBG from "../components/commentSection/InputBG";

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
      <div className="tarjetasnoticias-container">
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
        <div className="tarjeta-home-container">
          <TarjetaHome
            titulo={homeData.titulo}
            subtitulo={homeData.subtitulo}
            botonTexto={homeData.botonTexto}
            imagen={homeData.imagen}
          />
        </div>

        <div>
          <InputBG />
        </div>
        
        </>

    )
}

export default Home



