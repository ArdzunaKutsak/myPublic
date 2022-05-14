import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

interface IHeader {
  token: string
}

export function Header({token}: IHeader) {
  
  return (
    
    <header className={styles.header}>
      <SearchBlock token={token}/>
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
