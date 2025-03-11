import styles from "./CommentBox.module.css";
import React, { useEffect, useState } from 'react';
import { getFirestore,query, collection, getDocs, where } from 'firebase/firestore';
import appFirebase from '../../credenciales';
import CommentComponent from "./commentComponent"; // Asegúrate de importar el componente Comment


function CommentBox({destino}) {
    const [comments, setComments] = useState([]);
    const db = getFirestore(appFirebase);

    useEffect(() => {
        const fetchComments = async () => {
            try{
                const commentsCollection = collection(db, "comments");
                const queryCollection = query(commentsCollection, where("destino", "==", destino));
                const commentsSnapshot = await getDocs(queryCollection);
                const commentList = commentsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setComments(commentList);
            } catch(error){
                console.log("Error: ", error);
            }
        };

        fetchComments();
    }, [db, destino])

  return (
    <section className={styles.container}>
      <article className={styles.content}>
      {comments.map(comment => (
            <CommentComponent 
            avatarText={comment.autor[0]}
            userName={comment.autor}
            comment={comment.comment}
            rating={comment.stars}
            />
        ))}
      </article>
    </section>
  );
}

export default CommentBox;



