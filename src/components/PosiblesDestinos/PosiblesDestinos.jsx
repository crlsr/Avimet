import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import styles from "./PosiblesDestinos.module.css"; // Importa el módulo CSS

const db = getFirestore(appFirebase);

const PosiblesDestinos = ({ options, selectedSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para las opciones filtradas
  const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada
  const [alloptions, setAllowoptions] = useState({});
  const test = {};

  const fetchData = async () => {
    const itemsRef = collection(db, 'postulaciones');
    let q;

    q = query(itemsRef);

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        test[doc.data().nombredest + " de id: " + doc.data().slug] =  doc.data().slug;// Asegúrate de que el campo "nombre" exista
      });
      const destNames = Object.keys(test);
      setAllowoptions(test)


      setFilteredOptions(destNames); // Actualiza el estado con los nombres obtenidos
    } catch (error) { 
      console.error("Error al obtener documentos: ", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData cuando el componente se monta
    console.log(selectedOption);
  }, [selectedSlug]); // Dependencia para volver a ejecutar cuando selectedTags cambie

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const chose = alloptions[option];
    setSelectedOption(option); // Actualiza la opción seleccionada
    if(selectedSlug.length > 0){
      selectedSlug.pop();
    }
    selectedSlug.push(chose);
    console.log(selectedSlug);
    setIsOpen(false); // Cierra el menú después de seleccionar
    return selectedSlug;
  };

  return (
    <div className={styles.PosiblesDestinos}>
      <button onClick={toggleDropdown} className={styles.PosiblesDestinosButton}>
        Filtro Destino
      </button>
      {isOpen && (
        <ul className={styles.PosiblesDestinosMenu}>
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

export default PosiblesDestinos;
