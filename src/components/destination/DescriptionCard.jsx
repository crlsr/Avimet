import React from "react";
import "./Destination.css";

function DescriptionCard({ image , description , title}) {
  return (
    <section className='destination-card'>
      <div className='card-container'>
        <div className='content-wrapper'>
            <img
                src={image}
                alt="Destination view"
                className='destination-image'
            />
            <div className='text-content'>
                <h2 className='title'>{title}</h2>
                <p className='description'>
                    {description}
                </p>
                <button className='btn-secondary'>
                    Ver consejos
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionCard;