import React from "react";
import "./TarjetaMisionVision.css";
import image1 from '../../assets/Avila.png.jpg';

const TarjetaMisionVision = () => {
  return (
    <div className="contenedor-tarjetas">
      {/* Tarjeta Visión */}
      <div className="tarjeta">
        <div className="tarjeta-content">
          <div className="icono">
            <img src={image1} alt="Icono de Visión" style={{ width: '65px', height: '65px' }} />
          </div>
          <div>
            <h2 className="titulo">Visión</h2>
            <p className="texto">
              El objetivo de desarrollar un sitio web accesible e interactivo para la
              gestión de las excursiones en el Parque Nacional El Ávila es crear un
              espacio funcional, el cual incentive la intervención y participación
              activa de la comunidad estudiantil para llevar a cabo actividades al aire
              libre. Este sitio web se convertirá en el punto de encuentro favorito de
              los estudiantes, facilitando la interacción con expertos en el campo,
              difundiendo experiencias de los usuarios y facilitando la organización de
              excursiones.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjeta Misión */}
      <div className="tarjeta">
        <div className="tarjeta-content">
          <div className="icono">
            <img src={image1} alt="Icono de Misión" style={{ width: '65px', height: '65px' }} />
          </div>
          <div>
            <h2 className="titulo">Misión</h2>
            <p className="texto">
              Se planea desarrollar una plataforma web que sea intuitiva y funcional, la
              cual gestione y promueva excursiones estudiantiles realizadas en el Parque
              Nacional El Ávila. De esta manera, se ha de fomentar la vida al aire libre
              y el contacto de los estudiantes con la naturaleza. Mediante esta
              plataforma, los estudiantes (principalmente de la Universidad
              Metropolitana) podrán acceder a información. Al poseer la mayor cantidad
              de detalles acerca de guías especializados, rutas y servicios adicionales,
              propiciará el crecimiento de una sociedad participativa e interesada en
              las exploraciones del entorno natural.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaMisionVision;