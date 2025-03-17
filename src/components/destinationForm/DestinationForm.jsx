import React from 'react'
import styles from './DestinationForm.module.css'
import global from "../../global.module.css";
import { useState } from 'react';

export default function DestinationForm( { new: isNew, destinationObject } ) {
    const [destination, setDestination] = useState(isNew ? "" : destinationObject.destination);
    const [title, setTitle] = useState("");
    const [distance, setDistance] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [descriptionTitle, setDescriptionTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [file, setFile] = useState("")

    React.useEffect(() => {
        const objectUrl = URL.createObjectURL(file)
        setMainImage(objectUrl)
        console.log(mainImage)
    }, [file])

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
                            <select>
            
                            </select>
                        </div>
                        <select>
            
                        </select>
                        <select>
            
                        </select>
                        <input
                            className={global.input_field}
                            type="text"
                            placeholder='Titulo de la Descripción'
                            maxLength={25}
                            value={descriptionTitle}
                            onChange={(e) => setDescriptionTitle(e.target.value)}
                        />
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
                        <div className={styles.imageContainer}>
                            <img
                                src={mainImage}
                                className={styles.previewMain}
                            />
                            <input 
                                className={styles.mainImageInput}
                                type='file'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <div className={styles.subImages}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewSub}
                                />
                                {/* <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewSub}
                                />
{/*                                 <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                        </div>
                        <div className={styles.subImages}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewBottom}
                                />
                                {/* <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewBottom}
                                />
                                {/* <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewBottom}
                                />
                                {/* <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                            <div className={styles.imageContainer}>
                                <img
                                    src={mainImage}
                                    className={styles.previewBottom}
                                />
                                {/* <input 
                                    className={styles.mainImageInput}
                                    type='file'
                                    onChange={(e) => setFile(e.target.files[0])}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button></button>
            </form>
        </div>
            )
}