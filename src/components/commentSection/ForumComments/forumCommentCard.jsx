import React from "react";
import styles from "./forumCommentCard.module.css";

const CommentCard = ({ avatarText, userName, comment }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.userInfoContainer}>
        <div className={styles.avatar}>{avatarText}</div>
        <div className={styles.textContent}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.commentText}>{comment}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
