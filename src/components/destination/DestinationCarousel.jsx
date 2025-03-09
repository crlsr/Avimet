import React from "react"
import ProductCarousel from '../productCarousel/ProductCarousel';
import './Destination.css'

export default function DestinationCarousel( { images } ) {
    return(
        <div>
            <div className="destination-carousel">
                <ProductCarousel
                    images={images}
                    className="mediumCarousel"
                />
            </div>
        </div>
        
    )
}