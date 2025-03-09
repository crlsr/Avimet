"use client";
import * as React from "react";
import styles from "./InputBG.module.css";

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = React.useState(0);

  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`${styles.star} ${
            (hover || rating) >= star ? styles.starActive : ""
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

function InputBG() {
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <section className={styles.inputBg}>
      <div className={styles.contentWrapper}>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <textarea
          className={styles.reviewTextarea}
          placeholder="Escribir una reseña..."
          onChange={handleReviewChange}
          value={review}
          aria-label="Write a review"
        />
      </div>
    </section>
  );
}

export default InputBG;
