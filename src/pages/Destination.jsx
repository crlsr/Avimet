import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import appFirebase from "../../credenciales";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import BannerTitle from '../components/banner/BannerTitle';

const db = getFirestore(appFirebase);

export default function Destination() {
    const params = useParams()
    const [destination, setDestination] = useState(null)

    async function getDestination() {
        
        const userDocRef = doc(db, "destinations", params.slug);
        
        const docSnap = await getDoc(userDocRef);
        
        const data = docSnap.data()
        
        setDestination(data)

    }

    useEffect(() => {
        getDestination()
    }, [params])

    if (destination)
        return (
            <div className="tarjeta-home-container">
                <BannerTitle 
                    titulo={destination?.destination}
                    subtitulo={destination?.titulo} 
                    botonTexto={"reservar"}
                />
            </div>
        )
}