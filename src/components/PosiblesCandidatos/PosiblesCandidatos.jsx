import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import styles from "./PosiblesCandidatos.module.css"; // Importa el módulo CSS

const db = getFirestore(appFirebase);

const PosiblesCandidatos = ({ options, selectedSlug, selectedGuide }, ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para las opciones filtradas
  const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada
  const [alloptions, setAllowoptions] = useState({});
  const test = {};

  async function fetchData () {
    const itemsRef = collection(db, 'postulaciones');
    let q;

    if (selectedSlug.length > 0) {
      console.log(selectedSlug);
      q = query(itemsRef, where("slug", "in", selectedSlug));

      try {
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          test[doc.data().NombrePer + " de id: " + doc.data().idPersona] = doc.data().idPersona; // Asegúrate de que el campo "nombre" exista
        });
        
        const destNames = Object.keys(test);
        setAllowoptions(test)
  
  
        setFilteredOptions(destNames); // Actualiza el estado con los nombres obtenidos
      } catch (error) {
        console.error("Error al obtener documentos: ", error);
      }

    } else {
      console.log("vacio")
      const vacio = [];
      setFilteredOptions(vacio);
    }

    
  };

  useEffect(() => {
    console.log(selectedSlug)
    fetchData(); // Llama a fetchData cuando el componente se monta
  }, [selectedSlug]); // Dependencia para volver a ejecutar cuando selectedSlug cambie

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const chose = alloptions[option];
    setSelectedOption(option); // Actualiza la opción seleccionada
    if(selectedGuide.length > 0){
      selectedGuide.pop();
    }

    selectedGuide.push(chose);
    setIsOpen(false); // Cierra el menú después de seleccionar
    return selectedGuide;
  };

  return (
    <div className={styles.PosiblesCandidatos}>
      <button onClick={toggleDropdown} className={styles.PosiblesCandidatosButton}>
        Filtro Persona
      </button>
      {isOpen && (
        <ul className={styles.PosiblesCandidatosMenu}>
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

export default PosiblesCandidatos;
