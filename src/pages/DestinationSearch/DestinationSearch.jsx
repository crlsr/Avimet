import React, { useState, useEffect } from "react";
import styles from "./DestinationSearch.module.css";
import TarjetaDestinos from "../../components/tarjetaDestinos/TarjetaDestinos";
import { useParams } from "react-router-dom";
import appFirebase from "../../credenciales";
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { IoIosSearch } from "react-icons/io";
import FiltroTags from "../../components/FiltroTags/FiltroTags";

const db = getFirestore(appFirebase);

export default function DestinationSearch() {
  const params = useParams();
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredDestinations, setFilteredDestinations] = useState([]); 
  const selectedTags = [];

  async function getDestinations(selectedTags) {

    if(selectedTags.length === 0){
      const querySnapshot = await getDocs(collection(db, "destinations"));
      const destinationsList = querySnapshot.docs.map((doc) => doc.data());
      setDestinations(destinationsList);
    } else{

      const destinationCollection = collection(db, "filtrospordestino");
      const queryCollection = query(destinationCollection, where("tag", "in", selectedTags));
      const destinationSnapshot = await getDocs(queryCollection);
      //Filtramos los documentos
      const dests = [];
      destinationSnapshot.forEach((doc) => {
        const data = doc.data();
        dests.push(data.dest);
      })

      const AllDest = collection(db, "destinations");
      const queryDest = query(AllDest, where("destination", "in", dests));
      const destSnapshot = await getDocs(queryDest);
      const destinationsList = destSnapshot.docs.map((doc) => doc.data());
      setFilteredDestinations(destinationsList);

    }
    
  } 

  useEffect(() => {
    getDestinations(selectedTags);
  }, [params]);


  useEffect(() => {
    const filtered = destinations.filter((dest) =>
      dest.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [searchTerm, destinations]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Descubre el <span className={styles.finalTitle}>Ávila</span>
        </h1>
        <hr className={styles.separator} />
        <h3 className={styles.subtitle}>
          Las maravillas del Orgullo Caraqueño
        </h3>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className={styles.searchBox}>
        <div className={styles.searchContainer}>
          <IoIosSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar un destino..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FiltroTags options={[]} selectedTags={selectedTags}/>
        
      </div>

      {/* Destinos */}
      <div className={styles.destinationContainer}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, index) => (
            <TarjetaDestinos
              key={index}
              imagen={dest.images.bannerUrl}
              titulo={dest.destination}
              descripcion={dest.description}
              colorClase={index % 2 === 0 ? "darkgreen" : "lightgreen"}
              dirreccion={dest.slug}
            />
          ))
        ) : (
          <h2 className={styles.noResults}>
            No se han encontrado destinos con "{searchTerm}"
          </h2>
        )}
      </div>
    </div>
  );
}
