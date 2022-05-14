import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from '../UserBlock';
import axios from 'axios'


interface ISearchBlock {
  token: string,
}

interface IUserData {
  name?: string,
  iconImg?: string,
}

export function SearchBlock({token}: ISearchBlock) {
  const [data, setData] = useState<IUserData>({})
  useEffect(()=> {
    axios.get('https://oauth.reddit.com/api/v1/me',
    {headers: {Authorization: `bearer ${token}`}
  }).then((response) => {
    const userData = response.data;
    console.log(response);
    setData({
      name: userData.name,
      iconImg: userData.icon_img})
  })
  .catch(console.log)
  }, [token])
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
