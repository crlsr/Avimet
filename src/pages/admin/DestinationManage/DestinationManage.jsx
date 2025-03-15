import React, { useState, useEffect } from "react";
import styles from "./DestinationManage.module.css";
import TarjetaDestinos from "../../../components/TarjetaDestinos/TarjetaDestinos";
import { useParams } from "react-router-dom";
import appFirebase from "../../../credenciales";
import {
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { IoIosSearch } from "react-icons/io";

const db = getFirestore(appFirebase);

export default function DestinationSearch() {
  const params = useParams();
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

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

  const handleCreateCategory = () => {
    setShowForm(!showForm);
    setStatusMessage("");
  };

  const handleAddCategory = async () => {
    if (!categoryName.trim() || !categoryDescription.trim()) {
      setStatusMessage("Debes completar ambos campos");
      return;
    }
    try {
      setStatusMessage("Creando nueva categoría...");
      const tagsCollection = collection(db, "tags");
      const querySnapshot = await getDocs(tagsCollection);
      const newId = querySnapshot.size + 1;
      await setDoc(doc(db, "tags", newId.toString()), {
        nombre: categoryName,
        descrip: categoryDescription,
      });
      setStatusMessage("Categoría agregada con éxito");
      setTimeout(() => {
        setCategoryName("");
        setCategoryDescription("");
        setShowForm(false);
        setStatusMessage("");
      }, 2000);
    } catch (error) {
      setStatusMessage("Error: Ha ocurrido un error inesperado");
      console.error("Error al agregar la categoría:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Manejo de <span className={styles.finalTitle}>Destinos</span>
        </h1>
        <hr className={styles.separator} />
      </div>
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
      </div>
      <div className={styles.createContainer}>
        <button className={styles.createTag} onClick={handleCreateCategory}>
          Crear nueva categoría
        </button>
      </div>
      <div className={`${styles.formContainer} ${showForm ? styles.show : ""}`}>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          className={styles.inputName}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          maxLength={30}
        />
        <textarea
          type="text"
          placeholder="Descripción"
          className={styles.textareaField}
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
          maxLength={250}
        />

        <button className={styles.addButton} onClick={handleAddCategory}>
          Agregar
        </button>
        <p className={styles.statusMessage}>{statusMessage}</p>
      </div>
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
