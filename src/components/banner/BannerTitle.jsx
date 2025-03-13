import React from "react"
import "./BannerTitle.css"

export default function BannerTitle({titulo, subtitulo, botonTexto}) {

    const [primeraParte, ...resto] = titulo.split(" ");

    return(
        <div className="contenido">
            <p className="subtitulo">{subtitulo}</p>
            <h1 className="titulo">
                <span className="primeraParte">{primeraParte}</span> {resto.join(" ")}
            </h1>
            <button className="btn-primary">{botonTexto}</button>
        </div>
    )
}