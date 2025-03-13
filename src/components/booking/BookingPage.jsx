import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './BookingPage.module.css';
import CommentBox from "../../components/commentSection/CommentBox";
import Calendario from '../Calendario/Calendario';

const BookingPage = () => {
  const location = useLocation();
  const { titulo, subtitulo, estimatedTime, image, guide, descriptionTitle } = location.state;
  const [selectedDate, setSelectedDate] = useState('');
  const [price, setPrice] = useState(10);

  return (
    <div className={styles.bookingPage}>
      <div className={styles.contentContainer}>
        <div className={styles.bookingCard}>
          {/* Header con imagen y títulos */}
          <div className={styles.headerSection}>
            <img src={image} alt={titulo} className={styles.destinationImage} />
            
            <div className={styles.titleSection}>
              <h1>{titulo}</h1>
              <p>Guía: {guide}</p>
            </div>
          </div>

          {/* Detalle de la ruta */}
          <div className={styles.detailsSection}>
            <div className={styles.detailsRow}>
              <h3>Ruta - {subtitulo}</h3>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className={styles.priceInput}
              />
            </div>
            <p style={{ marginTop: '0.5rem', color: '#666' }}>{estimatedTime}</p>
          </div>

          {/* Total */}
          <div className={styles.totalSection}>
            <span>Total</span>
            <span>US$ {price.toFixed(2)}</span>
          </div>

          {/* Botón de reserva */}
          <div style={{ padding: '1rem' }}>
            <button
              className={styles.bookButton}
              onClick={() => {
                if (!selectedDate) {
                  alert("Por favor selecciona una fecha antes de confirmar la reserva.");
                  return;
                }
                console.log("Reserva confirmada para:", selectedDate);
                // Aquí puedes agregar lógica para enviar la reserva al backend
              }}
            >
              Confirmar reserva
            </button>

          {/* Comentarios */}
          <div className={styles.commentsSection}>
            <CommentBox destino={descriptionTitle} />
          </div>
        </div>
      </div>
      {/* Calendario */}
      <div className={styles.calendarSection}>
        <h3>Selecciona una fecha:</h3>
        <Calendario
          onSelectDate={(date) => setSelectedDate(date)}
          markedDates={["Enero1", "Enero24", "Febrero9"]} 
        />

        {selectedDate && (
          <p style={{ marginTop: '1rem' }}>
            Fecha seleccionada: <strong>{selectedDate}</strong>
          </p>
        )}
      </div>
    </div>
  </div>
  );
};

export default BookingPage;