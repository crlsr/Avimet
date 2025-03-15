import React from "react";
import "./BannerTitle.css";

export default function BannerTitle({ titulo, subtitulo, botonTexto, onButtonClick }) {
    const [primeraParte, ...resto] = titulo.split(" ");

    return (
        <div className="contenido">
            <p className="subtitulo">{subtitulo}</p>
            <h1 className="titulo">
                <span className="primeraParte">{primeraParte}</span> {resto.join(" ")}
            </h1>
            {botonTexto && (
                <button className="btn-primary" onClick={onButtonClick}>
                    {botonTexto}
                </button>
            )}
        </div>
    );
}