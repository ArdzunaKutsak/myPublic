import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import {  getPosts} from '../http/userAPI'
import styles from './css/postslist.module.css'

const PostList = observer(() => {
  const {id} = useParams() 
  const [posts, setPosts] = useState(null)
  useEffect(()=>{
    getPosts(id).then(({data})=>setPosts(data))
  },[])
  if(posts){
  return (
    <ul className={styles.postsList}>  
      {posts.map(post=><PostCard key={post.id} post={post} />)}
    </ul> 
  );}
})

export default PostList;
