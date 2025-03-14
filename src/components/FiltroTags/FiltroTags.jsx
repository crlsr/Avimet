import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import styles from "./FiltroTags.module.css"; // Importa el módulo CSS

const db = getFirestore(appFirebase);

const FiltroTags = ({ options, selectedTags }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para las opciones filtradas
  const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada

  const fetchData = async () => {
    const itemsRef = collection(db, "tags");
    let q;

    if (selectedTags.length === 0) {
      q = query(itemsRef);
    } else {
      q = query(itemsRef, where("nombre", "not-in", selectedTags));
    }

    try {
      const querySnapshot = await getDocs(q);
      const names = []; // Array para almacenar los nombres

      querySnapshot.forEach((doc) => {
        names.push(doc.data().nombre); // Asegúrate de que el campo "nombre" exista
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
    console.log(`Seleccionaste: ${option}`);
    selectedTags.push(option);
    const new_arr = filteredOptions.filter((item) => item !== option);
    setFilteredOptions(new_arr);
    setIsOpen(false); // Cierra el menú después de seleccionar
    return selectedTags;
  };

  return (
    <div className={styles.FiltroTags}>
      <button onClick={toggleDropdown} className={styles.FiltroTagsButton}>
        Menú Desplegable
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
