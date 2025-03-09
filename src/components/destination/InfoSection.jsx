import React from 'react'
import image from '../../assets/sabas-nieves.png'
import DescriptionCard from './DescriptionCard'
import GuideCard from './GuideCard'
import './Destination.css'


export default function InfoSection({description , descriptionTitle , guide , guideDescription}) {
    return (
        <div className='info-section'>
            <DescriptionCard
                image={image}
                description={description}
                title={descriptionTitle}
            />
            <GuideCard
                image={image}
                guide={guide}
                guideDescription={guideDescription}
            />
            {/* Aqui el componente comentarios */}
        </div>
        
    )
}