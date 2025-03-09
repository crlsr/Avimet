import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarruselConsejos.css';

// Importa las imágenes que vas a usar
import imagen1 from '../../assets/Avila.png.jpg';
import imagen2 from '../../assets/Avila.png.jpg';
import imagen3 from '../../assets/Avila.png.jpg';
import imagen4 from '../../assets/Avila.png.jpg';
import imagen5 from '../../assets/Avila.png.jpg';

const consejos = [
  {
    id: 1,
    titulo: "Consejo 1",
    descripcion: "Descripción del consejo 1. Aquí va información útil para los aventureros.",
    imagen: imagen1
  },
  {
    id: 2,
    titulo: "Consejo 2",
    descripcion: "Descripción del consejo 2. Más información útil para los aventureros.",
    imagen: imagen2
  },
  {
    id: 3,
    titulo: "Consejo 3",
    descripcion: "Descripción del consejo 3. Consejos adicionales para una mejor experiencia.",
    imagen: imagen3
  },
  {
    id: 4,
    titulo: "Consejo 4",
    descripcion: "Descripción del consejo 4. Información importante para la seguridad.",
    imagen: imagen4
  },
  {
    id: 5,
    titulo: "Consejo 5",
    descripcion: "Descripción del consejo 5. Últimos consejos para disfrutar al máximo.",
    imagen: imagen5
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CarruselConsejos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carrusel-consejos">
      <Slider {...settings}>
        {consejos.map((consejo) => (
          <div key={consejo.id} className="tarjeta-consejo">
            <img src={consejo.imagen} alt={consejo.titulo} className="imagen-consejo" />
            <h3 className="titulo-consejo">{consejo.titulo}</h3>
            <p className="descripcion-consejo">{consejo.descripcion}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarruselConsejos;