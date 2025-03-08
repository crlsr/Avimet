import React from "react"
import "./Destination.css"
import InfoLabel from "./InfoLabel"
import image from '../../assets/sabas-nieves.png'

export default function MapBanner() {
    return (
    <div className="map-banner">
        <div className="map-container">
            <img src={image} className="map" />
            <div className="about-container">
                <div><span className="first-part">Sobre</span> Sabas Nieves</div>
                <InfoLabel title="Distancia" info="a"/>
                <InfoLabel title="Tiempo Estimado" info="b"/>
                <InfoLabel title="Dificultad" info="c"/>
            </div>
        </div>
    </div>
    
    )
}