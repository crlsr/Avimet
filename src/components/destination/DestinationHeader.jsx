import React from "react"
import BannerTitle from "../banner/BannerTitle"
import "./Destination.css"
import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon"


export default function DestinationHeader({ titulo, subtitulo, image }) {

    return (
        <div className="header-container" style={{ backgroundImage: `url(${image})`}}>
            <button className="btn-tertiary return-button">
                <ArrowBackIcon className="arrow-back" />
                Volver
            </button>
            <BannerTitle
                subtitulo={subtitulo}
                titulo={titulo}
                botonTexto="Reservar"
            />
        </div>
    )
}