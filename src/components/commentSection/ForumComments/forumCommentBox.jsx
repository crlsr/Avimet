import React, { useEffect, useState } from "react";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import appFirebase from "../../../credenciales";
import styles from "./forumCommentBox.module.css";
import CommentCard from "./forumCommentCard";

export function ForumCommentBox() {
  const [comments, setComments] = useState([]);
  const db = getFirestore(appFirebase);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsCollection = collection(db, "comments");
        const queryCollection = query(
          commentsCollection,
          where("destino", "==", "Foro")
        );
        const commentsSnapshot = await getDocs(queryCollection);
        const commentList = commentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentList);
      } catch (error) {
        console.log("Error: ", {error});
      }
    };

    fetchComments()
  }, [db]);

  return (
    <div className={styles.inputContainer}>
      <section className={styles.forumContent}>
        <article className={styles.content}>
          {comments.map((comment) => (
            <CommentCard 
            avatarText={comment.autor[0]}
            userName={comment.autor}
            comment={comment.comment}
            />
          ))}
        </article>
      </section>
    </div>
  );
}
