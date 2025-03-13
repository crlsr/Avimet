import React from "react";
import styles from "./forumCommentBar.module.css";

export function ForumCommentBar() {
  return (
    <section className={styles.inputContainer}>
      <textarea
        className={styles.inputField}
        placeholder="Cuéntanos tu experiencia..."
        aria-label="Compartir experiencia"
      />
      <div className={styles.actionArea} />
    </section>
  );
}