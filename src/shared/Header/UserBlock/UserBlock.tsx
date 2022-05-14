import React from 'react';
import styles from './userblock.css';
import { EColor, Text } from '../../Text';
import { IconAnon } from '../../Icon';

interface IUserBlock {
  avatarSrc?: string,
  username?: string,
}

export function UserBlock({avatarSrc, username}: IUserBlock) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=nluyrxgLR3ZR_Pq4ZN-sXA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit" className={styles.userBlock}>
      <div className={styles.avatarBox}>
        {avatarSrc 
        ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
      : <IconAnon />}
      </div>
      <div className={styles.username}>
        <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || "Аноним"}</Text>
      </div>
    </a>
  );
}
