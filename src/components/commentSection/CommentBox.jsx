import styles from "./CommentBox.module.css";
import React, { useEffect, useState } from "react";
import CommentComponent from "./commentComponent";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import appFirebase from "../../../credenciales";


function CommentBox({ destino }) {
  const [comments, setComments] = useState([]);
  const db = getFirestore(appFirebase);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsCollection = collection(db, "comments");
        const queryCollection = query(
          commentsCollection,
          where("destino", "==", destino)
        );
        const commentsSnapshot = await getDocs(queryCollection);
        const commentList = commentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentList);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchComments();
  }, [db, destino]);

  return (
    <section className={styles.container}>
      <article className={styles.content}>
        {comments.map((comment) => (
          <CommentComponent
            userName={comment.autor}
            comment={comment.comment}
            picture={comment.picture}
            rating={comment.stars}
          />
        ))}
      </article>
    </section>
  );
}

export default CommentBox;
