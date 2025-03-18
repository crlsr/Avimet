import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import styles from "./FiltroTags.module.css"; // Importa el módulo CSS

const db = getFirestore(appFirebase);

const FiltroTags = ({ options, selectedSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para las opciones filtradas
  const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada

  const fetchData = async () => {
    const itemsRef = collection(db, "postulaciones");
    let q;

    q = query(itemsRef);

    try {
      const querySnapshot = await getDocs(q);
      const names = {}; // Array para almacenar los nombres

      querySnapshot.forEach((doc) => {
        names[doc.data().nombredest] =  doc.data().slug;// Asegúrate de que el campo "nombre" exista
      });

      setFilteredOptions(names); // Actualiza el estado con los nombres obtenidos
    } catch (error) {
      console.error("Error al obtener documentos: ", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData cuando el componente se monta
  }, [selectedTags]); // Dependencia para volver a ejecutar cuando selectedTags cambie

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Actualiza la opción seleccionada
    if(selectedTags.includes(option)){
      selectedTags.splice(selectedTags.indexOf(option), 1);
    } else {
      selectedTags.push(option);
    }
    setIsOpen(false); // Cierra el menú después de seleccionar
    return selectedTags;
  };

  return (
    <div className={styles.FiltroTags}>
      <button onClick={toggleDropdown} className={styles.FiltroTagsButton}>
        Filtros
      </button>
      {isOpen && (
        <ul className={styles.FiltroTagsMenu}>
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)} // Maneja el clic en la opción
              className={selectedOption === option ? styles.selected : ""} // Aplica clase si es la opción seleccionada
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FiltroTags;
