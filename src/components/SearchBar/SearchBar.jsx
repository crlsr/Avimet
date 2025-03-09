import React, {useState, useEffect} from "react";
import './SearchBar.css';
import { db } from "firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


function SearchBar(){

    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const [results, setResults] = useState([]); // Estado para los resultados de búsqueda
  
    // Función para buscar en Firestore
    const searchFirestore = async (term) => {
      if (term === "") {
        setResults([]); // Si el término está vacío, limpia los resultados
        return;
      }
  
      // Referencia a la colección en Firestore
      const itemsRef = collection(db, "destinations");
  
      // Crea una consulta para buscar coincidencias en el campo "destination"
      const q = query(itemsRef, where("destination", ">=", term), where("destination", "<=", term + "\uf8ff"));
  
      // Ejecuta la consulta
      const querySnapshot = await getDocs(q);
  
      // Procesa los resultados
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
  
      // Actualiza el estado con los resultados
      setResults(items);
    };
  
    // Escucha cambios en el término de búsqueda
    useEffect(() => {
      searchFirestore(searchTerm);
    }, [searchTerm]);

    return (<li className={styles.search_container}>
                <IoIosSearch className={styles.search_icon} />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className={styles.search_input}
                /> </li>);
}

export default SearchBar;