import React from 'react';
import styles from './cardslist.css';

 
interface ICardsList {
   children?: React.ReactNode;
 }

export function CardsList({children} : ICardsList) {
  return (
    <ul className={styles.cardsList}>
      {children}      
    </ul>
  );
}
