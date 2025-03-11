"use client";
import * as React from "react";
import styles from "./InputBG.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import appFirebase from "../../credenciales";
import { getFirestore } from "firebase/firestore";
 

function StarRating({ rating, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.starRating}>
        {stars.map((star) => (
        <button
          key={star}
          className={`${styles.starButton} ${
             star <= rating ? styles.starActive : ""
          }`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-label={`Rate ${star} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

function ReviewInput({ value, placeholder, onChange }) {
  return (
    <textarea
      className={styles.escribirunaresea}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      aria-label="Write a review"
    />
  );
}

function ActionButtons({ onSend, onCancel }) {
  return (
    <div className={styles.actionButtons}>
      <button
        onClick={onCancel}
        className={`${styles.button} ${styles.cancelButton}`}
      >
        Cancelar
      </button>
      <button
        onClick={onSend}
        className={`${styles.button} ${styles.sendButton}`}
      >
        Comentar
      </button>
    </div>
  );
}

function InputBG() {
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const { logged, profile } = React.useContext(UserContext);
  const db = getFirestore(appFirebase);
  const navigate = useNavigate();

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSend = () => {
    if(logged === true){
      if (rating === 0) {
        alert("Porfavor, selecione un rating");
        return;
      }
      console.log("Mandando comentario:", { rating, review });
      alert(logged)
      // Here you would typically send the data to your backend
      handleCancel(); // Reset form after sending
    } else{
      navigate("./Login");
      handleCancel();
    }
  };

      const handleCancel = () => {
      setRating(0);
      setReview("");
    }

  return (
    <section className={styles.inputBg}>
      <div className={styles.reviewContainer}>
         <StarRating rating={rating} onRatingChange={setRating} />
         <div className={styles.inputWrapper}>
           <ReviewInput
             value={review}
             placeholder="Escribir una reseña..."
             onChange={handleReviewChange}
           />
         </div>
        <ActionButtons onSend={handleSend} onCancel={handleCancel} />
      </div>
    </section>
  );
}
  


export default InputBG;
