import React from 'react'
import styles from './commentcard.module.css'
// import {useNavigate } from 'react-router-dom'


function PostCard({comment}) {
  return (
    <li className={styles.container}>
        <div>
            <div className={styles.name}>Name: <span style={{fontWeight: 400 }}>{comment.name}</span></div>
            <div className={styles.email}>Email: <span style={{fontWeight: 400 }}>{comment.email}</span></div>
            <p className={styles.body}>{comment.body}</p>
        </div>
        
    </li>
  );
}

export default PostCard;