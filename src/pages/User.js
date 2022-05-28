import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import {getOneUser, getPosts} from '../http/userAPI'
import { POST_LIST_ROUTE } from '../utils/consts';
import styles from './css/user.module.css'
import { useNavigate } from 'react-router-dom';

const User = observer(() => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)
  const {id} = useParams() 
  useEffect(()=>{
    getPosts(id).then(({data})=>setPosts(data))
    getOneUser(id).then(({data})=>setUser(data))
  },[])
  if(user && posts){
    return (
      <div >
        <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>{user.username}</li>
          <li className={styles.item}><span className={styles.itemName}>Name:</span> {user.name}</li>
          <li className={styles.item}><span className={styles.itemName}>Email:</span> {user.email}</li>
          <li className={styles.item}><span className={styles.itemName}>Phone:</span> {user.phone}</li>
          <li className={styles.item}><span className={styles.itemName}>Website:</span> {user.website}</li>
          <li className={styles.item}><span className={styles.itemName}>Company:</span> {user.company.name}</li>
          <li className={styles.item}><span className={styles.itemName}>BS:</span> {user.company.bs}</li>
        </ul>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Написать сообщение</button>
          <button className={styles.btn}>Предложить сходить на концерт</button>
        </div>
        </div>
        <div className={styles.postsBar}>
          <h1 className={styles.posts}>Posts</h1>
          <button onClick={()=>navigate(POST_LIST_ROUTE + '/' + id)}  className={styles.postLink}>See all</button>
        </div>
        <div className={styles.postsContainer}> 
          <ul className={styles.postsList}>  
            {posts.slice(0,3).map(post=><PostCard key={post.id} post={post} />)}
          </ul> 
        </div>
      </div>
    
  );}

})

export default User;
