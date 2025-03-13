import React from "react";
import styles from "./forumCommentBox.module.css";

export function ForumCommentBox() {
  return (
    <div className={styles.inputContainer}>
      <section
        className={styles.forumContent}
        aria-label="Área de interacción"
      ></section>
    </div>
  );
}
