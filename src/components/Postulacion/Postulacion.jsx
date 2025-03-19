// Postulacion.jsx
import React from 'react';
import './Postulacion.module.css'; // Importamos los estilos
import { collection, addDoc } from "firebase/firestore";
import appFirebase from "../../../credenciales";
import { getFirestore } from "firebase/firestore";
import emailjs from 'emailjs-com';

const db = getFirestore(appFirebase);

const Postulacion = (NombreDest, NombrePer) => {

  const serviceID = 'wejfverijvfwoeirjfjrkqvw';
  const templateID = 'template_57a9632';
  const userID = 'EpWodUNXN2HZHuy6Y';

  const templateParams = {
    name: name,
    email: email,
    message: "El usuario " + NombrePer + " desea ser el guía designado de la ruta " + NombreDest,
    time: new Date().toLocaleString()
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = async () => {
    const itemsRef = collection(db, "users");
      let q;
      q = query(itemsRef, where("userType", "is", "admin"));
    
        try {
          const querySnapshot = await getDocs(q);
          const emails = []; // Array para almacenar los nombres
    
          querySnapshot.forEach((doc) => {
            emails.push(doc.data().email); // Asegúrate de que el campo "nombre" exista
            templateParams.email = email;
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Correo enviado con éxito!');
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el correo.');
            });
          });
        }  catch (error) {
          console.error("Error al obtener documentos: ", error);
        }

      
     
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