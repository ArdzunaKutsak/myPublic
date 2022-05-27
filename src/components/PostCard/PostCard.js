import React from 'react'
import styles from './postcard.module.css'
import {useNavigate } from 'react-router-dom'
import {POST_ROUTE} from '../../utils/consts'
function PostCard({post}) {
  const navigate = useNavigate()
  return (
    <li className={styles.container}>
      <button className={styles.button} onClick={()=>navigate(POST_ROUTE + '/' + post.id)}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>
      </button>
    </li>
  );
}

export default PostCard;