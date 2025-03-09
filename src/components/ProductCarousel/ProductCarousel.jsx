import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import styles from './ProductCarousel.module.css';

/* import image1 from '../../assets/Avila.png.jpg';
import image2 from '../../assets/Avila.png.jpg';
import image3 from '../../assets/Avila.png.jpg';
import image4 from '../../assets/Avila.png.jpg';
import image5 from '../../assets/Avila.png.jpg';
import image6 from '../../assets/Avila.png.jpg';
import image7 from '../../assets/Avila.png.jpg';
import image8 from '../../assets/Avila.png.jpg'; */

function ProductCarousel( {images = [], className = "" } ) {
    const productos = [
        { id: 1, name: 'xx', image: images[0]},
        { id: 2, name: 'xx', image: images[0] },
        { id: 3, name: 'xx', image: images[0] },
        { id: 4, name: 'xx', image: images[0] },
        { id: 5, name: 'xx', image: images[0] },
        { id: 6, name: 'xx', image: images[0] },
        { id: 7, name: 'xx', image: images[0] },
        { id: 8, name: 'xx', image: images[0] },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: className == "mediumCarousel" ? 4 : 8,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2500,
        sEase: "linear", // Movimiento suave
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: className == "mediumCarousel" ? 3 : 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: className == "mediumCarousel" ? 1 : 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.contenedorCarrusel}>
            <div className={styles.tarjetaCarrusel}>
                <Slider {...settings}>
                    {productos.map((d, index) => (
                        <div className={styles.contenedor} key={d.id}>
                            <div className={styles.contenedorImagen}>
                                <img
                                    className={`${styles.imagen} ${styles?.[className]} ${index % 2 === 0 ? styles.imagenPar : styles.imagenImpar}`}
                                    src={d.image}
                                />
                            </div>
                            <div className={styles.descripcion}>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProductCarousel;
