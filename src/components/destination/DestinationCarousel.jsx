import React from "react"
import ProductCarousel from '../productCarousel/ProductCarousel';
import './Destination.css'
import image from '../../assets/sabas-nieves.png'

export default function DestinationCarousel() {
    return(
        <div>
            <div className="destination-carousel">
                <ProductCarousel
                    images={[image]}
                    className="mediumCarousel"
                />
            </div>
        </div>
        
    )
}