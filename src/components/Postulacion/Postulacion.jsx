import React, { useContext } from 'react';
import './Postulacion.module.css'; // Importamos los estilos
import { collection, query, where, getDocs } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import emailjs from 'emailjs-com'; // Correct import for emailjs
import { UserContext } from '../../context/UserContext';

const db = getFirestore(appFirebase);

const Postulacion = ({ NombreDest, NombrePer }) => {
  const { profile } = useContext(UserContext); // Destructure profile from UserContext
  const role = profile ? profile["userType"] : null; // Ensure profile exists before accessing userType

  const serviceID = 'wejfverijvfwoeirjfjrkqvw'; // Replace with your EmailJS service ID
  const templateID = 'template_57a9632'; // Replace with your EmailJS template ID
  const userID = 'EpWodUNXN2HZHuy6Y'; // Replace with your EmailJS user ID

  const templateParams = {
    name: NombrePer,
    email: "", // Se actualizará con el correo del admin
    message: `El usuario ${NombrePer} desea ser el guía designado de la ruta ${NombreDest}`,
    time: new Date().toLocaleString(),
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = async () => {
    const itemsRef = collection(db, "users");
    const q = query(itemsRef, where("userType", "==", "admin")); // Busca usuarios con userType "admin"

    try {
      const querySnapshot = await getDocs(q);
      const emails = []; // Array para almacenar los correos de los administradores

      querySnapshot.forEach((doc) => {
        const adminEmail = doc.data().email;
        emails.push(adminEmail); // Agrega el correo del admin al array

        // Envía un correo a cada administrador
        templateParams.email = adminEmail;
        emailjs.send(serviceID, templateID, templateParams, userID)
          .then((result) => {
            console.log(result.text);
            alert('Correo enviado con éxito!');
          }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el correo.');
          });
      });

      console.log("Correos de administradores:", emails);
    } catch (error) {
      console.error("Error al obtener documentos: ", error);
    }
  };

  // Renderiza el botón solo si el rol es "guide"
  if (role !== "guide") {
    return null; // No renderiza nada si el rol no es "guide"
  }

  return (
    <button
      className="postulacion-button" // Aplicamos la clase CSS
      onClick={handleClick} // Asignamos la función al evento onClick
    >
      Postulación
    </button>
  );
};

export default Postulacion;