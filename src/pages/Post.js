import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AddComment from '../components/AddComment/AddComment';
import CommentCard from '../components/CommentCard/CommentCard';
import {getOnePost, getComments} from '../http/userAPI'
import styles from './css/post.module.css'

const Post = observer(() => {
  const [addVisible, setAddVisible] = useState(false);
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState(null);
  const {id} = useParams() ;
  useEffect(()=>{
    getOnePost(id).then(({data})=>setPost(data['0']))
    getComments(id).then(({data})=>setComments(data))
  },[])
  if(post && comments){
    return(
      <div className={styles.container}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <p className={styles.body}>
          {post.body}
        </p>
        {comments.map(comment=><CommentCard key={comment.id} comment={comment} />)}
        <div className={styles.wrapper}>
          <button className={styles.commentButton} onClick={() => setAddVisible(true)}>Add comment</button>
        </div>
        <AddComment show={addVisible} onHide={()=>setAddVisible(false)}/>
      </div>
    )
  }
})

export default Post;
