import React from 'react'
import styles from './DestinationForm.module.css'
import global from "../../global.module.css";
import { useState } from 'react';
import ImageInput from '../imageInput/ImageInput';

export default function DestinationForm( { new: isNew, destinationObject, guides = [], categories } ) {
    const [destination, setDestination] = useState(isNew ? "" : destinationObject?.destination);
    const [title, setTitle] = useState(isNew ? "" : destinationObject?.title);
    const [distance, setDistance] = useState(isNew ? "" : destinationObject?.distance);
    const [estimatedTime, setEstimatedTime] = useState(isNew ? "" : destinationObject?.estimatedTime);
    const [descriptionTitle, setDescriptionTitle] = useState(isNew ? "" : destinationObject?.descriptionTitle);
    const [difficulty, setDifficulty] = useState(isNew ? "" : destinationObject?.difficulty);
    const [description, setDescription] = useState(isNew ? "" : destinationObject?.description);
    const [mainImage, setMainImage] = useState(isNew ? "" : destinationObject?.images.bannerUrl);
    const [mapImage, setMapImage] = useState(isNew ? "" : destinationObject?.images.mapUrl);
    const [descriptionImage, setDescriptionImage] = useState(isNew ? "" : destinationObject?.images.descriptionUrl);
    const [carouselImage1, setCarouselImage1] = useState(isNew ? "" : destinationObject?.images.carouselUrls[0]);
    const [carouselImage2, setCarouselImage2] = useState(isNew ? "" : destinationObject?.images.carouselUrls[1]);
    const [carouselImage3, setCarouselImage3] = useState(isNew ? "" : destinationObject?.images.carouselUrls[2]);
    const [carouselImage4, setCarouselImage4] = useState(isNew ? "" : destinationObject?.images.carouselUrls[3]);

    function notDifficulty(cat) {
        if (cat.nombre != 'Fácil' && cat.nombre != 'Intermedio' && cat.nombre != 'Difícil'){
            return cat;
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.textInputs}>
                        <label className={styles.label}>
                            Nombre del Destino
                        </label>
                        <input
                            className={global.input_field}
                            type="text"
                            placeholder='Nombre del Destino'
                            maxLength={20}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        <label className={styles.label}>
                            Nombre del Destino
                        </label>
                        <input
                            className={global.input_field}
                            type="text"
                            placeholder='Titulo de Página'
                            maxLength={35}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className={styles.abtInputs}>
                            <div className={styles.abtInputs}>
                                <div className={styles.labelInput}>
                                    <label className={styles.label}>
                                        Nombre del Destino
                                    </label>
                                    <input
                                        className={`${global.input_field} ${styles.abt}`}
                                        type="text"
                                        placeholder='XX,X km'
                                        maxLength={7}
                                        value={distance}
                                        onChange={(e) => setDistance(e.target.value)}
                                    />
                                </div>
                                <div className={styles.labelInput}>
                                    <label className={styles.label}>
                                        Nombre del Destino
                                    </label>
                                    <input
                                        className={`${global.input_field} ${styles.abt}`}
                                        type="text"
                                        placeholder='XX h XX min'
                                        maxLength={12}
                                        value={estimatedTime}
                                        onChange={(e) => setEstimatedTime(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div>
                                <label className={styles.label}>
                                    Dificultad
                                </label>
                                <select className={`${styles.selector} ${styles.difficulty}`} required>
                                    <option key={1} value={'Fácil'}>Fácil</option>
                                    <option key={2} value={'Intermedio'}>Intermedio</option>
                                    <option key={3} value={'Difícil'}>Difícil</option>
                                </select>
                            </div>
                        </div>
                        <label className={styles.label}>
                            Guía de Ruta
                        </label>
                        <select className={styles.selector} required>
                            <option key={0} value={null}>Seleccione un guía</option>
                            {guides?.map((guide) => (
                                <option key={guide.uid} value={guide.uid}>{guide.name}</option>
                            ))}
                        </select>
                        <label className={styles.label}>
                                Categoría
                        </label>
                        <select className={styles.selector} required>
                            <option key={0} value={null}>Seleccione una categoría</option>
                            {categories?.filter(notDifficulty)?.map((category) => (
                                <option key={category.nombre} value={category.nombre}>{category.nombre}</option>
                            ))}
                        </select>
                        <label className={styles.label}>
                                Título de la Descripción
                        </label>
                        <input
                            className={global.input_field}
                            type="text"
                            placeholder='Título de la Descripción'
                            maxLength={25}
                            value={descriptionTitle}
                            onChange={(e) => setDescriptionTitle(e.target.value)}
                        />
                        <label className={styles.label}>
                                Descripción
                        </label>
                        <textarea 
                            className={`${styles.textarea} ${global.input_field}`}
                            type="text"
                            placeholder='Escribir aquí una Descripción'
                            maxLength={450}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className={styles.imageInputs}>
                        <label className={styles.label}>Imagen Principal</label>
                        <ImageInput 
                            className={'previewMain'}
                            file={mainImage}
                            setFile={setMainImage}
                            inputId="mainImage"
                        />
                        <div className={styles.subImages}>
                            <div>
                                <label className={styles.label}>Mapa Ruta</label>
                                <ImageInput 
                                    className={'previewSub'}
                                    file={mapImage}
                                    setFile={setMapImage}
                                    inputId="mapImage"
                                />
                            </div>
                            <div>
                                <label className={styles.label}>Imagen Descripción</label>
                                <ImageInput 
                                    className={'previewSub'}
                                    file={descriptionImage}
                                    setFile={setDescriptionImage}
                                    inputId="descriptionImage"
                                />
                            </div>
                        </div>
                        <label className={styles.label}>Imágenes Carrusel</label>
                        <div className={styles.subImages}>
                            <ImageInput 
                                className={'previewBottom'}
                                file={carouselImage1}
                                setFile={setCarouselImage1}
                                inputId="carouselImage1"
                            />
                            <ImageInput 
                                className={'previewBottom'}
                                file={carouselImage2}
                                setFile={setCarouselImage2}
                                inputId="carouselImage2"
                            />
                            <ImageInput 
                                className={'previewBottom'}
                                file={carouselImage3}
                                setFile={setCarouselImage3}
                                inputId="carouselImage3"
                            />
                            <ImageInput 
                                className={'previewBottom'}
                                file={carouselImage4}
                                setFile={setCarouselImage4}
                                inputId="carouselImage4"
                            />
                        </div>
                    </div>
                </div>
                <button className={`${styles.submitBtn} btn-primary`} type='submit'>Guardar Ruta</button>
            </form>
        </div>
            )
}