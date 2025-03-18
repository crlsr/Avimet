// Postulacion.jsx
import React from 'react';
import './Postulacion.module.css'; // Importamos los estilos
import { collection, addDoc } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appFirebase);

const Postulacion = (idPersona, slug_destino, NombreDest, NombrePer) => {
  // Función que se ejecuta al hacer clic en el botón
  const handleClick = async () => {
    const docRef = await addDoc(collection(db, 'postulaciones'), {
        idusuario: idPersona, // Datos del documento
        slug: slug_destino,
        nombredest: NombreDest,
        nombrePer: NombrePer
      });
  };

  return (
    <button
      className="postulacion-button" // Aplicamos la clase CSS
      onClick={handleClick(idPersona, slug_destino)} // Asignamos la función al evento onClick
    >
      Postulación
    </button>
  );
};

export default Postulacion;