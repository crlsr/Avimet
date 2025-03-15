import React, { useState, useEffect } from "react";
import styles from "./DestinationSearch.module.css";
import TarjetaDestinos from "../../components/TarjetaDestinos/TarjetaDestinos";
import { useParams } from "react-router-dom";
import appFirebase from "../../credenciales";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { IoIosSearch } from "react-icons/io";

const db = getFirestore(appFirebase);

export default function DestinationSearch() {
  const params = useParams();
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredDestinations, setFilteredDestinations] = useState([]); 

  async function getDestinations() {
    const querySnapshot = await getDocs(collection(db, "destinations"));
    const destinationsList = querySnapshot.docs.map((doc) => doc.data());
    setDestinations(destinationsList);
  }

  useEffect(() => {
    getDestinations();
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
        <select className={styles.filterSelect}>
          <option value="">Filtrar por...</option>
          <option value="easy">Fácil</option>
          <option value="medium">Intermedio</option>
          <option value="hard">Difícil</option>
        </select>
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
