import React, {useState, useEffect} from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { collection, query, where, getDocs } from "firebase/firestore";
import { IoIosSearch } from "react-icons/io";

const db = getFirestore(appFirebase);

const FiltroTags = ({ options, selectedTags}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Referencia a la colección en Firestore
    const itemsRef = collection(db, "tags");
    // Todo
    options = [];
    if (selectedTags.length != 0){
      const q = query(itemsRef);
    } else{
      const q = query(itemsRef, where("nombre", "in", selectedTags));
    }
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <div className="FiltroTags">
        <button onClick={toggleDropdown} className="FiltroTags-button">
          Menú Desplegable
        </button>
        {isOpen && (
          <ul className="FiltroTags-menu">
            {options.map((option, index) => (
              <li key={index} oClick={() => console.log(`Seleccionaste: ${option}`)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default FiltroTags;