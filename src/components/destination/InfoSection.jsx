import React from 'react'
import DescriptionCard from './DescriptionCard'
import GuideCard from './GuideCard'
import './Destination.css'
import InputBG from '../commentSection/InputBG'


export default function InfoSection({description , descriptionTitle , descriptionImage , guide , guideDescription , guideImage }) {
    return (
        <div className='info-section'>
            <DescriptionCard
                image={descriptionImage}
                description={description}
                title={descriptionTitle}
            />
            <GuideCard
                image={guideImage}
                guide={guide}
                description={guideDescription}
            />
            <InputBG/>
        </div>
        
    )
}