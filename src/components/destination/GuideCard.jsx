import React from 'react'

export default function GuideCard({ image, guide, description}) {
    return(
        <section className='destination-card'>
        <div className='guide-card-container'>
            <div className='content-wrapper guide-content'>
                <div className='text-content'>
                    <h2 className='guide-title'>Guía de Ruta</h2>
                    <p className='guide-info'>
                        {guide}
                    </p>
                    <p className='description'>
                        {description}
                    </p>
                </div>
                <img
                    src={image}
                    alt="Destination view"
                    className='guide-image'
                />
            </div>
        </div>
        </section>
    )
}